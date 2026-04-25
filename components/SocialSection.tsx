import React, { useRef, useState, useEffect } from 'react';
import { SOCIAL_POSTS } from '../constants';
import { Instagram, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useBrand } from '../contexts/BrandContext';
import { CarouselNavigator } from './CarouselNavigator';
import { useTheme } from '../contexts/ThemeContext';
import GridBackground from './GridBackground';

interface SocialSectionProps {}

const SocialSection: React.FC<SocialSectionProps> = () => {
    const { brand } = useBrand();
    const { isDarkMode } = useTheme();
    const { t, language } = useLanguage();
    const scrollRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    const isProgrammaticScroll = useRef(false);
    const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
    const currentIndexRef = useRef(currentIndex);

    useEffect(() => {
        currentIndexRef.current = currentIndex;
    }, [currentIndex]);

    // Unified navigation and scroll logic
    const handleIndexChange = (index: number) => {
        // Don't return early if indexing is the same, as the scroll position might be off
        setCurrentIndex(index);
        isProgrammaticScroll.current = true;
        
        if (scrollRef.current) {
            const container = scrollRef.current;
            const items = container.querySelectorAll('.social-post-card');
            if (items[index]) {
                const item = items[index] as HTMLElement;
                const containerRect = container.getBoundingClientRect();
                const itemRect = item.getBoundingClientRect();
                const scrollDelta = (itemRect.left + itemRect.width / 2) - (containerRect.left + containerRect.width / 2);
                
                if (Math.abs(scrollDelta) > 2) {
                    container.scrollBy({
                        left: scrollDelta,
                        behavior: 'smooth'
                    });
                }
            }
        }

        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
            isProgrammaticScroll.current = false;
        }, 800); 
    };

    // Center initial item on mount and language switch
    useEffect(() => {
        const timer = setTimeout(() => {
            handleIndexChange(0);
        }, 100);
        return () => clearTimeout(timer);
    }, [language]);

    // Update index on scroll with debouncing for performance
    useEffect(() => {
        const handleScroll = () => {
            if (isProgrammaticScroll.current) return;
            
            if (scrollRef.current) {
                const container = scrollRef.current;
                const items = container.querySelectorAll('.social-post-card');
                let closestIndex = 0;
                let minDistance = Infinity;

                const containerCenter = container.getBoundingClientRect().left + container.clientWidth / 2;

                items.forEach((item, index) => {
                    const rect = item.getBoundingClientRect();
                    const itemCenter = rect.left + rect.width / 2;
                    const distance = Math.abs(itemCenter - containerCenter);
                    
                    if (distance < minDistance) {
                        minDistance = distance;
                        closestIndex = index;
                    }
                });

                if (closestIndex !== currentIndexRef.current) {
                    setCurrentIndex(closestIndex);
                }
            }
        };

        const container = scrollRef.current;
        if (container) {
            // Use passive: true for better scroll performance
            container.addEventListener('scroll', handleScroll, { passive: true });
            return () => {
                container.removeEventListener('scroll', handleScroll);
                if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            };
        }
    }, []); // Empty dependencies mean the listener stays alive

    return (
        <section id="social" className="py-20 bg-squared-white dark:bg-squared-black border-t border-squared-gray-100 dark:border-squared-gray-800 relative overflow-hidden">
            {/* Background Grid */}
            <GridBackground />

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b-2 border-squared-black dark:border-white pb-6">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-2 h-2 bg-brand-primary"></div>
                            <span className="font-mono text-brand-primary text-xs tracking-[0.2em] uppercase">
                                {t.social.eyebrow}
                            </span>
                        </div>
                        <h2 className={`text-5xl md:text-7xl font-bold text-squared-black dark:text-white uppercase tracking-tighter leading-none ${language === 'ar' ? 'font-arabic' : ''}`}>
                            {t.social.title}
                        </h2>
                    </div>

                    <a
                        href={brand.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex-row items-center gap-3 text-squared-black dark:text-white hover:text-brand-primary transition-colors mt-6 md:mt-0"
                    >
                        <span className="font-mono text-sm uppercase tracking-widest">
                            {brand.social.instagram.split('/').filter(Boolean).pop()}
                        </span>
                        <div className="w-10 h-10 border border-squared-black dark:border-white flex items-center justify-center group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:text-white transition-all duration-300">
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
                        className={`flex overflow-x-auto gap-8 pb-12 pt-12 no-scrollbar ${language === 'ar' ? 'direction-rtl' : ''} px-8 md:px-24`}
                    >
                        {SOCIAL_POSTS.map((post, index) => (
                            <a
                                key={post.id}
                                href={brand.social.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-shrink-0 w-[280px] md:w-[320px] group relative block social-post-card"
                            >
                                {/* Technical Frame */}
                                <div className="relative aspect-square bg-squared-gray-100 dark:bg-squared-gray-800 border border-transparent group-hover:border-brand-primary transition-colors duration-300 z-10">
                                    <img
                                        src={post.image}
                                        alt={post.caption}
                                        loading="lazy"
                                        className="w-full h-full object-cover transition-all duration-500"
                                    />

                                    {/* Overlay Info */}
                                    <div className="absolute inset-0 bg-brand-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center">
                                        <p className="text-white font-mono text-xs uppercase tracking-wider mb-4 line-clamp-3">
                                            {post.caption}
                                        </p>
                                        <div className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-xs border-b border-white pb-1">
                                            {t.social.view_insta} <ArrowRight className="w-4 h-4 rtl:rotate-180" />
                                        </div>
                                    </div>

                                    {/* Corner Accents */}
                                    <div className="absolute inset-block-start-0 inset-inline-start-0 w-2 h-2 border-bs border-is border-squared-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="absolute inset-block-end-0 inset-inline-end-0 w-2 h-2 border-be border-ie border-squared-black dark:border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </div>

                                {/* Index Number */}
                                <div className="absolute -inset-block-start-6 inset-inline-start-0 font-mono text-xs text-squared-gray-400">
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
