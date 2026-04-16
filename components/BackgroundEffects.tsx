import React from 'react';
import GeometricBackground from './GeometricBackground';

const BackgroundEffects: React.FC = () => {
  return (
    <>
      <GeometricBackground />
      {/* Aurora Background Effects */}
      <div 
        className="desktop-bg-fixed top-[-5%] right-[-5%] w-[70%] h-[70%] bg-brand-primary/15 dark:bg-brand-primary/10 rounded-full pointer-events-none z-0 hidden lg:block lg:animate-blob blur-[25px]" 
        style={{ transform: 'translateZ(0)', willChange: 'transform' }}
      ></div>
      <div 
        className="desktop-bg-fixed bottom-[-5%] left-[-5%] w-[60%] h-[60%] bg-white/20 dark:bg-brand-navy/20 rounded-full pointer-events-none z-0 hidden lg:block lg:animate-blob blur-[20px]" 
        style={{ animationDelay: '3s', transform: 'translateZ(0)', willChange: 'transform' }}
      ></div>
      <div 
        className="desktop-bg-fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-brand-primary/5 dark:bg-brand-primary/2 rounded-full pointer-events-none z-0 hidden lg:block blur-[15px]" 
        style={{ transform: 'translate(-50%, -50%) translateZ(0)', willChange: 'transform' }}
      ></div>
    </>
  );
};

export default BackgroundEffects;
