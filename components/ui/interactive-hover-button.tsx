import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { useTheme } from "../../contexts/ThemeContext";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, ...props }, ref) => {
  const { isDarkMode } = useTheme();
  
  return (
    <motion.button
      ref={ref}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative w-full sm:w-48 cursor-pointer overflow-hidden rounded-full border p-4 text-center font-semibold transition-all duration-300",
        // Base colors
        isDarkMode 
          ? "bg-white text-black border-white" 
          : "bg-black text-white border-black",
        className
      )}
      {...(props as any)}
    >
      <span className="inline-block translate-x-1 rtl:-translate-x-1 transition-all duration-300 group-hover:translate-x-12 rtl:group-hover:-translate-x-12 group-hover:opacity-0 group-active:opacity-0 relative z-20">
        {text}
      </span>
      <div className={cn(
        "absolute top-0 z-30 flex h-full w-full translate-x-12 rtl:-translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-0 rtl:group-hover:translate-x-0 group-hover:opacity-100 group-active:opacity-100 group-active:-translate-x-0",
        isDarkMode ? "text-white" : "text-black"
      )}>
        <span>{text}</span>
        <ArrowRight size={16} className="rtl:rotate-180" />
      </div>
      <div className={cn(
        "absolute inset-inline-start-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-700 group-hover:inset-inline-start-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-active:inset-inline-start-[0%] group-active:top-[0%] group-active:h-full group-active:w-full group-active:scale-[1.8] z-10",
        isDarkMode ? "bg-black" : "bg-white"
      )} />
    </motion.button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
