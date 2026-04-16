import { motion } from "framer-motion";
import React from "react";

export const PixelWaveLoader: React.FC = () => {
  const statusLabels = [
    "EXTRACTING_AROMATIC_DATA",
    "CALIBRATING_BREW_PRECISION",
    "SYNTHESIZING_CAFFEINE_MOLECULES",
    "ANALYZING_MICRO_LOT_PROFILES",
    "OPTIMIZING_EXTRACTION_RATIO"
  ];

  const [currentLabel, setCurrentLabel] = React.useState(statusLabels[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLabel(prev => {
        const currentIndex = statusLabels.indexOf(prev);
        return statusLabels[(currentIndex + 1) % statusLabels.length];
      });
    }, 800);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-squared-white dark:bg-squared-black flex items-center justify-center font-mono"
    >
      <div className="flex flex-col items-center gap-14">
        <div className="branded-jump-loader"></div>
        <div className="flex flex-col items-center">
            <span className="text-[10px] text-squared-cyan tracking-[0.4em] uppercase h-4 text-center">
                {currentLabel}
            </span>
            <div className="mt-4 w-48 h-[1px] bg-squared-gray-200 dark:bg-squared-gray-800 relative overflow-hidden">
                <motion.div 
                    className="absolute inset-0 bg-squared-cyan"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PixelWaveLoader;
