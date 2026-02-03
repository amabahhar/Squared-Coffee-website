import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark'; // 'light' is for light backgrounds (dark text), 'dark' is for dark backgrounds (light text)
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'light' }) => {
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
    ? { primary: 'text-squared-gray-900', secondary: 'text-squared-gray-600' }
    : { primary: 'text-white', secondary: 'text-white/60' };

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* The Graphical Icon: Blue Square with ^2 */}
      <div className={`relative flex items-center justify-center bg-squared-logo shadow-sm ${sizeClasses[size]}`}>
        {/* Inner Gray Square */}
        <div className="absolute inset-[15%] bg-white flex items-center justify-center shadow-inner">
          {/* The ^2 Symbol */}
          <span className={`font-bold text-black font-sans ${textSizeClasses[size]}`}>
            ^2
          </span>
        </div>
      </div>

      {/* Text part, optional or hidden on small screens depending on usage */}
      {size !== 'sm' && (
        <div className={`mt-2 text-center uppercase tracking-widest font-extrabold leading-none ${textThemeClasses.primary}`}>
          <span className="block text-[0.65rem] md:text-xs">Squared</span>
          <span className={`block text-[0.65rem] md:text-xs ${textThemeClasses.secondary}`}>Coffee</span>
        </div>
      )}
    </div>
  );
};

export default Logo;