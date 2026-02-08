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
        <div className="glass p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] border border-white/30 dark:border-white/10 shadow-2xl relative overflow-hidden group backdrop-blur-md transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

          {/* Geometric Accents */}
          <div className="absolute top-20 right-20 opacity-5 group-hover:opacity-10 transition-all pointer-events-none">
            <div className="w-32 h-32 border-2 border-squared-cyan rounded-sm rotate-45"></div>
          </div>
          <div className="absolute bottom-10 left-10 opacity-5 group-hover:opacity-10 transition-all pointer-events-none">
            <div className="w-24 h-24 border-2 border-squared-navy dark:border-white rounded-full transition-colors duration-500"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 relative z-10">
            {/* Brand Column */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <Logo size="lg" className="mb-0" variant="dynamic" />
              <p className={`mt-8 text-squared-brown-light dark:text-white/60 font-sans leading-relaxed text-sm md:text-base font-medium max-w-sm transition-colors duration-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {t.hero.subtitle}
              </p>
            </div>

            {/* Links Column */}
            <div className="lg:col-span-3 lg:col-start-7">
              <span className={`block text-[10px] font-black tracking-[0.4em] uppercase mb-8 text-squared-cyan ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                {language === 'ar' ? 'خريطة الموقع' : 'SITEMAP'}
              </span>
              <nav className="flex flex-col space-y-4">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`inline-block w-fit cursor-pointer text-xs font-black uppercase tracking-[0.2em] text-squared-brown-light dark:text-white/50 hover:text-squared-cyan transition-all duration-300 hover:translate-x-2 ${language === 'ar' ? 'font-arabic tracking-normal hover:-translate-x-2' : ''}`}
                  >
                    {getNavLabel(item.label)}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Column */}
            <div className="lg:col-span-3">
              <span className={`block text-[10px] font-black tracking-[0.4em] uppercase mb-8 text-squared-cyan ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                {t.social.eyebrow}
              </span>
              <div className="flex flex-col space-y-4">
                <a href="https://www.instagram.com/squared_coffee/" target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-3 w-fit cursor-pointer text-xs font-black uppercase tracking-[0.2em] text-squared-brown-light dark:text-white/50 hover:text-squared-cyan transition-all duration-300 group/link hover:translate-x-2 ${language === 'ar' ? 'font-arabic tracking-normal hover:-translate-x-2' : ''}`}>
                  <div className="w-8 h-8 rounded-full bg-squared-brown-light/5 dark:bg-white/5 flex items-center justify-center group-hover/link:bg-squared-cyan group-hover/link:text-white transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span>Instagram</span>
                </a>
                <a href="tel:00966552325919" className={`inline-flex items-center gap-3 w-fit cursor-pointer text-xs font-black uppercase tracking-[0.2em] text-squared-brown-light dark:text-white/50 hover:text-squared-cyan transition-all duration-300 group/link hover:translate-x-2 ${language === 'ar' ? 'font-arabic tracking-normal hover:-translate-x-2' : ''}`}>
                  <div className="w-8 h-8 rounded-full bg-squared-brown-light/5 dark:bg-white/5 flex items-center justify-center group-hover/link:bg-squared-cyan group-hover/link:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span>{language === 'ar' ? 'اتصل بنا' : 'Call Us'}</span>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-squared-brown-light/10 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black tracking-[0.2em] uppercase text-squared-brown-light dark:text-white/30 relative z-10 text-center md:text-left transition-colors duration-500">
            <div className={language === 'ar' ? 'font-arabic tracking-normal' : ''}>
              &copy; {new Date().getFullYear()} Squared Coffee. {t.footer.rights}
            </div>

            <div className={`flex flex-wrap justify-center gap-6 md:gap-8 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
              <a href="#" className="cursor-pointer hover:text-squared-cyan transition-colors">{t.footer.privacy}</a>
              <a href="#" className="cursor-pointer hover:text-squared-cyan transition-colors">{t.footer.terms}</a>
              <a href="#" className="cursor-pointer hover:text-squared-cyan transition-colors">{t.footer.contact}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;