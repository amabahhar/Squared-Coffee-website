import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { NAV_ITEMS, LOCATIONS } from '../constants';
import { Menu, X, MapPin, ShoppingBag, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onOrderClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOrderClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  // Helper to get translated label
  const getNavLabel = (key: string) => {
    const k = key.toLowerCase() as keyof typeof t.nav;
    return t.nav[k] || key;
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'glass py-4 border-b border-white/20 shadow-xl backdrop-blur-2xl' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center relative">

        {/* Logo */}
        <a href="#hero" className="relative z-50 group">
          <Logo size={scrolled ? 'sm' : 'md'} variant={isOpen ? 'dark' : 'light'} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto px-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`cursor-pointer text-xs font-black tracking-[0.2em] uppercase transition-all duration-500 ${scrolled ? 'text-squared-gray-900' : 'text-squared-gray-900'
                } hover:text-squared-cyan relative group ${language === 'ar' ? 'font-arabic tracking-normal text-sm' : ''}`}
            >
              {getNavLabel(item.label)}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-squared-cyan shadow-[0_0_8px_rgba(0,194,224,0.6)] transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-6">

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-squared-gray-900/10 hover:border-squared-cyan/50 hover:bg-white/50 transition-all cursor-pointer group"
          >
            <Globe className="w-4 h-4 text-squared-gray-600 group-hover:text-squared-cyan" />
            <span className={`text-[10px] font-black uppercase ${language === 'ar' ? 'font-serif tracking-widest' : 'font-arabic'}`}>
              {language === 'en' ? 'AR' : 'EN'}
            </span>
          </button>

          <div className="flex items-center text-[10px] font-black tracking-[0.2em] text-squared-gray-900 uppercase py-2 border-b-2 border-squared-cyan/30">
            <MapPin className="w-3.5 h-3.5 mr-2 text-squared-cyan" />
            <span>{language === 'ar' ? 'القطيف' : LOCATIONS[0].city}</span>
            <span className="mx-2">•</span>
            <span className="text-squared-gray-500">{language === 'ar' ? 'مفتوح الآن' : 'Open Now'}</span>
          </div>

          <button
            onClick={onOrderClick}
            className={`cursor-pointer bg-squared-cyan text-white px-10 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-squared-cyan-dark transition-all duration-500 shadow-xl shadow-squared-cyan/20 hover:shadow-squared-cyan/40 hover:-translate-y-1 active:scale-95 ${language === 'ar' ? 'font-arabic tracking-normal text-sm' : ''}`}
          >
            {t.nav.order}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="cursor-pointer lg:hidden relative z-50 p-2 text-squared-gray-900 hover:text-squared-cyan transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 glass-dark z-40 flex flex-col justify-center items-center transition-all duration-[800ms] ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
          }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-squared-cyan/10 to-transparent pointer-events-none"></div>
        <nav className="flex flex-col items-center space-y-12 relative z-10 w-full">

          {/* Mobile Lang Toggle - Now visible at top */}
          <button
            onClick={() => { toggleLanguage(); }}
            className="flex items-center gap-3 px-6 py-3 rounded-full glass border border-white/30 text-white hover:border-squared-cyan/50 transition-all"
          >
            <Globe className="w-5 h-5" />
            <span className={`text-sm font-black ${language === 'ar' ? 'font-arabic' : ''}`}>
              {language === 'en' ? 'العربية' : 'English'}
            </span>
          </button>

          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`cursor-pointer text-3xl md:text-4xl font-serif font-black text-white hover:text-squared-cyan transition-all duration-300 tracking-wider hover:scale-110 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {getNavLabel(item.label)}
            </a>
          ))}
          <div className="mt-12 md:mt-16 flex flex-col items-center space-y-6 md:space-y-8">
            <div className="flex items-center text-[10px] md:text-xs font-black text-white/70 uppercase tracking-[0.3em]">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-3 md:mr-4 text-squared-cyan" />
              {language === 'ar' ? 'القطيف' : LOCATIONS[0].city}
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                onOrderClick();
              }}
              className={`cursor-pointer bg-squared-cyan text-white px-10 py-4 md:px-14 md:py-5 rounded-full text-lg md:text-xl font-black uppercase tracking-[0.2em] hover:bg-squared-cyan-dark shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}
            >
              {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;