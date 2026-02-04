import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { NAV_ITEMS, LOCATIONS } from '../constants';
import { Menu, X, MapPin, ShoppingBag, Globe, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onOrderClick: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOrderClick, isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const handleToggle = () => {
    setHasInteracted(true);
    setIsOpen(!isOpen);
  };

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${isOpen ? 'bg-transparent py-4' : scrolled ? 'glass py-4 border-b border-white/20 dark:border-white/10 shadow-xl backdrop-blur-2xl' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center relative">

        {/* Logo */}
        <a href="#hero" className="relative z-50 group">
          <Logo size={scrolled ? 'sm' : 'md'} variant={isDarkMode ? 'dark' : 'light'} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mx-auto px-4">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`cursor-pointer text-xs font-black tracking-[0.2em] uppercase transition-all duration-500 ${scrolled || isDarkMode ? 'text-squared-brown-dark dark:text-white' : 'text-squared-brown-dark'
                } hover:text-squared-cyan relative group ${language === 'ar' ? 'font-arabic tracking-normal text-sm' : ''}`}
            >
              {getNavLabel(item.label)}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-squared-cyan shadow-[0_0_8px_rgba(0,194,224,0.6)] transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden lg:flex items-center gap-6">

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center p-2 rounded-full border border-squared-brown-dark/10 dark:border-white/10 hover:border-squared-cyan/50 hover:bg-white/50 dark:hover:bg-white/10 transition-all cursor-pointer group"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-squared-gold group-hover:scale-110 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 text-squared-brown-light group-hover:text-squared-cyan group-hover:scale-110 transition-transform" />
            )}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-squared-brown-dark/10 dark:border-white/10 hover:border-squared-cyan/50 hover:bg-white/50 dark:hover:bg-white/10 transition-all cursor-pointer group"
          >
            <Globe className="w-4 h-4 text-squared-brown-dark dark:text-white/70 group-hover:text-squared-cyan" />
            <span className={`text-[10px] font-black uppercase text-squared-brown-dark dark:text-white ${language === 'ar' ? 'font-serif tracking-widest' : 'font-arabic'}`}>
              {language === 'en' ? 'AR' : 'EN'}
            </span>
          </button>

          <div className="flex items-center text-[10px] font-black tracking-[0.2em] text-squared-brown-dark dark:text-white/80 uppercase py-2 border-b-2 border-squared-cyan/30">
            <MapPin className="w-3.5 h-3.5 mr-2 text-squared-cyan" />
            <span>{language === 'ar' ? 'القطيف' : LOCATIONS[0].city}</span>
            <span className="mx-2">•</span>
            <span className="text-squared-brown-dark dark:text-white/60 transition-colors duration-500">{language === 'ar' ? 'مفتوح الآن' : 'Open Now'}</span>
          </div>

          <button
            onClick={onOrderClick}
            className={`cursor-pointer bg-squared-cyan text-white px-10 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-squared-cyan-dark transition-all duration-500 shadow-xl shadow-squared-cyan/20 hover:shadow-squared-cyan/40 hover:-translate-y-1 active:scale-95 ${language === 'ar' ? 'font-arabic tracking-normal text-sm' : ''}`}
          >
            {t.nav.order}
          </button>
        </div>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-1 sm:gap-2 relative z-50">
          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center justify-center p-2 rounded-full border border-squared-brown-dark/10 dark:border-white/10 hover:border-squared-cyan/50 hover:bg-white/50 dark:hover:bg-white/10 transition-all cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="w-4 h-4 text-squared-gold" />
            ) : (
              <Moon className="w-4 h-4 text-squared-brown-light dark:text-white/70" />
            )}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border border-squared-brown-dark/10 dark:border-white/10 hover:border-squared-cyan/50 hover:bg-white/50 dark:hover:bg-white/10 transition-all cursor-pointer"
          >
            <Globe className="w-4 h-4 text-squared-brown-dark dark:text-white/70" />
            <span className={`text-[10px] font-black uppercase text-squared-brown-dark dark:text-white ${language === 'en' ? 'font-serif tracking-widest' : 'font-arabic'}`}>
              {language === 'en' ? 'AR' : 'EN'}
            </span>
          </button>

          <button
            className="cursor-pointer p-2 text-squared-brown-dark dark:text-white hover:text-squared-cyan transition-colors"
            onClick={handleToggle}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-white dark:bg-[#0B1120] z-40 flex flex-col items-center transform overflow-y-auto pt-20 pb-8 ${hasInteracted ? 'transition-all duration-[800ms] ease-in-out' : ''} ${isOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'
          }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-squared-cyan/10 to-transparent pointer-events-none"></div>
        <nav className="flex flex-col items-center space-y-6 relative z-10 w-full">



          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`cursor-pointer text-xl font-serif font-black text-squared-brown-dark dark:text-white hover:text-squared-cyan transition-all duration-300 tracking-wider hover:scale-110 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {getNavLabel(item.label)}
            </a>
          ))}
          <div className="mt-6 flex flex-col items-center space-y-4">
            <div className="flex items-center text-[10px] font-black text-squared-brown-dark/70 dark:text-white/70 uppercase tracking-[0.3em]">
              <MapPin className="w-4 h-4 mr-2 text-squared-cyan" />
              {language === 'ar' ? 'القطيف' : LOCATIONS[0].city}
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                onOrderClick();
              }}
              className={`cursor-pointer bg-squared-cyan text-white px-10 py-3 rounded-full text-sm font-black uppercase tracking-[0.2em] hover:bg-squared-cyan-dark shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}
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