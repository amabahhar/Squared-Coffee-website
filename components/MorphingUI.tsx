import React from 'react';
import { motion } from 'framer-motion';
import { getLangClass, cn } from '../utils/i18nUtils';
import { SPRING_CONFIG_TEXT, EASE_CUBIC_CONFIG } from '../utils/animation';
import { useTheme } from '../contexts/ThemeContext';


export const MorphingNavItem: React.FC<{
  label: string;
  href: string;
  language: string;
}> = ({ label, href, language }) => {
  const { isDarkMode } = useTheme();

  return (
    <motion.a
      href={href}
      className={cn(
        "relative px-4 py-2 rounded-md overflow-hidden block group text-xs font-bold uppercase tracking-widest",
        getLangClass(language, 'font-arabic text-sm tracking-normal')
      )}
      initial="initial"
      whileHover="hover"
      variants={{
        initial: {},
        hover: {},
      }}
    >
      <span className="relative text-transparent opacity-0 select-none block h-full">
        {label}
      </span>

      <motion.span
        className={`absolute inset-0 flex items-center justify-center transition-colors duration-300 ${
          isDarkMode ? 'text-squared-gray-100' : 'text-squared-gray-900'
        }`}
        initial={{ y: 0, scale: 1, rotate: 0 }}
        variants={{
          hover: { y: -100, scale: 0.5, rotate: language === 'ar' ? 30 : -30 },
        }}
        transition={SPRING_CONFIG_TEXT}
      >
        {label}
      </motion.span>

      <motion.span
        className="absolute inset-0 bg-squared-cyan w-full h-full scale-x-150 z-1 overflow-hidden pointer-events-none"
        initial={{ y: 100, rotate: language === 'ar' ? 40 : -40 }}
        variants={{
          hover: { y: 0, rotate: 0 },
        }}
        transition={EASE_CUBIC_CONFIG}
      >
        <motion.span
          className={`absolute inset-0 w-full h-full ${
            isDarkMode ? 'bg-squared-white' : 'bg-squared-black'
          }`}
          initial={{ y: 150, rotate: language === 'ar' ? 60 : -60 }}
          variants={{
            hover: { y: 0, rotate: 0 },
          }}
          transition={EASE_CUBIC_CONFIG}
        ></motion.span>
      </motion.span>

      <motion.span
        className={`absolute inset-0 flex items-center justify-center z-10 ${
          isDarkMode ? 'text-squared-black' : 'text-squared-white'
        }`}
        initial={{ y: 180, rotate: language === 'ar' ? 60 : -60, scale: 0.5 }}
        variants={{
          hover: { y: 0, rotate: 0, scale: 1 },
        }}
        transition={SPRING_CONFIG_TEXT}
      >
        {label}
      </motion.span>
    </motion.a>
  );
};

export type MorphingButtonVariant = 'primary' | 'ghost' | 'cyan' | 'outline';

