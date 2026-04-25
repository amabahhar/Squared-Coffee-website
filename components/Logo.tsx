import { useBrand } from '../contexts/BrandContext';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'dynamic';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'light' }) => {
  const { brand } = useBrand();
  // Scaling factors based on size prop
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-24 h-24',
  };

  const textSizeClasses = {
    sm: 'text-[10px]',
    md: 'text-sm',
    lg: 'text-2xl',
  };

  const textThemeClasses = variant === 'light'
    ? { primary: 'text-squared-black', secondary: 'text-brand-primary' }
    : variant === 'dark'
      ? { primary: 'text-white', secondary: 'text-brand-primary-hover' }
      : { primary: 'text-squared-black dark:text-white', secondary: 'text-brand-primary dark:text-brand-primary-hover' };

  return (
    <div className={`flex flex-col items-center justify-center transition-colors duration-500 ${className}`}>
      {/* The Graphical Icon: Cyan Square with ^2 */}
      <div className={`relative flex items-center justify-center bg-brand-primary shadow-precision transition-all duration-500 ${sizeClasses[size]}`}>
        {/* Inner Square */}
        <div className="absolute inset-[15%] bg-white flex items-center justify-center shadow-inner">
          {/* The symbol */}
          <span className={`font-bold text-black font-sans ${textSizeClasses[size]}`}>
            {brand.logoText.symbol}
          </span>
        </div>
      </div>

      {/* Text part */}
      {size !== 'sm' && (
        <div className={`mt-2 text-center uppercase tracking-widest font-extrabold leading-none transition-colors duration-500 ${textThemeClasses.primary}`}>
          <span className="block text-[0.65rem] md:text-xs">{brand.logoText.top}</span>
          <span className={`block text-[0.65rem] md:text-xs transition-colors duration-500 ${textThemeClasses.secondary}`}>{brand.logoText.bottom}</span>
        </div>
      )}
    </div>
  );
};

export default Logo;