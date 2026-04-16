import React from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import CyberSquare from './CyberSquare';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import { useTheme } from '../contexts/ThemeContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const { isDarkMode } = useTheme();

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center bg-squared-white dark:bg-squared-black overflow-hidden pt-20">

      {/* Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                               linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center h-full">

        {/* Left Column: Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <span className={`inline-block mb-6 text-xs font-bold uppercase tracking-[0.3em] text-squared-cyan pl-1 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
            {t.hero.est}
          </span>

          <h1 className={`text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.9] text-squared-black dark:text-squared-white mb-8 tracking-tighter ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
            {t.hero.title_start}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-squared-cyan to-squared-cyan-dark">
              {t.hero.title_highlight}
            </span>
            <span className="text-squared-cyan">.</span>
          </h1>

          <p className={`text-lg md:text-xl text-squared-gray-800 dark:text-squared-gray-100 max-w-xl leading-relaxed mb-10 pl-1 border-l-2 border-squared-cyan/20 pl-6 ${language === 'ar' ? 'font-arabic border-l-0 border-r-2 pr-6 pl-0' : ''}`}>
            {t.hero.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <InteractiveHoverButton 
              text={t.hero.cta_primary} 
              variant={isDarkMode ? 'dark' : 'light'}
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            />

            <InteractiveHoverButton 
              text={t.hero.cta_secondary} 
              variant="light"
              onClick={() => document.getElementById('locations')?.scrollIntoView({ behavior: 'smooth' })}
            />
          </div>
        </div>

        {/* Right Column: 3D Art Restoration */}
        <div className="lg:col-span-5 h-[400px] lg:h-[600px] relative hidden md:block group">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Main 3D Component - Scaled to original dimensions */}
            <div className="w-80 h-80 lg:w-[400px] lg:h-[400px] transform transition-transform duration-700 group-hover:scale-105">
              <CyberSquare />
            </div>

            {/* Decorative Corner Framing */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-squared-cyan/10 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-squared-cyan/30"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-squared-cyan/30"></div>
            
            {/* Spec Label */}
            <div className="absolute bottom-12 left-0 font-mono text-[10px] text-squared-gray-400 uppercase tracking-[0.3em] flex items-center gap-3">
              <div className="w-8 h-[1px] bg-squared-cyan/50"></div>
              <span>GEOMETRIC_PRECISION_V1.0</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-6 flex items-center gap-4 opacity-50">
        <span className="text-[10px] font-mono uppercase tracking-widest text-squared-black dark:text-squared-white rotate-[-90deg]">Scroll</span>
        <div className="h-16 w-[1px] bg-squared-black dark:bg-squared-white"></div>
      </div>

    </section>
  );
};

export default Hero;