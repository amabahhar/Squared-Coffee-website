import React from 'react';

interface GridBackgroundProps {
  className?: string;
}

const GridBackground: React.FC<GridBackgroundProps> = ({ className = '' }) => {
  return (
    <div
      className={`absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] ${className}`}
      style={{
        backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                         linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }}
    />
  );
};

export default GridBackground;
