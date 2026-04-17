import { cn } from "@/lib/utils";
export { cn };

/**
 * Returns 'font-arabic' if the language is Arabic, merged with base classes
 */
export function getLangFont(language: string, baseClasses?: string): string {
    return cn(baseClasses, language === 'ar' ? 'font-arabic' : '');
}

/**
 * Returns a specific class based on the language (usually for directional styles)
 */
export function getLangClass(language: string, arClass: string, enClass: string = ''): string {
    return language === 'ar' ? arClass : enClass;
}
