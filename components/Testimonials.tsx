import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);

    // Auto-advance testimonials
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
                setIsAnimating(false);
            }, 300);
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const handlePrevious = () => {
        if (isAnimating) return;
        setIsAutoPlaying(false);
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
            setIsAnimating(false);
        }, 300);
    };

    const handleNext = () => {
        if (isAnimating) return;
        setIsAutoPlaying(false);
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
            setIsAnimating(false);
        }, 300);
    };

    const currentTestimonial = TESTIMONIALS[currentIndex];

    return (
        <section className="py-12 md:py-24 relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-squared-cyan/5 via-transparent to-squared-gold/5 pointer-events-none" />
            <div className="absolute top-20 right-20 w-96 h-96 bg-squared-cyan/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-20 left-20 w-80 h-80 bg-squared-gold/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-4 md:px-12 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="inline-block py-1 px-6 border-b-2 border-squared-cyan/30 text-xs md:text-sm font-black tracking-[0.4em] text-squared-cyan uppercase mb-6">
                        Testimonials
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif text-squared-gray-900 leading-[0.9] font-black tracking-tight mb-4">
                        What Our
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-squared-cyan to-squared-gold-light">
                            Customers Say
                        </span>
                    </h2>
                    <p className="text-squared-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-6">
                        Rated <span className="font-bold text-squared-cyan">4.5/5</span> on Google Maps with over <span className="font-bold">540 reviews</span>
                    </p>
                </div>

                {/* Testimonial Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="glass-card rounded-3xl md:rounded-[3rem] p-8 md:p-16 shadow-2xl relative overflow-hidden border border-white/20 backdrop-blur-xl bg-white/70">
                        {/* Glassmorphism gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 via-white/30 to-transparent pointer-events-none" />
                        {/* Quote decoration */}
                        <div className="absolute top-8 left-8 text-squared-cyan/10 text-[120px] md:text-[180px] font-serif leading-none pointer-events-none select-none">
                            "
                        </div>

                        {/* Star Rating */}
                        <div
                            key={`stars-${currentTestimonial.id}`}
                            className={`flex gap-1 mb-6 relative z-10 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                        >
                            {[...Array(currentTestimonial.rating)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-5 h-5 md:w-6 md:h-6 fill-squared-gold text-squared-gold drop-shadow-md"
                                />
                            ))}
                        </div>

                        {/* Review Text */}
                        <p
                            key={`text-${currentTestimonial.id}`}
                            className={`text-squared-gray-900 text-lg md:text-2xl leading-relaxed mb-8 relative z-10 font-medium transition-all duration-500 delay-75 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                        >
                            {currentTestimonial.text}
                        </p>

                        {/* Reviewer Info */}
                        <div
                            key={`info-${currentTestimonial.id}`}
                            className={`flex items-center justify-between relative z-10 transition-all duration-500 delay-150 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
                        >
                            <div>
                                <h4 className="text-squared-gray-900 font-bold text-base md:text-lg">
                                    {currentTestimonial.name}
                                </h4>
                                <p className="text-squared-gray-600 text-sm">
                                    {currentTestimonial.date}
                                </p>
                            </div>

                            {/* Google Icon */}
                            <a
                                href="https://www.google.com/maps/place/Squared+Coffee/@26.5608409,50.0167142,17z"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-squared-gray-400 hover:text-squared-cyan transition-colors cursor-pointer"
                            >
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-6 mt-10">
                        {/* Previous Button */}
                        <button
                            onClick={handlePrevious}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full glass-card backdrop-blur-md bg-white/60 border border-white/40 flex items-center justify-center hover:bg-squared-cyan hover:border-squared-cyan hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex gap-2">
                            {TESTIMONIALS.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setIsAutoPlaying(false);
                                        setCurrentIndex(index);
                                    }}
                                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${index === currentIndex
                                        ? 'w-8 bg-squared-cyan shadow-lg shadow-squared-cyan/50'
                                        : 'w-2 bg-squared-gray-300 hover:bg-squared-gray-400'
                                        }`}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>

                        {/* Next Button */}
                        <button
                            onClick={handleNext}
                            className="w-12 h-12 md:w-14 md:h-14 rounded-full glass-card backdrop-blur-md bg-white/60 border border-white/40 flex items-center justify-center hover:bg-squared-cyan hover:border-squared-cyan hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;
