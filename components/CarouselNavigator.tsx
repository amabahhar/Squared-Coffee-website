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
    <motion.div
      className="flex items-center justify-center gap-1 rounded-full p-2 px-2 transition-colors duration-500"
    >
      <ArrowButton
        onClick={goPrev}
        ariaLabel="Previous slide"
      >
        <ChevronLeft size={24} strokeWidth={3} className="rtl:rotate-180" />
      </ArrowButton>

      <div className="flex items-center gap-2 px-2">
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

      <ArrowButton onClick={goNext} ariaLabel="Next slide">
        <ChevronRight size={24} strokeWidth={3} className="rtl:rotate-180" />
      </ArrowButton>
    </motion.div>
  );
};

interface ArrowButtonProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  ariaLabel: string;
}

const ArrowButton: FC<ArrowButtonProps> = ({ children, onClick, disabled, ariaLabel }) => {
  return (
    <button
      type="button"
      onClick={!disabled ? onClick : undefined}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`flex h-12 w-12 items-center justify-center rounded-full shadow-lg border 
        border-squared-gray-200 dark:border-squared-gray-800 
        bg-white dark:bg-squared-gray-950 
        text-squared-black dark:text-white 
        transition-all duration-300 ${
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer hover:scale-105 active:scale-95'
      }`}
    >
      {children}
    </button>
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
  // Use high-contrast colors for indicators
  const trackBg = isDarkMode ? 'bg-squared-gray-800' : 'bg-squared-gray-200';
  const progressBg = isDarkMode ? 'bg-squared-white' : 'bg-squared-black';
  const dotBg = isDarkMode ? 'bg-squared-gray-700' : 'bg-squared-gray-300';

  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={`Go to slide ${index + 1}`}
      layout
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      style={{ borderRadius: 24 }}
      className={`relative h-2 cursor-pointer focus:outline-none ${
        isActive ? `w-12` : `w-3 ${dotBg}`
      } transition-all duration-300`}
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
