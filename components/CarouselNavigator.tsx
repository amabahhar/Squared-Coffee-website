import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type FC, type ReactNode } from 'react';
import { useTheme } from '../contexts/ThemeContext';

type ThemeConfig = {
  bg: string;
  button: string;
  dot: string;
  progress: string;
};

interface CarouselNavigatorProps {
  totalSlides?: number;
  autoDelay?: number;
  themes?: ThemeConfig[];
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

const DEFAULT_TOTAL_SLIDES = 4;
const DEFAULT_AUTO_DELAY = 4000;
const DEFAULT_THEMES: ThemeConfig[] = [
  {
    bg: 'bg-squared-white dark:bg-squared-black',
    button: 'bg-squared-black dark:bg-squared-white text-white dark:text-squared-black',
    dot: 'bg-squared-gray-200 dark:bg-squared-gray-800',
    progress: 'bg-squared-gray-100 dark:bg-squared-gray-900',
  },
  {
    bg: 'bg-squared-white dark:bg-squared-black',
    button: 'bg-squared-black dark:bg-squared-white text-white dark:text-squared-black',
    dot: 'bg-squared-gray-200 dark:bg-squared-gray-800',
    progress: 'bg-squared-gray-100 dark:bg-squared-gray-900',
  },
];

const MORPHIC_SPRING = {
  type: "spring" as const,
  stiffness: 320,
  damping: 32,
  mass: 1.3,
};

const MORPHIC_EASE = {
  duration: 0.5,
  ease: [0.32, 0.72, 0, 1],
} as any; // Using any to avoid complex Framer Motion easing type mismatches

export const CarouselNavigator: FC<CarouselNavigatorProps> = ({
  totalSlides = DEFAULT_TOTAL_SLIDES,
  autoDelay = DEFAULT_AUTO_DELAY,
  themes = DEFAULT_THEMES,
  currentIndex,
  onIndexChange,
}) => {
  const { isDarkMode } = useTheme();
  const theme = themes[currentIndex] || themes[0];

  const goPrev = () => {
    onIndexChange((currentIndex - 1 + totalSlides) % totalSlides);
  };

  const goNext = () => {
    onIndexChange((currentIndex + 1) % totalSlides);
  };

  return (
    <div className="flex items-center justify-center gap-1 rtl:flex-row-reverse">
      <ArrowButton
        onClick={goPrev}
        ariaLabel="Previous slide"
        isPrev
      >
        <ChevronLeft size={24} strokeWidth={2.5} />
      </ArrowButton>

      <div className="flex items-center gap-2 px-6">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <Indicator
            key={i}
            isActive={i === currentIndex}
            theme={theme}
            autoDelay={autoDelay}
            onClick={() => onIndexChange(i)}
            index={i}
          />
        ))}
      </div>

      <ArrowButton 
        onClick={goNext} 
        ariaLabel="Next slide"
      >
        <ChevronRight size={24} strokeWidth={2.5} />
      </ArrowButton>
    </div>
  );
};

interface ArrowButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  ariaLabel: string;
  isPrev?: boolean;
}

const ArrowButton: FC<ArrowButtonProps> = ({ children, onClick, disabled, ariaLabel, isPrev }) => {
  return (
    <motion.button
      type="button"
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      aria-label={ariaLabel}
      whileHover="hover"
      whileTap="active"
      initial="initial"
      variants={{
        active: { scale: 0.96 }
      }}
      className={`relative flex h-14 w-14 items-center justify-center rounded-full overflow-hidden border 
        border-squared-gray-200 dark:border-squared-gray-800 
        bg-white dark:bg-squared-gray-950 
        text-squared-black dark:text-white 
        shadow-sm hover:shadow-xl transition-shadow duration-500 ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
      }`}
    >
      {/* 1. Initial State Icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        variants={{ 
          hover: { 
            y: isPrev ? 100 : -100, 
            scale: 0.5, 
            rotate: isPrev ? -45 : 45,
            opacity: 0
          } 
        }}
        transition={MORPHIC_SPRING}
      >
        {children}
      </motion.div>

      {/* 2. Transition Mask / Background Reveal */}
      <motion.div
        className="absolute inset-0 bg-squared-black dark:bg-white z-0 pointer-events-none"
        initial={{ y: "100%" }}
        variants={{ 
          hover: { y: 0 } 
        }}
        transition={MORPHIC_EASE}
      />

      {/* 3. Reveal State Icon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-10 text-white dark:text-squared-black pointer-events-none"
        initial={{ y: isPrev ? -100 : 100, rotate: isPrev ? 45 : -45, scale: 0.5, opacity: 0 }}
        variants={{ 
          hover: { 
            y: 0, 
            rotate: 0, 
            scale: 1,
            opacity: 1
          } 
        }}
        transition={MORPHIC_SPRING}
      >
        {children}
      </motion.div>
    </motion.button>
  );
};

const Indicator = ({
  isActive,
  theme,
  autoDelay,
  onClick,
  index
}: {
  isActive: boolean;
  theme: ThemeConfig;
  autoDelay: number;
  onClick: () => void;
  index: number;
}) => {
  const { isDarkMode } = useTheme();
  const trackBg = isDarkMode ? 'bg-squared-gray-800' : 'bg-squared-gray-200';
  const progressBg = isDarkMode ? 'bg-squared-white' : 'bg-squared-black';
  const dotBg = isDarkMode ? 'bg-squared-gray-700' : 'bg-squared-gray-300';

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={`Go to slide ${index + 1}`}
      animate={{
        width: isActive ? 48 : 12,
        backgroundColor: isActive ? 'transparent' : 'rgba(150, 150, 150, 0.3)'
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={MORPHIC_SPRING}
      className="relative h-2.5 rounded-full cursor-pointer focus:outline-none overflow-hidden"
    >
      {isActive && (
        <div className={`absolute inset-0 rounded-full ${trackBg} overflow-hidden`}>
          <motion.div
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: autoDelay / 1000, ease: 'linear' }}
            className={`h-full ${progressBg}`}
          />
        </div>
      )}
    </motion.button>
  );
};
