import React from 'react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';
import { Instagram, Phone, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  // Helper to get translated label
  const getNavLabel = (key: string) => {
    const k = key.toLowerCase() as keyof typeof t.nav;
    return t.nav[k] || key;
  };

  return (
    <footer id="footer" className="py-8 md:py-16 relative overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 bg-white/40 dark:bg-black/40 backdrop-blur-3xl pointer-events-none transition-colors duration-500"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-squared-cyan/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="glass p-8 md:p-24 rounded-[3rem] md:rounded-[4.5rem] shadow-2xl border border-white/30 dark:border-white/10 relative overflow-hidden group backdrop-blur-md transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-squared-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          {/* Geometric Accents */}
          <div className="absolute top-20 right-20 opacity-5 group-hover:opacity-10 transition-all pointer-events-none">
            <div className="w-32 h-32 border-2 border-squared-cyan rounded-sm rotate-45"></div>
          </div>
          <div className="absolute bottom-10 left-10 opacity-5 group-hover:opacity-10 transition-all pointer-events-none">
            <div className="w-24 h-24 border-2 border-squared-navy dark:border-white rounded-full transition-colors duration-500"></div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-20 relative z-10">
            <div className="max-w-sm">
              <Logo size="lg" className="mb-0" variant="dynamic" />
              <p className={`mt-10 text-squared-brown-light dark:text-white/50 font-sans leading-relaxed text-base font-medium transition-colors duration-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t.hero.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-16 md:gap-40">
              <div>
                <span className={`block text-[10px] font-black tracking-[0.5em] uppercase mb-10 text-squared-cyan ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>{t.social.eyebrow}</span>
                <nav className="flex flex-col space-y-5">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className={`cursor-pointer text-[10px] font-black uppercase tracking-[0.2em] text-squared-brown-light dark:text-white/40 hover:text-squared-cyan transition-all duration-300 hover:translate-x-2 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}
                    >
                      {getNavLabel(item.label)}
                    </a>
                  ))}
                </nav>
              </div>

              <div>
                <span className={`block text-[10px] font-black tracking-[0.5em] uppercase mb-10 text-squared-cyan ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>{t.social.eyebrow}</span>
                <div className="flex flex-col space-y-5">
                  <a href="https://www.instagram.com/squared_coffee/" target="_blank" rel="noopener noreferrer" className={`cursor-pointer text-[10px] font-black uppercase tracking-[0.2em] text-squared-brown-light dark:text-white/40 hover:text-squared-cyan transition-all duration-300 flex items-center group/link hover:translate-x-2 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                    <Instagram className={`w-5 h-5 group-hover/link:text-squared-cyan transition-colors ${language === 'ar' ? 'ml-4' : 'mr-4'}`} /> Instagram
                  </a>
                  <a href="tel:00966552325919" className={`cursor-pointer text-[10px] font-black uppercase tracking-[0.2em] text-squared-brown-light dark:text-white/40 hover:text-squared-cyan transition-all duration-300 flex items-center group/link hover:translate-x-2 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                    <Phone className={`w-5 h-5 group-hover/link:text-squared-cyan transition-colors ${language === 'ar' ? 'ml-4' : 'mr-4'}`} /> {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-squared-brown-light/10 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black tracking-[0.3em] uppercase text-squared-brown-light dark:text-white/20 relative z-10 text-center md:text-left transition-colors duration-500">
            <div className={language === 'ar' ? 'font-arabic tracking-normal' : ''}>
              &copy; {new Date().getFullYear()} Squared Coffee. {t.footer.rights}
            </div>

            <div className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 ${language === 'ar' ? 'font-arabic tracking-normal md:space-x-reverse' : ''}`}>
              <a href="#" className="cursor-pointer hover:text-squared-brown-dark dark:hover:text-white transition-colors">{t.footer.privacy}</a>
              <a href="#" className="cursor-pointer hover:text-squared-brown-dark dark:hover:text-white transition-colors">{t.footer.terms}</a>
              <a href="#" className="cursor-pointer hover:text-squared-brown-dark dark:hover:text-white transition-colors">{t.footer.contact}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;