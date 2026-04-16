import React, { useRef, useState, useEffect } from 'react';
import { SOCIAL_POSTS } from '../constants';
import { Instagram, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { CarouselNavigator } from './CarouselNavigator';

interface SocialSectionProps {
    isDarkMode: boolean;
}

const SocialSection: React.FC<SocialSectionProps> = ({ isDarkMode }) => {
    const { t, language } = useLanguage();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleIndexChange = (index: number) => {
        setCurrentIndex(index);
        if (scrollRef.current) {
            const container = scrollRef.current;
            const items = container.querySelectorAll('.social-post-card');
            if (items[index]) {
                const item = items[index] as HTMLElement;
                container.scrollTo({
                    left: item.offsetLeft - (container.clientWidth / 2) + (item.clientWidth / 2),
                    behavior: 'smooth'
                });
            }
        }
    };

    // Update index on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const container = scrollRef.current;
                const items = container.querySelectorAll('.social-post-card');
                let closestIndex = 0;
                let minDistance = Infinity;

                items.forEach((item, index) => {
                    const rect = item.getBoundingClientRect();
                    const containerRect = container.getBoundingClientRect();
                    const distance = Math.abs((rect.left + rect.width / 2) - (containerRect.left + containerRect.width / 2));
                    
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestIndex = index;
                    }
                });

                if (closestIndex !== currentIndex) {
                    setCurrentIndex(closestIndex);
                }
            }
        };

        const container = scrollRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
            return () => container.removeEventListener('scroll', handleScroll);
        }
    }, [currentIndex]);

    return (
        <section id="social" className="py-20 bg-squared-white dark:bg-squared-black border-t border-squared-gray-100 dark:border-squared-gray-800 relative overflow-hidden">
            {/* Background Grid - Hero Style */}
            <div className={`absolute inset-0 z-0 pointer-events-none ${isDarkMode ? 'opacity-[0.05]' : 'opacity-[0.03]'}`}
                style={{
                    backgroundImage: `linear-gradient(to right, ${isDarkMode ? '#fff' : '#000'} 1px, transparent 1px),
                           linear-gradient(to bottom, ${isDarkMode ? '#fff' : '#000'} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            ></div>

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-squared-black dark:border-white pb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
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
                        className={`flex overflow-x-auto gap-4 pb-12 pt-12 no-scrollbar ${language === 'ar' ? 'direction-rtl' : ''} scroll-smooth`}
                    >
                        {SOCIAL_POSTS.map((post, index) => (
                            <a
                                key={post.id}
                                href="https://www.instagram.com/squared_coffee/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 w-[280px] md:w-[320px] group relative block social-post-card"
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

                    {/* Carousel Navigation */}
                    <div className="flex justify-center items-center mt-8 pt-8 border-t border-squared-gray-200 dark:border-squared-gray-800">
                        <CarouselNavigator
                            totalSlides={SOCIAL_POSTS.length}
                            currentIndex={currentIndex}
                            onIndexChange={handleIndexChange}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocialSection;
