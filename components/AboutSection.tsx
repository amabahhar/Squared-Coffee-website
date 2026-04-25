import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import GridBackground from './GridBackground';
import { useBrand } from '../contexts/BrandContext';

const AboutSection: React.FC = () => {
  const { brand } = useBrand();
  const { t, language } = useLanguage();

  return (
    <section id="story" className="py-20 md:py-32 bg-squared-white dark:bg-squared-black relative overflow-hidden border-b border-squared-gray-100 dark:border-squared-gray-800">
      {/* Background Grid */}
      <GridBackground />
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

          {/* Image Side - Technical & Sharp */}
          <div className="relative group">
            <div className="aspect-[4/5] bg-squared-gray-100 dark:bg-squared-gray-900 relative overflow-hidden">
              <img
                src="/assets/about-brew.jpg"
                alt="Coffee Brewing"
                className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              />
              {/* Technical Overlays */}
              <div className="absolute inset-block-start-0 inset-inline-start-0 p-4 font-mono text-xs text-squared-white mix-blend-difference">
                FIG. 01 — ORIGIN
              </div>
              <div className="absolute inset-block-end-0 inset-inline-end-0 p-4 font-mono text-xs text-squared-white mix-blend-difference border-bs border-is border-white/20">
                EST. 2018
              </div>
            </div>
          </div>

          {/* Text Side - Precision Typography */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-brand-primary"></div>
              <span className={`text-xs font-bold tracking-widest uppercase text-brand-primary ps-1 ${language === 'ar' ? 'font-arabic tracking-normal' : 'font-mono'}`}>
                {t.about.eyebrow}
              </span>
            </div>

            <h2 className={`text-4xl md:text-6xl font-sans font-bold text-squared-black dark:text-squared-white mb-8 leading-tight ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.about.title_start} <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-primary-dark">{t.about.title_highlight}</span>
            </h2>

            <div className={`space-y-6 text-squared-gray-800 dark:text-squared-gray-400 leading-relaxed text-lg max-w-xl ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}>
              <p>
                {t.about.p1}
              </p>
              <div className="ps-6 border-s-2 border-brand-primary/20">
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
                {language === 'ar' ? `فريق ${brand.name}` : `The ${brand.name} Team`}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;