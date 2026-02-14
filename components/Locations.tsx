import React from 'react';
import { LOCATIONS } from '../constants';
import { Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Locations: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="locations" className="py-20 md:py-32 bg-squared-white dark:bg-squared-black border-b border-squared-gray-200 dark:border-squared-gray-800 relative">
      {/* Background Grid - Hero Style */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, var(--grid-line-color) 1px, transparent 1px),
                           linear-gradient(to bottom, var(--grid-line-color) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-squared-cyan"></div>
              <span className={`text-xs font-bold tracking-widest uppercase text-squared-gray-500 ${language === 'ar' ? 'font-arabic' : 'font-mono'}`}>
                {t.locations.eyebrow}
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-sans font-bold text-squared-black dark:text-squared-white ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'مواقعنا' : 'OUR LOCATIONS'}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-squared-gray-200 dark:border-squared-gray-800 bg-white dark:bg-squared-black divide-y lg:divide-y-0 lg:divide-x divide-squared-gray-200 dark:divide-squared-gray-800">

          {/* List Side */}
          <div className="divide-y divide-squared-gray-200 dark:divide-squared-gray-800">
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className="group p-8 md:p-12 hover:bg-squared-gray-50 dark:hover:bg-squared-gray-900 transition-colors cursor-pointer relative overflow-hidden">
                <div className={`absolute top-0 w-1 h-full bg-squared-cyan transform transition-transform duration-300 ${language === 'ar' ? 'left-0 -translate-x-full group-hover:translate-x-0' : 'right-0 translate-x-full group-hover:translate-x-0'}`}></div>

                <div className="flex justify-between items-start mb-6">
                  <h3 className={`text-2xl font-bold text-squared-black dark:text-squared-white group-hover:text-squared-cyan transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' && loc.id === 'qatif' ? 'القطيف - الفرع الرئيسي' : loc.name}
                  </h3>
                  <MapPin className="text-squared-gray-400 group-hover:text-squared-cyan transition-colors" size={24} />
                </div>

                <p className={`text-squared-gray-600 dark:text-squared-gray-300 mb-8 leading-relaxed max-w-md ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {t.locations.desc}
                </p>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-sm font-mono text-squared-gray-500 uppercase">
                    <MapPin size={16} />
                    <span>{language === 'ar' ? 'القطيف، المملكة العربية السعودية' : `${loc.city}, ${loc.address}`}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-mono text-squared-gray-500 uppercase">
                    <Clock size={16} />
                    <span>{t.locations.hours}</span>
                  </div>
                </div>

                <a href={loc.mapUrl} className={`absolute bottom-8 text-xs font-bold uppercase tracking-widest text-squared-cyan opacity-0 group-hover:opacity-100 transition-all transform flex items-center gap-2 ${language === 'ar' ? 'left-8 translate-y-2 group-hover:translate-y-0 flex-row-reverse' : 'right-8 translate-y-2 group-hover:translate-y-0'}`}>
                  {t.locations.open_maps} {language === 'ar' ? <span>&larr;</span> : <span>&rarr;</span>}
                </a>
              </div>
            ))}
          </div>

          {/* Map Side */}
          <div className="relative min-h-[400px] lg:min-h-auto bg-squared-gray-100 dark:bg-squared-gray-900">
            <iframe
              title="Squared Coffee Location"
              src="https://maps.google.com/maps?q=Squared+Coffee+Qatif&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full absolute inset-0 opacity-80 hover:opacity-100 transition-opacity duration-500"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

            {/* Overlay Grid */}
            <div className="absolute inset-0 pointer-events-none border border-squared-gray-200 dark:border-squared-gray-800 opacity-20"
              style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Locations;