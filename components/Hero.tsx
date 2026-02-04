import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Background/Aurora is handled by App.tsx */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-12 md:mt-20 flex justify-center">
        <div className="glass p-6 md:p-16 rounded-[2rem] md:rounded-[3rem] max-w-6xl w-full border border-white/30 shadow-2xl relative overflow-hidden group backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

          {/* Geometric Shapes - Top Right */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 opacity-40 pointer-events-none">
            {/* Concentric Squares */}
            <div className="relative w-16 h-16 md:w-24 md:h-24">
              <div className="absolute inset-0 border-2 border-squared-cyan/60 rounded-sm backdrop-blur-sm"></div>
              <div className="absolute inset-2 border-2 border-squared-cyan/40 rounded-sm"></div>
              <div className="absolute inset-4 border-2 border-squared-cyan/20 rounded-sm"></div>
            </div>
          </div>

          {/* Geometric Shapes - Bottom Left */}
          <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 opacity-40 pointer-events-none">
            {/* Triangles */}
            <div className="relative w-20 h-20 md:w-32 md:h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <polygon points="50,10 90,90 10,90" fill="none" stroke="currentColor" strokeWidth="2" className="text-squared-cyan/60" />
                <polygon points="50,25 75,75 25,75" fill="none" stroke="currentColor" strokeWidth="2" className="text-squared-navy/60" />
              </svg>
            </div>
          </div>

          {/* Geometric Shapes - Bottom Right */}
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 opacity-40 pointer-events-none">
            {/* Semi-circles and squares */}
            <div className="relative w-16 h-16 md:w-24 md:h-24">
              <div className="absolute bottom-0 left-0 w-full h-1/2 border-2 border-t-0 border-squared-cyan/60 rounded-b-full backdrop-blur-sm"></div>
              <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 border-2 border-squared-navy/60 rounded-sm"></div>
            </div>
          </div>

          {/* Geometric Shapes - Top Left */}
          <div className="absolute top-4 left-4 md:top-8 md:left-8 opacity-40 pointer-events-none">
            {/* Layered squares with gradient */}
            <div className="relative w-20 h-20 md:w-28 md:h-28">
              <div className="absolute inset-0 bg-gradient-to-br from-squared-cyan/20 to-squared-navy/20 backdrop-blur-sm rounded-sm"></div>
              <div className="absolute inset-0 border-2 border-squared-cyan/40 rounded-sm"></div>
              <div className="absolute top-2 right-2 w-8 h-8 md:w-12 md:h-12 bg-squared-navy/30 backdrop-blur-sm rounded-sm"></div>
            </div>
          </div>

          <div className="relative z-10">
            <span className={`inline-block py-2 px-6 glass-dark text-white rounded-full text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-6 md:mb-10 shadow-lg border border-white/10 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
              {t.hero.est}
            </span>

            <h1 className={`text-5xl md:text-7xl lg:text-9xl font-serif font-medium text-squared-gray-900 mb-6 md:mb-8 leading-[0.95] tracking-tighter drop-shadow-sm ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
              {t.hero.title_start}<br />
              <span className="text-squared-cyan drop-shadow-[0_0_35px_rgba(0,194,224,0.35)] font-black">{t.hero.title_highlight}</span>
            </h1>

            <p className={`text-base md:text-2xl text-squared-gray-800 max-w-2xl mx-auto font-sans leading-relaxed font-medium opacity-90 mb-8 md:mb-12 ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.hero.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
              <a
                href="#menu"
                className={`w-full sm:w-auto group cursor-pointer bg-squared-cyan text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(0,194,224,0.3)] hover:shadow-[0_25px_50px_rgba(0,194,224,0.5)] transition-all duration-500 hover:-translate-y-1 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}
              >
                {t.hero.cta_primary}
              </a>
              <a
                href="#locations"
                className={`w-full sm:w-auto group cursor-pointer glass text-squared-gray-900 px-8 md:px-10 py-3 md:py-4 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] shadow-xl border border-white/40 hover:bg-white/50 transition-all duration-500 hover:-translate-y-1 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}
              >
                {t.hero.cta_secondary}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-squared-gray-900/30" />
      </div>
    </section>
  );
};

export default Hero;