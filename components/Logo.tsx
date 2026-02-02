import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
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

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* The Graphical Icon: Blue Square with ^2 */}
      <div className={`relative flex items-center justify-center bg-squared-cyan shadow-sm ${sizeClasses[size]}`}>
        {/* Inner Gray Square */}
        <div className="absolute inset-[15%] bg-gray-400 flex items-center justify-center shadow-inner">
           {/* The ^2 Symbol */}
           <span className={`font-bold text-black font-sans ${textSizeClasses[size]}`}>
             ^2
           </span>
        </div>
      </div>
      
      {/* Text part, optional or hidden on small screens depending on usage */}
      {size !== 'sm' && (
        <div className="mt-2 text-center uppercase tracking-widest font-extrabold text-squared-dark leading-none">
          <span className="block text-[0.65rem] md:text-xs">Squared</span>
          <span className="block text-[0.65rem] md:text-xs text-gray-500">Coffee</span>
        </div>
      )}
    </div>
  );
};

export default Logo;