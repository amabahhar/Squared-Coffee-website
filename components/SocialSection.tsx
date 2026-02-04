import React from 'react';
import { SOCIAL_POSTS } from '../constants';
import { Instagram, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const SocialSection: React.FC = () => {
    const { t, language } = useLanguage();

    return (
        <section id="social" className="py-12 md:py-24 relative overflow-hidden">

            <div className="container mx-auto px-4 md:px-12 relative z-10">

                {/* Header */}
                <div className="glass-card p-6 md:p-10 rounded-[2.5rem] border border-squared-cyan/20 shadow-warm flex flex-col md:flex-row justify-between items-start md:items-end mb-12 relative overflow-hidden group">
                    {/* Glass gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50 pointer-events-none"></div>

                    {/* Geometric Accents */}
                    <div className="absolute top-6 left-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <div className="w-10 h-10 border-2 border-squared-navy rounded-sm -rotate-12"></div>
                    </div>
                    <div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                        <div className="w-12 h-6 overflow-hidden">
                            <div className="w-12 h-12 border-2 border-squared-cyan rounded-full"></div>
                        </div>
                    </div>

                    <div className="mb-4 md:mb-0 relative z-10">
                        <span className={`inline-block py-1 pr-12 border-b-2 border-squared-cyan/30 text-xs md:text-sm font-black tracking-[0.4em] text-squared-cyan uppercase mb-4 ${language === 'ar' ? 'font-arabic tracking-normal pl-12 pr-0' : ''}`}>
                            {t.social.eyebrow}
                        </span>
                        <h2 className={`text-4xl md:text-6xl font-serif text-squared-gray-900 leading-[0.9] font-black tracking-tight ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
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
                        className="flex items-center gap-2 group cursor-pointer"
                    >
                        <span className="text-xs font-black tracking-[0.2em] uppercase text-squared-gray-900 group-hover:text-squared-cyan transition-colors">
                            @squared_coffee
                        </span>
                        <div className="w-10 h-10 rounded-full bg-squared-gray-900 text-white flex items-center justify-center group-hover:bg-squared-cyan transition-colors duration-300">
                            <Instagram className="w-5 h-5" />
                        </div>
                    </a>
                </div>

                {/* Instagram Photo Grid - Horizontal Scroll */}
                <div className="relative">
                    {/* Desktop: 3 photos at a time, Mobile: 1 photo at a time */}
                    <div className={`overflow-x-auto pb-8 snap-x snap-mandatory no-scrollbar ${language === 'ar' ? 'direction-rtl' : ''}`}>
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
                                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-squared-gray-900/5">
                                        <img
                                            src={post.image}
                                            alt={post.caption}
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
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 pointer-events-none hidden md:flex justify-between px-2">
                        <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-squared-gray-900">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-squared-gray-900">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SocialSection;
