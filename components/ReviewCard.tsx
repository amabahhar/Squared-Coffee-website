import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { cn } from '../utils/i18nUtils';

interface ReviewCardProps {
    testimonial: {
        id: string | number;
        name: string;
        text: string;
        rating: number;
        date: string;
    };
    offset: number;
    swipeDirection: 'left' | 'right' | null;
    isDragging: boolean;
    dragOffset: number;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ 
    testimonial, offset, swipeDirection, isDragging, dragOffset 
}) => {
    const { language, t } = useLanguage();
    const isRTL = language === 'ar';
    
    // Get translated content if it exists
    const tItem = (t.testimonials as any)?.items?.[testimonial.id];
    const displayName = tItem?.name || testimonial.name;
    const displayText = tItem?.text || testimonial.text;
    const displayDate = tItem?.date || testimonial.date;

    // Calculate position and scale
    let transform = '';
    let opacity = 1;
    let zIndex = 10 - Math.abs(offset);

    if (swipeDirection === 'left' && offset === 0) {
        transform = `translateX(${isRTL ? '120%' : '-120%'}) rotate(${isRTL ? '5deg' : '-5deg'})`;
        opacity = 0;
    } else if (swipeDirection === 'right' && offset === 0) {
        transform = `translateX(${isRTL ? '-120%' : '120%'}) rotate(${isRTL ? '-5deg' : '5deg'})`;
        opacity = 0;
    } else if (swipeDirection === 'left' && offset === 1) {
        transform = 'translateX(0%) scale(1)';
        opacity = 1;
    } else if (swipeDirection === 'right' && offset === -1) {
        transform = 'translateX(0%) scale(1)';
        opacity = 1;
    } else if (offset === 0) {
        transform = isDragging ? `translateX(${dragOffset}px) rotate(${dragOffset * 0.02}deg)` : 'translateX(0%) scale(1)';
        opacity = 1;
    } else if (offset === 1) {
        transform = `translateX(${isDragging ? Math.max(0, dragOffset) * 0.5 : 0}px) translateX(${isRTL ? '-20px' : '20px'}) scale(0.95)`;
        opacity = 0.5;
        zIndex = 9;
    } else if (offset === -1) {
        transform = `translateX(${isDragging ? Math.min(0, dragOffset) * 0.5 : 0}px) translateX(${isRTL ? '20px' : '-20px'}) scale(0.95)`;
        opacity = 0.5;
        zIndex = 9;
    } else {
        const xVal = isRTL ? -40 : 40;
        transform = offset > 0 ? `translateX(${xVal}px) scale(0.9)` : `translateX(${-xVal}px) scale(0.9)`;
        opacity = 0;
    }

    return (
        <div
            className="absolute inset-0 transition-all duration-500 ease-out"
            style={{ transform, opacity, zIndex, pointerEvents: offset === 0 ? 'auto' : 'none' }}
        >
            <div className="bg-squared-gray-50 dark:bg-squared-gray-900 border border-squared-gray-200 dark:border-squared-gray-800 p-8 md:p-16 h-full relative overflow-hidden group shadow-2xl transition-colors duration-300">
                {/* Technical Markers */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-brand-primary"></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-brand-primary"></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-brand-primary"></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-brand-primary"></div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-primary/5 to-transparent bg-[length:100%_4px] pointer-events-none opacity-20"></div>

                <div className="relative z-10 flex flex-col h-full justify-center">
                    <div className="text-6xl text-brand-primary/20 font-mono mb-6 leading-none select-none text-start">"</div>

                    <div className="flex gap-1 mb-8 justify-start">
                        {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-brand-primary text-brand-primary" />
                        ))}
                    </div>

                    <p className={cn("text-xl md:text-3xl text-squared-gray-900 dark:text-white font-light leading-relaxed mb-8 text-start", language === 'ar' && "font-arabic")}>
                        {displayText}
                    </p>

                    <div className="flex items-center justify-between border-t border-squared-gray-200 dark:border-squared-gray-800 pt-8 mt-auto">
                        <div className="text-start">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 bg-brand-primary"></div>
                                <span className={cn("text-xs font-bold tracking-widest uppercase text-squared-gray-500", language === 'ar' ? 'font-arabic' : 'font-mono')}>
                                    {displayName}
                                </span>
                            </div>
                            <div className="text-brand-primary text-xs font-mono tracking-widest uppercase">{displayDate}</div>
                        </div>
                        <div className="opacity-50 group-hover:opacity-100 transition-opacity">
                            <svg className="w-6 h-6 text-squared-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
