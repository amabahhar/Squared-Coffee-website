import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  language?: string;
}

export function FloatingInput({ label, className, language = 'en', type, ...props }: FloatingInputProps) {
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [inputType, setInputType] = useState(type);
  const isArabic = language === 'ar';
  const inputRef = useRef<HTMLInputElement>(null);

  // Synchronize internal hasValue with external value prop
  useEffect(() => {
    if (props.value) {
      setHasValue(true);
    } else {
      setHasValue(false);
    }
  }, [props.value]);

  // Handle dynamic type switching for dates to keep UI clean
  useEffect(() => {
    if (type === 'date') {
      if (focused || hasValue) {
        setInputType('date');
      } else {
        setInputType('text');
      }
    }
  }, [type, focused, hasValue]);

  const floating = focused || hasValue;

  return (
    <div className={cn("relative w-full group pt-5", className)}>
      <input
        {...props}
        ref={inputRef}
        type={inputType}
        className={cn(
          "peer w-full bg-transparent border-b-2 py-2 px-0 text-lg transition-all duration-300 outline-none flex items-center",
          "border-squared-gray-200 dark:border-squared-gray-800",
          "focus:border-brand-primary",
          "text-squared-black dark:text-squared-white",
          "placeholder:text-transparent",
          "min-h-[44px]", // Slightly taller for touch area
          isArabic && "text-start font-arabic",
          !isArabic && "font-sans"
        )}
        placeholder=" "
        onFocus={(e) => {
          setFocused(true);
          props.onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          setHasValue(e.target.value !== "");
          props.onBlur?.(e);
        }}
        onChange={(e) => {
          setHasValue(e.target.value !== "");
          props.onChange?.(e);
        }}
      />
      <motion.label
        initial={false}
        animate={{
          y: floating ? -24 : 0,
          scale: floating ? 0.8 : 1,
          color: focused ? "#009FB8" : "#71717a",
        }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "absolute pointer-events-none uppercase tracking-widest font-bold text-xs top-8",
          isArabic ? "right-0 origin-right font-arabic tracking-normal" : "left-0 origin-left"
        )}
      >
        {label} {props.required && <span className="text-brand-primary font-sans ml-1">*</span>}
      </motion.label>

      {/* Lab Accent: Corner dot */}
      <AnimatePresence>
        {focused && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="absolute bottom-0 inset-inline-end-0 w-1.5 h-1.5 bg-brand-primary mb-[-2px]"
          />
        )}
      </AnimatePresence>
      
      {/* Scanning Line Effect on focus */}
      <div 
        className={cn(
          "absolute bottom-0 inset-inline-start-0 w-full h-[2px] bg-brand-primary transition-transform duration-300 scale-x-0 group-focus-within:scale-x-100",
          isArabic ? "origin-right" : "origin-left"
        )}
      />
    </div>
  );
}