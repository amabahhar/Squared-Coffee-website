import React from 'react';
import { LOCATIONS } from '../constants';
import { Clock, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Locations: React.FC = () => {
  const { t, language } = useLanguage();

  return (
    <section id="locations" className="py-8 md:py-20 relative bg-transparent">
      {/* Decorative Aurora - Optimized for mobile */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-squared-cyan/5 rounded-full pointer-events-none"
        style={{
          filter: 'blur(60px)',
          transform: 'translateZ(0)',
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">

        {/* Unified Glass Bubble Container */}
        <div className="glass p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] max-w-7xl mx-auto border border-white/30 shadow-2xl relative overflow-hidden group backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

          {/* Geometric Accents - Main Bubble */}
          <div className="absolute top-12 right-12 opacity-15 pointer-events-none group-hover:opacity-30 transition-opacity duration-700 -rotate-12">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 border-2 border-squared-navy rounded-sm"></div>
              <div className="absolute inset-6 border-2 border-squared-cyan/60 rounded-sm"></div>
            </div>
          </div>
          <div className="absolute bottom-16 left-12 opacity-15 pointer-events-none group-hover:opacity-30 transition-opacity duration-700 rotate-12">
            <div className="w-40 h-20 overflow-hidden">
              <div className="w-40 h-40 border-2 border-squared-navy rounded-full"></div>
            </div>
          </div>

          <div className="relative z-10">
            {/* Section Heading */}
            <div className="mb-12">
              <span className={`inline-block py-1 pr-8 border-b-2 border-squared-cyan/30 text-xs md:text-sm font-black tracking-[0.4em] text-squared-cyan uppercase ${language === 'ar' ? 'font-arabic tracking-normal pl-8 pr-0' : ''}`}>
                {t.locations.eyebrow}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

              {/* Left Side: Location Cards */}
              <div className="flex flex-col flex-grow">
                <div className="space-y-12 h-full">
                  {LOCATIONS.map((loc) => (
                    <div key={loc.id} className="cursor-pointer p-8 md:p-12 rounded-[2rem] md:rounded-[3.5rem] hover:bg-white/20 transition-all duration-700 group/card border border-white/20 hover:border-squared-cyan/30 hover:-translate-y-2 h-full flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-squared-cyan/5 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-1000"></div>

                      {/* Geometric Accents */}
                      <div className="absolute -top-8 -right-8 opacity-10 group-hover/card:opacity-25 transition-opacity duration-700">
                        <div className="relative w-32 h-32">
                          <div className="absolute inset-0 border-2 border-squared-cyan rounded-sm"></div>
                          <div className="absolute inset-4 border-2 border-squared-cyan/60 rounded-sm"></div>
                        </div>
                      </div>
                      <div className="absolute -bottom-8 -left-8 opacity-10 group-hover/card:opacity-20 transition-opacity duration-700">
                        <div className="w-24 h-12 overflow-hidden">
                          <div className="w-24 h-24 border-2 border-squared-cyan rounded-full"></div>
                        </div>
                      </div>
                      <div className="relative z-10">

                        {/* Mobile Embedded Image (Float Style - Incorporated in Bubble) */}
                        <div className={`lg:hidden float-right mb-4 w-32 sm:w-40 relative z-20 pointer-events-none ${language === 'ar' ? 'float-left ml-6 mr-0' : 'float-right ml-6'}`}>
                          <img
                            src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&q=80&w=400"
                            alt="Location Map Visual"
                            className="rounded-2xl w-full aspect-[4/5] object-cover shadow-lg mb-4 transform rotate-2 border border-white/20"
                          />
                        </div>

                        <h2 className={`text-4xl md:text-6xl font-serif text-squared-gray-900 mb-10 leading-tight font-black tracking-tight group-hover/card:text-squared-cyan transition-colors duration-500 ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
                          {language === 'ar' ? 'القطيف - الفرع الرئيسي' : loc.name}
                        </h2>
                        <p className={`text-lg md:text-xl text-squared-gray-800 font-sans leading-relaxed mb-12 font-medium opacity-85 underline decoration-squared-cyan/15 underline-offset-8 ${language === 'ar' ? 'font-arabic' : ''}`}>
                          {t.locations.desc}
                        </p>

                        <div className="space-y-8 text-squared-gray-800 font-sans font-medium">
                          <div className="flex items-start">
                            <MapPin className={`w-6 h-6 text-squared-cyan mt-0.5 ${language === 'ar' ? 'ml-6' : 'mr-6'}`} />
                            <span className={`text-xs font-black uppercase tracking-widest leading-relaxed ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                              {language === 'ar'
                                ? <>شارع الملك عبدالعزيز، الشاطئ<br />القطيف، المملكة العربية السعودية</>
                                : <>{loc.address}<br />{loc.city}, Saudi Arabia</>
                              }
                            </span>
                          </div>
                          <div className="flex items-center">
                            <Clock className={`w-6 h-6 text-squared-cyan ${language === 'ar' ? 'ml-6' : 'mr-6'}`} />
                            <span className={`text-xs font-black uppercase tracking-widest ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>{t.locations.hours}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-12 pt-8 border-t border-black/5 relative z-10">
                        <a href={loc.mapUrl} className={`cursor-pointer text-[10px] font-black uppercase tracking-[0.4em] text-squared-cyan hover:text-squared-cyan-dark transition-all duration-300 flex items-center group/link ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                          {t.locations.open_maps}
                          <svg className={`w-5 h-5 group-hover/link:translate-x-3 transition-transform ${language === 'ar' ? 'mr-4 rotate-180 group-hover/link:-translate-x-3' : 'ml-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Imagery */}
              <div className="relative p-6 md:p-8 rounded-[2rem] md:rounded-[3.5rem] group/image overflow-hidden h-full min-h-[450px] lg:min-h-0 hidden lg:block bg-white/10">
                {/* Geometric Accents */}
                <div className="absolute top-10 left-10 opacity-10 group-hover/image:opacity-20 transition-opacity">
                  <div className="w-16 h-16 border-2 border-squared-cyan rounded-sm -rotate-12"></div>
                </div>
                <div className="relative rounded-[2.5rem] overflow-hidden h-full">
                  <img
                    src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&q=80&w=1000"
                    alt="Location Map Visual"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]"
                  />
                  <div className="absolute inset-0 bg-squared-cyan/10 pointer-events-none group-hover/image:bg-squared-cyan/0 transition-colors duration-1000"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover/image:opacity-100 transition-opacity duration-1000"></div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Locations;