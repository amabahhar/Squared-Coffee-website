import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import CyberSquare from './CyberSquare';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import GridBackground from './GridBackground';
import { useBrand } from '../contexts/BrandContext';
import { cn } from '../utils/i18nUtils';

const Hero: React.FC = () => {
    const { brand } = useBrand();
    const { t, language } = useLanguage();
    
    // Split brand name, default to template placeholder if missing
    const [firstName, secondName] = brand.name.split(' ');
    const displayName2 = secondName || t.hero.title_highlight;

    return (
        <section id="hero" className="relative min-h-screen w-full flex items-center bg-squared-white dark:bg-squared-black overflow-hidden pt-20">
            <GridBackground />

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">

                {/* Left Column: Typography */}
                <div className="lg:col-span-7 flex flex-col items-start text-start">
                    <span className={cn(
                        "inline-block mb-6 text-xs font-bold uppercase tracking-[0.3em] text-brand-primary ps-1",
                        language === 'ar' && "font-arabic tracking-normal"
                    )}>
                        {t.hero.est}
                    </span>

                    <h1 className={cn(
                        "text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] text-squared-black dark:text-squared-white mb-8 tracking-tighter",
                        language === 'ar' ? 'font-arabic' : 'font-sans'
                    )}>
                        {firstName}
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-primary-dark">
                            {displayName2}
                        </span>
                        <span className="text-brand-primary">.</span>
                    </h1>

                    <p className={cn(
                        "text-lg md:text-xl text-squared-gray-800 dark:text-squared-gray-100 max-w-xl leading-relaxed mb-10 ps-6 border-s-2 border-brand-primary/20",
                        language === 'ar' && "font-arabic"
                    )}>
                        {t.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <InteractiveHoverButton 
                            text={t.hero.cta_primary} 
                            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                        />

                        <InteractiveHoverButton 
                            text={t.hero.cta_secondary} 
                            onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
                        />
                    </div>
                </div>

                {/* Right Column: 3D Art */}
                <div className="lg:col-span-5 h-[400px] lg:h-[600px] relative hidden md:block group">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-80 h-80 lg:w-[400px] lg:h-[400px] transform transition-transform duration-700 group-hover:scale-105">
                            <CyberSquare />
                        </div>

                        {/* Framing Details */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-brand-primary/10 pointer-events-none"></div>
                        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-brand-primary/30"></div>
                        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-brand-primary/30"></div>
                        
                        <div className="absolute bottom-12 inset-inline-start-0 font-mono text-[10px] text-squared-gray-400 uppercase tracking-[0.3em] flex items-center gap-3">
                            <div className="w-8 h-[1px] bg-brand-primary/50"></div>
                            <span>GEOMETRIC_PRECISION_V1.0</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 inset-inline-start-6 flex items-center gap-4 opacity-50">
                <span className="text-[10px] font-mono uppercase tracking-widest text-squared-black dark:text-squared-white rotate-[-90deg]">Scroll</span>
                <div className="h-16 w-[1px] bg-squared-black dark:bg-squared-white"></div>
            </div>
        </section>
    );
};

export default Hero;