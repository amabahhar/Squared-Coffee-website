import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { CarouselNavigator } from './CarouselNavigator';
import GridBackground from './GridBackground';
import { ReviewCard } from './ReviewCard';
import { cn } from '../utils/i18nUtils';

const Testimonials: React.FC = () => {
    const { t, language } = useLanguage();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const startXRef = useRef<number>(0);

    // Auto-advance logic
    useEffect(() => {
        if (!isAutoPlaying) return;
        const interval = setInterval(handleNext, 5000);
        return () => clearInterval(interval);
    }, [isAutoPlaying, currentIndex]);

    const handleNavigate = (direction: 'left' | 'right') => {
        setIsAutoPlaying(false);
        setSwipeDirection(direction);
        setTimeout(() => {
            setCurrentIndex(prev => 
                direction === 'left' 
                    ? (prev + 1) % TESTIMONIALS.length 
                    : (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
            );
            setSwipeDirection(null);
        }, 400);
    };

    const handleNext = () => handleNavigate('left');
    const handlePrevious = () => handleNavigate('right');

    // Swipe handlers
    const handleStart = (clientX: number) => {
        setIsDragging(true);
        startXRef.current = clientX;
        setIsAutoPlaying(false);
    };

    const handleMove = (clientX: number) => {
        if (isDragging) setDragOffset(clientX - startXRef.current);
    };

    const handleEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        if (dragOffset > 100) handlePrevious();
        else if (dragOffset < -100) handleNext();
        setDragOffset(0);
    };

    const getTestimonial = (offset: number) => {
        const index = (currentIndex + offset + TESTIMONIALS.length) % TESTIMONIALS.length;
        return TESTIMONIALS[index];
    };

    return (
        <section id="testimonials" className="py-20 bg-squared-white dark:bg-squared-black relative overflow-hidden border-t border-squared-gray-200 dark:border-squared-gray-800">
            <GridBackground />

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                {/* Header Section */}
                <div className="mb-16 border-b border-squared-gray-200 dark:border-squared-gray-800 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <div className={cn("flex items-center gap-3 mb-4", language === 'ar' && "flex-row-reverse")}>
                            <div className="w-2 h-2 bg-brand-primary animate-pulse"></div>
                            <span className={cn("font-bold text-brand-primary text-sm tracking-[0.2em] uppercase", language === 'ar' ? 'font-arabic' : 'font-mono')}>
                                {t.testimonials.eyebrow}
                            </span>
                        </div>
                        <h2 className={cn("text-4xl md:text-6xl font-bold text-squared-black dark:text-white uppercase tracking-tighter", language === 'ar' && "font-arabic")}>
                            {t.testimonials.title}
                        </h2>
                    </div>

                    {/* Stats Display */}
                    <div className={cn("flex items-center gap-8 font-mono text-sm border-squared-gray-800", language === 'ar' ? 'border-e pe-8' : 'border-s ps-8')}>
                        <div className="text-start">
                            <div className="text-squared-gray-400 mb-1">RATING</div>
                            <div className="text-brand-primary text-xl flex items-center gap-2">
                                4.9 <span className="text-xs text-squared-gray-500">/ 5.0</span>
                            </div>
                        </div>
                        <div className="text-start">
                            <div className="text-squared-gray-400 mb-1">REVIEWS</div>
                            <div className="text-squared-black dark:text-white text-xl">540+</div>
                        </div>
                    </div>
                </div>

                {/* Carousel */}
                <div className="max-w-5xl mx-auto relative px-4 md:px-0">
                    <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-brand-primary/50 hidden md:block"></div>
                    <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-brand-primary/50 hidden md:block"></div>

                    <div
                        className="relative h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing select-none"
                        style={{ touchAction: 'pan-y' }}
                        onMouseDown={(e) => handleStart(e.clientX)}
                        onMouseMove={(e) => handleMove(e.clientX)}
                        onMouseUp={handleEnd}
                        onMouseLeave={handleEnd}
                        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
                        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                        onTouchEnd={handleEnd}
                    >
                        {[-1, 0, 1].map((offset) => (
                            <ReviewCard
                                key={`${getTestimonial(offset).id}-${offset}`}
                                testimonial={getTestimonial(offset)}
                                offset={offset}
                                swipeDirection={swipeDirection}
                                isDragging={isDragging}
                                dragOffset={dragOffset}
                            />
                        ))}
                    </div>

                    <div className="flex justify-center items-center mt-12 pt-8 border-t border-squared-gray-800">
                        <CarouselNavigator
                            totalSlides={TESTIMONIALS.length}
                            currentIndex={currentIndex}
                            onIndexChange={(index) => {
                                setIsAutoPlaying(false);
                                setSwipeDirection(index > currentIndex ? 'left' : 'right');
                                setTimeout(() => {
                                    setCurrentIndex(index);
                                    setSwipeDirection(null);
                                }, 400);
                            }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
