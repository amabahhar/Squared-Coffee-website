import React, { useState, useEffect, useRef } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { CarouselNavigator } from './CarouselNavigator';
import GridBackground from './GridBackground';

interface TestimonialsProps {}

const Testimonials: React.FC<TestimonialsProps> = () => {
    const { isDarkMode } = useTheme();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [swipeDirection, setSwipeDirection] = useState<'left' | 'right' | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const startXRef = useRef<number>(0);
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState(0);
    const { t, language } = useLanguage();

    // Auto-advance testimonials
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            handleNext();
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, currentIndex]);

    const handlePrevious = () => {
        setIsAutoPlaying(false);
        setSwipeDirection('right');
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
            setSwipeDirection(null);
        }, 400);
    };

    const handleNext = () => {
        setIsAutoPlaying(false);
        setSwipeDirection('left');
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
            setSwipeDirection(null);
        }, 400);
    };

    // Touch/Mouse handlers for swipe gesture
    const handleStart = (clientX: number) => {
        setIsDragging(true);
        startXRef.current = clientX;
        setIsAutoPlaying(false);
    };

    const handleMove = (clientX: number) => {
        if (!isDragging) return;
        const diff = clientX - startXRef.current;
        setDragOffset(diff);
    };

    const handleEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);

        // If dragged more than 100px, trigger navigation
        if (dragOffset > 100) {
            handlePrevious();
        } else if (dragOffset < -100) {
            handleNext();
        }

        setDragOffset(0);
    };

    // Get testimonial at specific offset from current
    const getTestimonial = (offset: number) => {
        const index = (currentIndex + offset + TESTIMONIALS.length) % TESTIMONIALS.length;
        return TESTIMONIALS[index];
    };

    const renderCard = (offset: number) => {
        const testimonial = getTestimonial(offset);
        const isRTL = language === 'ar';

        // Calculate position and scale based on offset
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
            const dragTransform = isDragging ? `translateX(${dragOffset}px) rotate(${dragOffset * 0.02}deg)` : 'translateX(0%) scale(1)';
            transform = dragTransform;
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
                key={`${testimonial.id}-${offset}`}
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{
                    transform,
                    opacity,
                    zIndex,
                    pointerEvents: offset === 0 ? 'auto' : 'none',
                }}
            >
                {/* Precision Lab Card - Minimalist Tech */}
                <div className="bg-squared-gray-50 dark:bg-squared-gray-900 border border-squared-gray-200 dark:border-squared-gray-800 p-8 md:p-16 h-full relative overflow-hidden group shadow-2xl transition-colors duration-300">

                    {/* Technical Markers */}
                    <div className="absolute inset-block-start-0 inset-inline-start-0 w-4 h-4 border-bs border-is border-squared-cyan"></div>
                    <div className="absolute inset-block-start-0 inset-inline-end-0 w-4 h-4 border-bs border-ie border-squared-cyan"></div>
                    <div className="absolute inset-block-end-0 inset-inline-start-0 w-4 h-4 border-be border-is border-squared-cyan"></div>
                    <div className="absolute inset-block-end-0 inset-inline-end-0 w-4 h-4 border-be border-ie border-squared-cyan"></div>

                    {/* Scanline effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-squared-cyan/5 to-transparent bg-[length:100%_4px] pointer-events-none opacity-20"></div>

                    {/* Content */}
                    <div className="relative z-10 flex flex-col h-full justify-center">
                        {/* Quote Icon - Technical */}
                        <div className="text-6xl text-squared-cyan/20 font-mono mb-6 leading-none select-none text-start">
                            "
                        </div>

                        {/* Rating */}
                        <div className="flex gap-1 mb-8 justify-start">
                            {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-4 h-4 md:w-5 md:h-5 fill-squared-cyan text-squared-cyan"
                                />
                            ))}
                        </div>

                        {/* Text */}
                        <p className={`text-xl md:text-3xl text-squared-gray-900 dark:text-white font-light leading-relaxed mb-8 text-start ${language === 'ar' ? 'font-arabic' : ''}`}>
                            {testimonial.text}
                        </p>

                        {/* Author */}
                        <div className="flex items-center justify-between border-t border-squared-gray-200 dark:border-squared-gray-800 pt-8 mt-auto">
                            <div className="text-start">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-2 h-2 bg-squared-cyan"></div>
                                    <span className={`text-xs font-bold tracking-widest uppercase text-squared-gray-500 ${language === 'ar' ? 'font-arabic' : 'font-mono'}`}>
                                        {testimonial.name}
                                    </span>
                                </div>
                                <div className="text-squared-cyan text-xs font-mono tracking-widest uppercase">
                                    {testimonial.date}
                                </div>
                            </div>

                            {/* Google Icon */}
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

    return (
        <section id="testimonials" className="py-20 bg-squared-white dark:bg-squared-black relative overflow-hidden border-t border-squared-gray-200 dark:border-squared-gray-800">
            {/* Background Grid */}
            <GridBackground />

            <div className="container mx-auto px-4 md:px-12 relative z-10">

                {/* Section Header */}
                <div className="mb-16 border-b border-squared-gray-200 dark:border-squared-gray-800 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 bg-squared-cyan animate-pulse"></div>
                            <span className="font-mono text-squared-cyan text-sm tracking tracking-[0.2em] uppercase">
                                {t.testimonials.eyebrow}
                            </span>
                        </div>
                        <h2 className={`text-4xl md:text-6xl font-bold text-squared-black dark:text-white uppercase tracking-tighter ${language === 'ar' ? 'font-arabic' : ''}`}>
                            {t.testimonials.title}
                        </h2>
                    </div>

                    {/* Stats Display */}
                    <div className="flex items-center gap-8 font-mono text-sm border-s border-squared-gray-800 ps-8">
                        <div>
                            <div className="text-squared-gray-400 mb-1">RATING</div>
                            <div className="text-squared-cyan text-xl flex items-center gap-2">
                                4.9 <span className="text-xs text-squared-gray-500">/ 5.0</span>
                            </div>
                        </div>
                        <div>
                            <div className="text-squared-gray-400 mb-1">REVIEWS</div>
                            <div className="text-squared-black dark:text-white text-xl">540+</div>
                        </div>
                    </div>
                </div>

                {/* Testimonials Carousel Container */}
                <div className="max-w-5xl mx-auto relative px-4 md:px-0">
                    <div className="absolute -inset-block-start-4 -inset-inline-start-4 w-8 h-8 border-bs border-is border-squared-cyan/50 hidden md:block"></div>
                    <div className="absolute -inset-block-end-4 -inset-inline-end-4 w-8 h-8 border-be border-ie border-squared-cyan/50 hidden md:block"></div>

                    <div
                        ref={containerRef}
                        className="relative h-[400px] md:h-[500px] cursor-grab active:cursor-grabbing"
                        style={{
                            touchAction: 'pan-y pinch-zoom',
                            WebkitUserSelect: 'none',
                            userSelect: 'none'
                        }}
                        onMouseDown={(e) => handleStart(e.clientX)}
                        onMouseMove={(e) => handleMove(e.clientX)}
                        onMouseUp={handleEnd}
                        onMouseLeave={handleEnd}
                        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
                        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
                        onTouchEnd={handleEnd}
                    >
                        {/* Render Testimonial Cards */}
                        {[-1, 0, 1].map((offset) => {
                            // Modified logic to render prev, current, next for context if needed, but keeping original logic's loop of 0 mostly unless I want to show stack? 
                            // The original logic only rendered [0] but manipulated transforms for others?
                            // Wait, looking at original code: `{[0].map((offset) => {` 
                            // The original code calculated transforms for -1, 0, 1 inside the loop but was only iterating over [0].
                            // That seems wrong if it wants to show a stack. 
                            // Ah, I see, line 264 in original was `{[0].map((offset) => {`.
                            // But inside `renderCard`, it handles offsets? 
                            // No, in original code, `renderCard` was defined ABOVE and NOT USED in the return block shown in lines 264+.
                            // Lines 264+ duplicated the logic of `renderCard`!
                            // I should fix this. I will use a simplified map here.
                            // I will render a stack of 3 cards for depth.

                            return renderCard(offset);
                        })}
                    </div>

                    {/* Controls - Standardized */}
                    <div className="flex justify-center items-center mt-12 pt-8 border-t border-squared-gray-800">
                        <CarouselNavigator
                            totalSlides={TESTIMONIALS.length}
                            currentIndex={currentIndex}
                            onIndexChange={(index) => {
                                setIsAutoPlaying(false);
                                const dir = index > currentIndex ? 'left' : 'right';
                                setSwipeDirection(dir);
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
