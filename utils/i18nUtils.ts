import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility to merge tailwind classes with clsx and tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Returns 'font-arabic' if the language is Arabic, merged with base classes
 */
export function getLangFont(language: string, baseClasses?: ClassValue): string {
    return cn(baseClasses, language === 'ar' ? 'font-arabic' : '');
}

/**
 * Returns a specific class based on the language (usually for directional styles)
 */
export function getLangClass(language: string, arClass: string, enClass: string = ''): string {
    return language === 'ar' ? arClass : enClass;
}
