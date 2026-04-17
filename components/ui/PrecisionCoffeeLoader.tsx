import { motion } from "framer-motion";
import React from "react";

export const PrecisionCoffeeLoader: React.FC = () => {
  const statusLabels = [
    "CALIBRATING_EXTRACTION",
    "PULSE_HEATING_CHAMBER",
    "ANALYZING_MOLECULAR_STRUCTURE",
    "SYNTHESIZING_CAFFEINE_MATRIX",
    "OPTIMIZING_PRESSURE_CURVE"
  ];

  const [currentLabel, setCurrentLabel] = React.useState(statusLabels[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLabel(prev => {
        const currentIndex = statusLabels.indexOf(prev);
        return statusLabels[(currentIndex + 1) % statusLabels.length];
      });
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-white dark:bg-squared-black flex items-center justify-center font-mono"
    >


      <div className="flex flex-col items-center gap-20">
        <div className="precision-loader">
          <div className="cup">
            <div className="cup-handle"></div>
            <div className="smoke one"></div>
            <div className="smoke two"></div>
          </div>
        </div>

        <div className="flex flex-col items-center">
            <div className="flex items-center gap-3">
                <span className="w-2 h-2 bg-squared-cyan shadow-[0_0_8px_#009FB8] animate-pulse rounded-full"></span>
                <span className="text-[10px] text-squared-cyan-light font-mono tracking-[0.4em] uppercase text-center font-bold">
                    {currentLabel}
                </span>
            </div>
            
            <div className="mt-6 w-56 h-[1.5px] bg-squared-gray-200 dark:bg-squared-gray-800 relative overflow-hidden">
                <motion.div 
                    className="absolute inset-0 bg-squared-cyan shadow-[0_0_12px_#009FB8]"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
            </div>
            
            <span className="mt-4 text-[9px] text-squared-gray-500 dark:text-squared-gray-400 font-mono tracking-widest uppercase opacity-80">
                Squared Coffee Technical Division
            </span>
        </div>
      </div>
    </motion.div>
  );
};

export default PrecisionCoffeeLoader;
