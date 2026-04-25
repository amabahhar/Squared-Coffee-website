import React from 'react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';
import { Instagram, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import GridBackground from './GridBackground';
import { useBrand } from '../contexts/BrandContext';

const Footer: React.FC = () => {
  const { brand } = useBrand();
  const { t, language } = useLanguage();

  const getNavLabel = (key: string) => {
    const k = key.toLowerCase() as keyof typeof t.nav;
    return t.nav[k] || key;
  };

  return (
    <footer id="footer" className="bg-squared-black text-squared-white border-t border-squared-gray-900 pt-16 pb-8 overflow-hidden relative">
      <GridBackground className="text-squared-white" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">

          {/* Column 1: Brand & Desc */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Logo size="md" variant="dark" className="mb-6" />
            <p className={`text-squared-gray-400 text-sm max-w-sm leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}>
              {t.hero.subtitle}
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-6 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
              {language === 'ar' ? 'خريطة الموقع' : 'SITEMAP'}
            </h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`text-xs font-bold uppercase tracking-widest text-squared-white/70 hover:text-brand-primary transition-colors ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}
                  >
                    {getNavLabel(item.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Social */}
          <div className="md:col-span-3">
            <h4 className={`text-[10px] font-bold uppercase tracking-[0.2em] text-brand-primary mb-6 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
              {t.social.eyebrow}
            </h4>
            <div className="flex flex-col space-y-3">
              <a href={brand.social.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                <div className="w-8 h-8 flex items-center justify-center border border-squared-gray-800 rounded-sm group-hover:border-brand-primary group-hover:text-brand-primary transition-all duration-300">
                  <Instagram size={14} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest text-squared-white/70 group-hover:text-brand-primary transition-colors ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                  {language === 'ar' ? 'إنستغرام' : 'Instagram'}
                </span>
              </a>
              <a href="tel:00966552325919" className="flex items-center gap-3 group">
                <div className="w-8 h-8 flex items-center justify-center border border-squared-gray-800 rounded-sm group-hover:border-brand-primary group-hover:text-brand-primary transition-all duration-300">
                  <Phone size={14} />
                </div>
                <span className={`text-xs font-bold uppercase tracking-widest text-squared-white/70 group-hover:text-brand-primary transition-colors ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                  {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Branded "Ghost" Typo */}
        <div className="border-t border-squared-gray-900 pt-8">
          <div className="w-full flex justify-center opacity-10 select-none pointer-events-none mb-4">
            <span className="text-[10vw] leading-none font-black tracking-tighter text-squared-white select-none uppercase">
              {brand.name.split(' ')[0]}
            </span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
            <p className={`text-squared-gray-600 text-[10px] font-mono uppercase tracking-tight ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
               {language === 'ar' ? 'حقوق الطبع والنشر' : '©'} {new Date().getFullYear()} {brand.legalName}. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
            </p>
            <div className="flex gap-8">
              <a href="#" className={`text-[10px] font-bold uppercase tracking-[0.2em] text-squared-gray-600 hover:text-brand-primary transition-colors ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                {t.footer.privacy}
              </a>
              <a href="#" className={`text-[10px] font-bold uppercase tracking-[0.2em] text-squared-gray-600 hover:text-brand-primary transition-colors ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;