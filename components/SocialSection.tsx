import React, { useRef } from 'react';
import { SOCIAL_POSTS } from '../constants';
import { Instagram, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SocialSection: React.FC = () => {
    const { t, language } = useLanguage();
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef;
            const scrollAmount = current.clientWidth * 0.8;
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="social" className="py-8 md:py-12 relative overflow-hidden">

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="glass p-6 md:p-12 rounded-[2.5rem] md:rounded-[4rem] max-w-7xl mx-auto border border-white/30 dark:border-white/10 shadow-2xl relative overflow-hidden group backdrop-blur-md transition-colors duration-500">
                    {/* Glass gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                    {/* Geometric Accents */}
                    <div className="absolute top-6 left-6 opacity-10 group-hover:opacity-20 transition-all">
                        <div className="w-10 h-10 border-2 border-squared-navy dark:border-white/20 rounded-sm -rotate-12"></div>
                    </div>
                    <div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-20 transition-all z-20">
                        <div className="w-12 h-6 overflow-hidden">
                            <div className="w-12 h-12 border-2 border-squared-cyan rounded-full"></div>
                        </div>
                    </div>

                    {/* Header Content */}
                    <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6 md:mb-12 relative z-10 md:text-left transition-colors duration-500">
                        <div className="mb-4 md:mb-0 text-center md:text-left">
                            <span className={`inline-block py-1 pr-12 border-b-2 border-squared-cyan/30 text-xs md:text-sm font-black tracking-[0.4em] text-squared-cyan uppercase mb-4 md:hidden ${language === 'ar' ? 'font-arabic tracking-normal pl-12 pr-0' : ''}`} style={{ paddingRight: '1.5rem', paddingLeft: '1.5rem', paddingBottom: '0.25rem', borderBottomWidth: '2px' }}>
                                {t.social.eyebrow}
                            </span>
                            <span className={`hidden md:inline-block py-1 pr-12 border-b-2 border-squared-cyan/30 text-xs md:text-sm font-black tracking-[0.4em] text-squared-cyan uppercase mb-4 ${language === 'ar' ? 'font-arabic tracking-normal pl-12 pr-0' : ''}`}>
                                {t.social.eyebrow}
                            </span>

                            <h2 className={`text-5xl md:text-7xl font-serif text-squared-brown-dark dark:text-white leading-[0.9] font-black tracking-tight transition-colors duration-500 mb-6 md:mb-0 ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
                                {t.social.title}<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-squared-cyan to-squared-gold-light">
                                    {t.social.title_highlight}
                                </span>
                            </h2>
                        </div>

                        <a
                            href="https://www.instagram.com/squared_coffee/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 group/insta cursor-pointer"
                        >
                            <span className="text-xs font-black tracking-[0.2em] uppercase text-squared-brown-dark dark:text-white/80 group-hover/insta:text-squared-cyan transition-colors duration-500">
                                @squared_coffee
                            </span>
                            <div className="w-10 h-10 rounded-full bg-squared-brown-dark dark:bg-squared-cyan text-white flex items-center justify-center group-hover/insta:bg-squared-cyan dark:group-hover/insta:bg-white dark:group-hover/insta:text-squared-cyan transition-colors duration-300 shadow-lg hover-magnetic">
                                <Instagram className="w-5 h-5" />
                            </div>
                        </a>
                    </div>

                    {/* Instagram Photo Grid - Horizontal Scroll */}
                    <div className="relative z-10">
                        <div
                            ref={scrollRef}
                            className={`overflow-x-auto pb-4 snap-x snap-mandatory no-scrollbar ${language === 'ar' ? 'direction-rtl' : ''}`}
                        >
                            <div className="flex gap-4 md:gap-6">
                                {SOCIAL_POSTS.map((post) => (
                                    <a
                                        key={post.id}
                                        href="https://www.instagram.com/squared_coffee/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-shrink-0 snap-center snap-always group cursor-pointer w-[85vw] md:w-[calc(33.333%-1rem)] relative overflow-hidden rounded-2xl"
                                    >
                                        {/* Image Container */}
                                        <div className="relative aspect-square overflow-hidden rounded-2xl bg-squared-brown-dark/5 dark:bg-black/20">
                                            <img
                                                src={post.image}
                                                alt={post.caption}
                                                loading="lazy"
                                                decoding="async"
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />

                                            {/* Overlay on hover */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6">
                                                <p className="text-white text-sm md:text-base font-medium mb-3">
                                                    {post.caption}
                                                </p>
                                                <div className="flex items-center gap-2 text-squared-cyan text-xs font-black uppercase tracking-wider">
                                                    <span>{t.social.view_insta}</span>
                                                    <ExternalLink className={`w-4 h-4 ${language === 'ar' ? 'mr-2' : ''}`} />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Scroll Indicators */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none flex justify-between -mx-2 md:-mx-4 z-20">
                            <button
                                onClick={() => scroll('left')}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-sm shadow-xl flex items-center justify-center text-squared-brown-dark dark:text-white pointer-events-auto hover:bg-squared-cyan hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 border border-white/50 dark:border-white/10"
                                aria-label="Scroll left"
                            >
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 dark:bg-white/10 backdrop-blur-sm shadow-xl flex items-center justify-center text-squared-brown-dark dark:text-white pointer-events-auto hover:bg-squared-cyan hover:text-white transition-all duration-300 transform hover:scale-110 active:scale-95 border border-white/50 dark:border-white/10"
                                aria-label="Scroll right"
                            >
                                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
