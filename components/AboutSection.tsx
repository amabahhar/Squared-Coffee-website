import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="story" className="py-20 md:py-32 bg-squared-white dark:bg-squared-black relative overflow-hidden border-b border-squared-gray-100 dark:border-squared-gray-800">
      {/* Background Grid - Hero Style */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, var(--grid-line-color) 1px, transparent 1px),
                           linear-gradient(to bottom, var(--grid-line-color) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* Image Side - Technical & Sharp */}
          <div className="relative group">
            <div className="aspect-[4/5] bg-squared-gray-100 dark:bg-squared-gray-900 relative overflow-hidden">
              <img
                src="/images/story/story-place.jpg"
                alt="Squared Coffee Place"
                className="w-full h-full object-cover filter contrast-125 transition-all duration-700"
              />
              {/* Technical Overlays */}
              <div className="absolute top-0 left-0 p-4 font-mono text-xs text-squared-white mix-blend-difference">
                FIG. 01 — ORIGIN
              </div>
              <div className="absolute bottom-0 right-0 p-4 font-mono text-xs text-squared-white mix-blend-difference border-t border-l border-white/20">
                EST. 2018
              </div>
            </div>
          </div>

          {/* Text Side - Precision Typography */}
          <div className="flex flex-col justify-center">
            <div className={`flex items-center gap-4 mb-8 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
              <div className="h-px w-12 bg-squared-cyan"></div>
              <span className={`text-xs font-bold tracking-widest uppercase text-squared-cyan ${language === 'ar' ? 'font-arabic' : 'font-mono'}`}>
                {t.about.eyebrow}
              </span>
            </div>

            <h2 className={`text-4xl md:text-6xl font-sans font-bold text-squared-black dark:text-squared-white mb-8 leading-tight ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.about.title_start} <span className="text-transparent bg-clip-text bg-gradient-to-r from-squared-cyan to-squared-cyan-dark">{t.about.title_highlight}</span>
            </h2>

            <div className={`space-y-6 text-squared-gray-700 dark:text-squared-gray-300 leading-relaxed text-lg max-w-xl ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              <p>
                {t.about.p1}
              </p>
              <div className={`border-squared-cyan/20 ${language === 'ar' ? 'pr-6 border-r-2' : 'pl-6 border-l-2'}`}>
                <p>
                  {t.about.p2}
                </p>
              </div>
              <p>
                {t.about.p3}
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-squared-gray-200 dark:border-squared-gray-800 flex items-center justify-between">
              <div className={`font-mono text-xs text-squared-gray-500 uppercase tracking-wider ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                {t.about.since}
              </div>
              <div className={`text-xl font-bold text-squared-black dark:text-squared-white ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t.about.team}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;