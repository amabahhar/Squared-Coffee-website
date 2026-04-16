import { motion } from "framer-motion";
import React from "react";

const GRID_SIZE = 3;
const PIXEL_SIZE = 16;
const GAP = 4;

const pixels = Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => i);

// Brand Accent Color: Squared Cyan (from index.html config)
const COLOR = "#009FB8"; 

export const PixelWaveLoader: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-[#111827] flex items-center justify-center"
    >
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${GRID_SIZE}, ${PIXEL_SIZE}px)`,
          gap: `${GAP}px`,
        }}
      >
        {pixels.map((i) => {
          const row = Math.floor(i / GRID_SIZE);
          const col = i % GRID_SIZE;

          return (
            <motion.div
              key={i}
              style={{
                width: PIXEL_SIZE,
                height: PIXEL_SIZE,
                backgroundColor: COLOR,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.7, 1.2, 0.7],
                boxShadow: [
                  "0 0 0px rgba(0,159,184,0)",
                  "0 0 20px rgba(0,159,184,0.7)",
                  "0 0 0px rgba(0,159,184,0)",
                ],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: (row + col) * 0.15,
              }}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default PixelWaveLoader;