export const MorphingButton: React.FC<{
  label: string;
  onClick?: () => void;
  language: string;
  isActive?: boolean;
  className?: string;
  variant?: MorphingButtonVariant;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  showIntermediateSpan?: boolean;
}> = ({ label, onClick, language, isActive = false, className = "", variant = "primary", type = "button", disabled = false, loading = false, showIntermediateSpan = true }) => {
  const { isDarkMode } = useTheme();
  const state = isActive ? 'hover' : 'initial';
  const interactionDisabled = disabled || loading;

  // Define dynamic colors based on variant and dark mode
  const getColors = () => {
    if (interactionDisabled) {
      return {
        initialBg: isDarkMode ? 'bg-squared-gray-800' : 'bg-squared-gray-200',
        initialText: isDarkMode ? 'text-squared-gray-500' : 'text-squared-gray-400',
        revealBg: isDarkMode ? 'bg-squared-gray-800' : 'bg-squared-gray-200',
        revealText: isDarkMode ? 'text-squared-gray-500' : 'text-squared-gray-400',
      };
    }
    switch (variant) {
      case 'cyan':
        return {
          initialBg: 'bg-squared-cyan',
          initialText: 'text-white',
          revealBg: isDarkMode ? 'bg-squared-white' : 'bg-squared-black',
          revealText: isDarkMode ? 'text-squared-black' : 'text-squared-white',
        };
      case 'outline':
        return {
          initialBg: 'bg-transparent border border-squared-gray-200 dark:border-squared-gray-800',
          initialText: isDarkMode ? 'text-squared-white' : 'text-squared-black',
          revealBg: 'bg-squared-cyan',
          revealText: 'text-white',
        };
      case 'ghost':
        return {
          initialBg: isDarkMode ? 'bg-squared-gray-900' : 'bg-squared-gray-100',
          initialText: isDarkMode ? 'text-squared-gray-400' : 'text-squared-gray-500',
          revealBg: isDarkMode ? 'bg-squared-white' : 'bg-squared-black',
          revealText: isDarkMode ? 'text-squared-black' : 'text-squared-white',
        };
      case 'primary':
      default:
        return {
          initialBg: isDarkMode ? 'bg-squared-white' : 'bg-squared-black',
          initialText: isDarkMode ? 'text-squared-black' : 'text-squared-white',
          revealBg: isDarkMode ? 'bg-squared-black' : 'bg-squared-white',
          revealText: isDarkMode ? 'text-squared-white' : 'text-squared-black',
        };
    }
  };

  const colors = getColors();

  return (
    <motion.button
      type={type}
      onClick={!interactionDisabled ? onClick : undefined}
      disabled={interactionDisabled}
      className={cn(
        "relative px-6 py-4 rounded-sm overflow-hidden block group text-xs font-bold uppercase tracking-widest transition-shadow duration-300",
        isActive ? 'shadow-sm' : '',
        getLangClass(language, 'font-arabic text-sm tracking-normal'),
        interactionDisabled ? 'cursor-not-allowed' : 'cursor-pointer',
        className
      )}
      initial="initial"
      animate={state}
      whileHover={!interactionDisabled ? "hover" : ""}
      variants={{
        initial: {},
        hover: {},
      }}
    >
      <span className="relative text-transparent opacity-0 select-none block h-full">
        {loading ? "..." : label}
      </span>

      <motion.span
        className={`absolute inset-0 flex items-center justify-center transition-colors duration-300 ${colors.initialBg} ${colors.initialText}`}
        initial={{ y: 0, scale: 1, rotate: 0 }}
        variants={{
          hover: { y: -100, scale: 0.5, rotate: language === 'ar' ? 30 : -30 },
        }}
        transition={SPRING_CONFIG_TEXT}
      >
        {label}
      </motion.span>

      {showIntermediateSpan && (
        <motion.span
          className="absolute inset-0 bg-squared-cyan w-full h-full scale-x-150 z-1 overflow-hidden pointer-events-none"
          initial={{ y: 100, rotate: language === 'ar' ? 40 : -40 }}
          variants={{
            hover: { y: 0, rotate: 0 },
          }}
          transition={EASE_CUBIC_CONFIG}
        >
          <motion.span
            className={`absolute inset-0 w-full h-full ${colors.revealBg}`}
            initial={{ y: 150, rotate: language === 'ar' ? 60 : -60 }}
            variants={{
              hover: { y: 0, rotate: 0 },
            }}
            transition={EASE_CUBIC_CONFIG}
          ></motion.span>
        </motion.span>
      )}

      {!showIntermediateSpan && (
        <motion.span
          className={`absolute inset-0 ${colors.revealBg}`}
          initial={{ y: "100%" }}
          variants={{
            hover: { y: 0 },
          }}
          transition={EASE_CUBIC_CONFIG}
        />
      )}

      <motion.span
        className={`absolute inset-0 flex items-center justify-center z-10 ${colors.revealText}`}
        initial={{ y: 180, rotate: language === 'ar' ? 60 : -60, scale: 0.5 }}
        variants={{
          hover: { y: 0, rotate: 0, scale: 1 },
        }}
        transition={SPRING_CONFIG_TEXT}
      >
        {label}
      </motion.span>
    </motion.button>
  );
};
