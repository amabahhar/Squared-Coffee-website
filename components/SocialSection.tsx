import React, { useRef } from 'react';
import { SOCIAL_POSTS } from '../constants';
import { Instagram, ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SocialSection: React.FC = () => {
    const { t, language } = useLanguage();
    const scrollRef = useRef<HTMLDivElement>(null);

    return (
        <section id="social" className="py-20 bg-squared-white dark:bg-squared-black border-t border-squared-gray-100 dark:border-squared-gray-800 relative overflow-hidden">
            {/* Background Grid - Hero Style */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
                style={{
                    backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                           linear-gradient(to bottom, #000 1px, transparent 1px)`,
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

                    <a
                        href="https://www.instagram.com/squared_coffee/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 text-squared-black dark:text-white hover:text-squared-cyan transition-colors mt-6 md:mt-0"
                    >
                        <span className="font-mono text-sm uppercase tracking-widest">@squared_coffee</span>
                        <div className="w-10 h-10 border border-squared-black dark:border-white flex items-center justify-center group-hover:bg-squared-cyan group-hover:border-squared-cyan group-hover:text-white transition-all duration-300">
                            <Instagram className="w-5 h-5" />
                        </div>
                    </a>
                </div>

                {/* Data Stream Feed */}
                <div className="relative">
                    {/* Decorative Ticker Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-squared-gray-200 dark:bg-squared-gray-800"></div>

                    <div
                        ref={scrollRef}
                        className={`flex overflow-x-auto gap-1 pb-8 pt-8 no-scrollbar ${language === 'ar' ? 'direction-rtl' : ''}`}
                    >
                        {SOCIAL_POSTS.map((post, index) => (
                            <a
                                key={post.id}
                                href="https://www.instagram.com/squared_coffee/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 w-[280px] md:w-[320px] group relative block"
                            >
                                {/* Technical Frame */}
                                <div className="relative aspect-square bg-squared-gray-100 dark:bg-squared-gray-800 border border-transparent group-hover:border-squared-cyan transition-colors duration-300 z-10">
                                    <img
                                        src={post.image}
                                        alt={post.caption}
                                        loading="lazy"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
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

                    {/* Scrollbar visualization (optional mock or custom) */}
                    <div className="w-full h-1 bg-squared-gray-100 dark:bg-squared-gray-800 mt-4 overflow-hidden">
                        <div className="h-full w-1/3 bg-squared-cyan animate-pulse"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
