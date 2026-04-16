import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: 'light' | 'dark';
}

const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ text = "Button", className, variant = 'light', ...props }, ref) => {
  const isDark = variant === 'dark';
  
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-full sm:w-48 cursor-pointer overflow-hidden rounded-full border p-4 text-center font-semibold transition-all duration-300",
        // Base colors
        isDark 
          ? "bg-white text-black border-white" 
          : "bg-black text-white border-black",
        className
      )}
      {...props}
    >
      <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0 relative z-20">
        {text}
      </span>
      <div className={cn(
        "absolute top-0 z-30 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100",
        isDark ? "text-white" : "text-black"
      )}>
        <span>{text}</span>
        <ArrowRight size={16} />
      </div>
      <div className={cn(
        "absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-lg transition-all duration-700 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] z-10",
        isDark ? "bg-black" : "bg-white"
      )} />
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";

export { InteractiveHoverButton };
