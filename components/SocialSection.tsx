import React, { useRef, useState, useEffect } from 'react';
import { SOCIAL_POSTS } from '../constants';
import { Instagram, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SocialSection: React.FC = () => {
    const { t, language } = useLanguage();
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="social" className="py-20 bg-squared-white dark:bg-squared-black border-t border-squared-gray-200 dark:border-squared-gray-800 relative overflow-hidden">
            {/* Background Grid - Hero Style */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(to right, var(--grid-line-color) 1px, transparent 1px),
                                   linear-gradient(to bottom, var(--grid-line-color) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-squared-black dark:border-white pb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                            <div className="w-2 h-2 bg-squared-cyan"></div>
                            <span className="font-mono text-squared-cyan text-xs tracking-[0.2em] uppercase">
                                {t.social.eyebrow}
                            </span>
                        </div>
                        <h2 className={`text-5xl md:text-7xl font-bold text-squared-black dark:text-white uppercase tracking-tighter leading-none ${language === 'ar' ? 'font-arabic' : ''}`}>
                            {t.social.title}
                        </h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-6 mt-6 md:mt-0">
                        <a
                            href="https://www.instagram.com/squared_coffee/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 text-squared-black dark:text-white hover:text-squared-cyan transition-colors"
                        >
                            <span className="font-mono text-sm uppercase tracking-widest">@squared_coffee</span>
                            <div className="w-10 h-10 border border-squared-black dark:border-white flex items-center justify-center group-hover:bg-squared-cyan group-hover:border-squared-cyan group-hover:text-white transition-all duration-300">
                                <Instagram className="w-5 h-5" />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Data Stream Feed */}
                <div className="relative">
                    {/* Decorative Ticker Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-squared-gray-200 dark:bg-squared-gray-800"></div>

                    <div
                        ref={scrollRef}
                        className={`flex overflow-x-auto snap-x snap-mandatory no-scrollbar gap-4 pb-8 pt-8 ${language === 'ar' ? 'direction-rtl' : ''}`}
                    >
                        {SOCIAL_POSTS.map((post, index) => (
                            <a
                                key={post.id}
                                href="https://www.instagram.com/squared_coffee/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 w-[85%] md:w-[calc(25%-12px)] snap-center group relative block"
                            >
                                {/* Technical Frame */}
                                <div className="relative aspect-square bg-squared-gray-100 dark:bg-squared-gray-800 border border-transparent group-hover:border-squared-cyan transition-colors duration-300 z-10">
                                    <img
                                        src={post.image}
                                        alt={post.caption}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-all duration-500"
                                    />

                                    {/* Overlay Info */}
                                    <div className="absolute inset-0 bg-squared-cyan/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                                        <p className="text-white font-mono text-xs uppercase tracking-wider mb-4 line-clamp-3">
                                            {post.caption}
                                        </p>
                                        <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs border-b border-white pb-1">
                                            {t.social.view_insta} <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>

                                    {/* Corner Accents */}
                                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-squared-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-squared-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>

                                {/* Index Number */}
                                <div className="absolute -top-6 left-0 font-mono text-xs text-squared-gray-400">
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="mt-8 flex justify-center md:justify-end">
                        {/* Navigation Arrows at the bottom */}
                        <div className="flex gap-4">
                            <button
                                onClick={() => scroll('left')}
                                className="w-12 h-12 border border-squared-black dark:border-white flex items-center justify-center hover:bg-squared-cyan hover:border-squared-cyan hover:text-white transition-all duration-300"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-12 h-12 border border-squared-black dark:border-white flex items-center justify-center hover:bg-squared-cyan hover:border-squared-cyan hover:text-white transition-all duration-300"
                                aria-label="Scroll right"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
