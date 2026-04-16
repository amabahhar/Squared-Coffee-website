import React from 'react';
import { LOCATIONS } from '../constants';
import { Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { InteractiveHoverButton } from './ui/interactive-hover-button';

interface LocationsProps {
  isDarkMode: boolean;
}

const Locations: React.FC<LocationsProps> = ({ isDarkMode }) => {
  const { t, language } = useLanguage();

  const textColor = isDarkMode ? 'text-white' : 'text-squared-black';
  const subTextColor = isDarkMode ? 'text-squared-gray-300' : 'text-squared-gray-600';
  const borderColor = isDarkMode ? 'border-squared-gray-800' : 'border-squared-gray-200';
  const labelColor = isDarkMode ? 'text-squared-cyan-light' : 'text-squared-gray-500';

  return (
    <section id="locations" className={`py-20 md:py-32 bg-squared-white dark:bg-squared-black border-b ${borderColor} relative`}>
      {/* Background Grid - Hero Style */}
      <div className={`absolute inset-0 z-0 pointer-events-none ${isDarkMode ? 'opacity-[0.05]' : 'opacity-[0.03]'}`}
        style={{
          backgroundImage: `linear-gradient(to right, ${isDarkMode ? '#fff' : '#000'} 1px, transparent 1px),
                           linear-gradient(to bottom, ${isDarkMode ? '#fff' : '#000'} 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-squared-cyan"></div>
              <span className={`text-xs font-bold tracking-widest uppercase ${labelColor} ${language === 'ar' ? 'font-arabic' : 'font-mono'}`}>
                {t.locations.eyebrow}
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-sans font-bold ${textColor} ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'مواقعنا' : 'OUR LOCATIONS'}
            </h2>
          </div>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border ${borderColor} bg-white dark:bg-squared-gray-900 divide-y lg:divide-y-0 lg:divide-x ${borderColor}`}>

          {/* List Side */}
          <div className={`divide-y ${borderColor}`}>
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className={`p-8 md:p-12 transition-colors relative flex flex-col h-full bg-white dark:bg-squared-gray-900`}>
                <div className="flex justify-between items-start mb-6">
                  <h3 className={`text-2xl font-bold ${textColor} transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' && loc.id === 'qatif' ? 'القطيف - الفرع الرئيسي' : loc.name}
                  </h3>
                  <MapPin className="text-squared-cyan" size={24} />
                </div>

                <p className={`${subTextColor} mb-8 leading-relaxed max-w-sm ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {t.locations.desc}
                </p>

                <div className="flex flex-col gap-4 mb-10">
                  <div className={`flex items-center gap-3 text-xs font-mono uppercase tracking-wider ${labelColor}`}>
                    <MapPin size={16} />
                    <span>{language === 'ar' ? 'القطيف، المملكة العربية السعودية' : `${loc.city}, ${loc.address}`}</span>
                  </div>
                  <div className={`flex items-center gap-3 text-xs font-mono uppercase tracking-wider ${labelColor}`}>
                    <Clock size={16} />
                    <span>{t.locations.hours}</span>
                  </div>
                </div>

                <div className={`mt-auto pt-4 ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  <InteractiveHoverButton 
                    text={t.locations.open_maps}
                    onClick={() => window.open(loc.mapUrl, '_blank')}
                    className="w-full sm:w-56"
                    variant={isDarkMode ? 'dark' : 'light'}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Map Side */}
          <div className="relative min-h-[400px] lg:min-h-auto bg-squared-gray-100 dark:bg-squared-gray-900">
            <iframe
              title="Squared Coffee Location"
              src="https://maps.google.com/maps?q=Squared+Coffee+Qatif&t=&z=15&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full absolute inset-0"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>

            {/* Overlay Grid */}
            <div className={`absolute inset-0 pointer-events-none border ${borderColor} opacity-20`}
              style={{ backgroundImage: 'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Locations;