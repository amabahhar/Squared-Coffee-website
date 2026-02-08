import React from 'react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';
import { Instagram, Phone, Facebook, Twitter, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t, language } = useLanguage();

  const getNavLabel = (key: string) => {
    const k = key.toLowerCase() as keyof typeof t.nav;
    return t.nav[k] || key;
  };

  return (
    <footer id="footer" className="bg-squared-black text-squared-white border-t border-squared-gray-900 pt-20 pb-10 overflow-hidden relative">

      {/* Precision Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px),
                               linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          {/* Column 1: Brand & Desc */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Logo size="lg" variant="dark" className="mb-8" />
            <p className={`text-squared-gray-400 max-w-sm leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.hero.subtitle}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className={`text-xs font-bold uppercase tracking-widest text-squared-cyan mb-8 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
              {language === 'ar' ? 'خريطة الموقع' : 'SITEMAP'}
            </h4>
            <ul className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`text-sm font-bold uppercase tracking-wider text-squared-white hover:text-squared-cyan transition-colors ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}
                  >
                    {getNavLabel(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="md:col-span-3">
            <h4 className={`text-xs font-bold uppercase tracking-widest text-squared-cyan mb-8 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
              {t.social.eyebrow}
            </h4>
            <div className="flex flex-col space-y-4">
              <a href="https://www.instagram.com/squared_coffee/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-8 h-8 flex items-center justify-center border border-squared-gray-800 rounded-sm group-hover:border-squared-cyan group-hover:text-squared-cyan transition-colors">
                  <Instagram size={16} />
                </div>
                <span className="text-sm font-bold uppercase tracking-wider">Instagram</span>
              </a>
              <a href="tel:00966552325919" className="flex items-center gap-3 group">
                <div className="w-8 h-8 flex items-center justify-center border border-squared-gray-800 rounded-sm group-hover:border-squared-cyan group-hover:text-squared-cyan transition-colors">
                  <Phone size={16} />
                </div>
                <span className={`text-sm font-bold uppercase tracking-wider ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                  {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Massive Footer Typo */}
        <div className="border-t border-squared-gray-900 pt-10 pb-6">
          <div className="w-full flex justify-center opacity-10 select-none pointer-events-none">
            <span className="text-[12vw] leading-none font-black tracking-tighter text-squared-white">
              SQUARED
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-4">
            <p className={`text-squared-gray-600 text-xs font-mono uppercase ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
              &copy; {new Date().getFullYear()} Squared Coffee. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs font-bold uppercase tracking-wider text-squared-gray-600 hover:text-squared-cyan transition-colors">Privacy</a>
              <a href="#" className="text-xs font-bold uppercase tracking-wider text-squared-gray-600 hover:text-squared-cyan transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;