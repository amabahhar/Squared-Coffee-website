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
      <style>{`
        .precision-loader {
          width: 200px;
          height: 160px;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .precision-loader .cup {
          position: absolute;
          width: 50px;
          height: 36px;
          background-color: var(--loader-cup-bg, #fff);
          border: 2px solid var(--loader-border, #09090B);
          z-index: 1;
          border-radius: 4px 4px 18px 18px;
          animation: expansion 4s infinite ease-in-out;
          transform-origin: center;
          box-shadow: 0 8px 12px -2px rgba(0, 0, 0, 0.15);
        }

        .cup::after {
          content: "";
          position: absolute;
          top: -4px;
          width: calc(100% - 2px);
          height: 6px;
          background: #D4A373; /* Smooth Caramel Latte */
          border: 1.5px solid var(--loader-border, #09090B);
          border-radius: 50%;
          left: 1px;
          box-shadow: 0 0 12px rgba(212, 163, 115, 0.4); /* Subtle Glow */
        }
        
        .cup::before {
          content: "";
          position: absolute;
          top: 30px;
          width: calc(100% - 2px);
          height: 8px;
          background: transparent;
          border: 2px solid var(--loader-border, #09090B);
          border-top: none;
          border-radius: 50%;
          z-index: -1;
          left: 1px;
          opacity: 0.25;
        }

        .precision-loader .cup .cup-handle {
          position: absolute;
          width: 12px;
          height: 20px;
          background-color: var(--loader-cup-bg, #fff);
          border: 2px solid var(--loader-border, #09090B);
          right: -12px;
          top: 6px;
          border-radius: 2px 14px 18px 2px;
        }

        .precision-loader .cup .smoke {
          position: absolute;
          bottom: 120%;
          left: 50%;
          width: 25px;
          height: 45px;
          background: rgba(212, 163, 115, 0.4); /* Lighter Warm Steam */
          border-radius: 50%;
          transform: translateX(-50%);
          animation: rise 4s infinite ease-in-out;
          filter: blur(14px);
        }

        .precision-loader .cup .smoke.one {
          animation-delay: 0s;
        }
        .precision-loader .cup .smoke.two {
          animation-delay: 1.5s;
          width: 20px;
          height: 30px;
        }

        @keyframes expansion {
          0%, 100% {
            width: 50px;
            transform: translateX(0);
          }
          45% {
            width: 160px;
            transform: translateX(0);
          }
          85% {
            width: 50px;
            transform: translateX(80px);
          }
        }

        @keyframes rise {
          0% {
            transform: translate(-50%, 0) scale(0.3);
            opacity: 0;
          }
          30% {
            opacity: 0.8;
          }
          60% {
            opacity: 0.4;
          }
          100% {
            transform: translate(-50%, -100px) scale(1.5);
            opacity: 0;
          }
        }
        
        .dark .precision-loader {
          --loader-cup-bg: #18181B;
          --loader-border: #009FB8;
        }
        
        :not(.dark) .precision-loader {
          --loader-cup-bg: #FFFFFF;
          --loader-border: #09090B;
        }
      `}</style>

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
