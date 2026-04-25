import React, { useState } from 'react';
import { LOCATIONS } from '../constants';
import { Clock, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useBrand } from '../contexts/BrandContext';
import { InteractiveHoverButton } from './ui/interactive-hover-button';
import GridBackground from './GridBackground';

interface LocationsProps {}

const Locations: React.FC<LocationsProps> = () => {
  const { isDarkMode } = useTheme();
  const { t, language } = useLanguage();
  const { brand } = useBrand();
  const [shouldLoadMap, setShouldLoadMap] = useState(false);
  const mapRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShouldLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '600px' } // Start loading 600px before it's visible
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const textColor = isDarkMode ? 'text-white' : 'text-squared-black';
  const subTextColor = isDarkMode ? 'text-squared-gray-300' : 'text-squared-gray-600';
  const borderColor = isDarkMode ? 'border-squared-gray-800' : 'border-squared-gray-200';
  const labelColor = isDarkMode ? 'text-brand-primary-hover' : 'text-squared-gray-500';

  return (
    <section id="locations" className={`py-20 md:py-32 bg-squared-white dark:bg-squared-black border-b ${borderColor} relative`}>
      {/* Background Grid */}
      <GridBackground />
      <div className="container mx-auto px-6 relative z-10">

        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-brand-primary"></div>
              <span className={`text-xs font-bold tracking-widest uppercase ${labelColor} ${language === 'ar' ? 'font-arabic' : 'font-mono'}`}>
                {t.locations.eyebrow}
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-sans font-bold ${textColor} ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'ar' ? 'مواقعنا' : 'OUR LOCATIONS'}
            </h2>
          </div>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 border ${borderColor} bg-white dark:bg-squared-gray-900 divide-y lg:divide-y-0 lg:divide-x rtl:lg:divide-x-reverse ${borderColor}`}>

          {/* List Side */}
          <div className={`divide-y ${borderColor}`}>
            {LOCATIONS.map((loc) => (
              <div key={loc.id} className={`p-8 md:p-12 transition-colors relative flex flex-col h-full bg-white dark:bg-squared-gray-900`}>
                <div className="flex justify-between items-start mb-6">
                  <h3 className={`text-2xl font-bold ${textColor} transition-colors ${language === 'ar' ? 'font-arabic' : ''}`}>
                    {language === 'ar' && loc.id === 'qatif' ? 'القطيف - الفرع الرئيسي' : loc.name}
                  </h3>
                  <MapPin className="text-brand-primary" size={24} />
                </div>

                <p className={`${subTextColor} mb-8 leading-relaxed max-w-sm ${language === 'ar' ? 'font-arabic' : ''}`}>
                  {brand.name} {t.locations.desc}
                </p>

                <div className="flex flex-col gap-4 mb-10">
                  <div className={`flex items-center gap-3 text-xs font-mono uppercase tracking-wider ${labelColor}`}>
                    <MapPin size={16} />
                    <span>{language === 'ar' ? 'القطيف، المملكة العربية السعودية' : `${loc.city}, ${loc.address}`}</span>
                  </div>
                  <div className={`flex items-center gap-3 text-xs font-mono uppercase tracking-wider ${labelColor}`}>
                    <Clock size={16} />
                    <span className="whitespace-pre-line">{t.locations.hours}</span>
                  </div>
                </div>

                <div className="mt-auto pt-4 text-start">
                  <InteractiveHoverButton 
                    text={t.locations.open_maps}
                    onClick={() => window.open(loc.mapUrl, '_blank')}
                    className="w-full sm:w-56"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Map Side */}
          <div ref={mapRef} className="relative min-h-[400px] lg:min-h-auto bg-squared-gray-100 dark:bg-squared-gray-800 overflow-hidden">
            {/* Loading Skeleton */}
            {!shouldLoadMap && (
               <div className="absolute inset-0 flex items-center justify-center bg-squared-gray-100 dark:bg-squared-gray-900 z-10 transition-opacity duration-500">
                  <div className="precision-loader">
                    <div className="cup">
                      <div className="cup-handle"></div>
                      <div className="smoke one"></div>
                      <div className="smoke two"></div>
                    </div>
                  </div>
               </div>
            )}

            {shouldLoadMap && (
              <iframe
                title={`${brand.name} Location`}
                src="https://maps.google.com/maps?q=Squared+Coffee+Qatif&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full absolute inset-0 z-10 animate-in fade-in duration-1000"
                style={{ border: 0 }}
                onLoad={() => console.log('Map loaded')}
              ></iframe>
            )}

            {/* Overlay Grid */}
            <GridBackground className="opacity-10 pointer-events-none z-20" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Locations;