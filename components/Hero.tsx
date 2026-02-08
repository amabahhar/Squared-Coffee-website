import React from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

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
            <a href="#menu" className={`group relative overflow-hidden bg-squared-black dark:bg-squared-white text-squared-white dark:text-squared-black px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-squared-cyan dark:hover:bg-squared-cyan hover:text-white transition-all duration-300 ${language === 'ar' ? 'font-arabic tracking-normal text-sm' : ''}`}>
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.cta_primary}
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a href="#locations" className={`group px-10 py-4 text-xs font-bold uppercase tracking-widest text-squared-black dark:text-squared-white border border-squared-gray-200 dark:border-squared-gray-800 hover:border-squared-cyan hover:text-squared-cyan transition-all duration-300 ${language === 'ar' ? 'font-arabic tracking-normal text-sm' : ''}`}>
              {t.hero.cta_secondary}
            </a>
          </div>
        </div>

        {/* Right Column: Abstract Precision Art */}
        <div className="lg:col-span-5 h-[400px] lg:h-[600px] relative hidden md:block">
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Main Geometric Stack */}
            <div className="relative w-64 h-64 lg:w-96 lg:h-96">
              {/* Square 1 - Solid */}
              <div className="absolute top-0 right-0 w-full h-full border border-squared-black/10 dark:border-white/10 z-10"></div>

              {/* Square 2 - Cyan Accent */}
              <div className="absolute top-8 right-8 w-full h-full border-2 border-squared-cyan/20 z-20"></div>

              {/* Square 3 - Solid Fill Small */}
              <div className="absolute bottom-[-20px] left-[-20px] w-24 h-24 bg-squared-cyan text-white flex items-center justify-center font-mono text-xs z-30 shadow-2xl">
                <div className="text-center">
                  <span className="block font-black text-2xl">20</span>
                  <span className="block text-[10px] tracking-widest opacity-80">GRAMS</span>
                </div>
              </div>

              {/* Decorative Plus Signs */}
              <div className="absolute -top-4 -left-4 text-squared-gray-200 dark:text-squared-gray-800">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 5v14M5 12h14" /></svg>
              </div>
              <div className="absolute -bottom-4 -right-4 text-squared-gray-200 dark:text-squared-gray-800">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 5v14M5 12h14" /></svg>
              </div>
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