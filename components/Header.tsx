import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { NAV_ITEMS, LOCATIONS } from '../constants';
import { Menu, X, MapPin, Globe, Sun, Moon, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface HeaderProps {
  onOrderClick: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOrderClick, isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const getNavLabel = (key: string) => {
    const k = key.toLowerCase() as keyof typeof t.nav;
    return t.nav[k] || key;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${scrolled || isOpen
            ? 'bg-squared-white/90 dark:bg-squared-black/90 backdrop-blur-md border-squared-gray-200 dark:border-squared-gray-800 py-3'
            : 'bg-transparent border-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-6 h-full flex justify-between items-center text-squared-black dark:text-squared-white">

          {/* Logo Section */}
          <a href="#hero" className="flex items-center gap-2 relative z-50">
            <Logo size={scrolled ? 'sm' : 'md'} variant={isDarkMode ? 'dark' : 'light'} />
          </a>

          {/* Desktop Navigation - Precision Lab Style */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`group relative text-xs font-bold uppercase tracking-widest text-squared-gray-900 dark:text-squared-gray-100 hover:text-squared-cyan transition-colors duration-300 ${language === 'ar' ? 'font-arabic text-sm tracking-normal' : ''}`}
              >
                {getNavLabel(item.label)}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-squared-cyan transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-6">

            {/* Context Actions Divider */}
            <div className="h-4 w-[1px] bg-squared-gray-200 dark:bg-squared-gray-800"></div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="hover:text-squared-cyan transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={toggleLanguage}
                className="text-xs font-bold hover:text-squared-cyan transition-colors"
              >
                {language === 'en' ? 'AR' : 'EN'}
              </button>
            </div>

            <button
              onClick={onOrderClick}
              className={`bg-squared-black dark:bg-squared-white text-squared-white dark:text-squared-black hover:bg-squared-cyan dark:hover:bg-squared-cyan hover:text-white px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-all duration-300 ${language === 'ar' ? 'font-arabic tracking-normal text-sm' : ''}`}
            >
              {t.nav.order}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4 z-50">
            <button
              onClick={toggleDarkMode}
              className="hover:text-squared-cyan transition-colors"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={handleToggle} className="text-squared-black dark:text-squared-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Full Screen Precision Grid */}
      <div
        className={`fixed inset-0 z-40 bg-squared-white dark:bg-squared-black transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full pt-32 px-10 pb-10">
          <nav className="flex flex-col gap-8">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-bold text-squared-black dark:text-squared-white hover:text-squared-cyan transition-colors border-b border-squared-gray-100 dark:border-squared-gray-800 pb-4 ${language === 'ar' ? 'font-arabic' : ''}`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {getNavLabel(item.label)}
              </a>
            ))}
          </nav>

          <div className="mt-auto flex flex-col gap-6">
            <button
              onClick={toggleLanguage}
              className="text-lg font-bold flex items-center gap-2"
            >
              <Globe size={20} />
              {language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onOrderClick();
              }}
              className={`w-full bg-squared-cyan text-white py-4 rounded-sm text-sm font-bold uppercase tracking-widest ${language === 'ar' ? 'font-arabic' : ''}`}
            >
              {language === 'ar' ? 'اطلب الآن' : 'Order Now'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;