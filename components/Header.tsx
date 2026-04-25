import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';
import { Menu, X, Globe, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { MorphingNavItem, MorphingButton } from './MorphingUI';

interface HeaderProps {
  onOrderClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOrderClick }) => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
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
        className={`fixed inset-block-start-0 inset-inline-start-0 w-full z-50 transition-all duration-300 border-b ${scrolled || isOpen
            ? 'bg-squared-white/90 dark:bg-squared-black/90 backdrop-blur-md border-squared-gray-200 dark:border-squared-gray-800 py-3'
            : 'bg-transparent border-transparent py-3 md:py-5'
          }`}
      >
        <div className="container mx-auto px-6 h-full flex justify-between items-center text-squared-black dark:text-squared-white">

          {/* Logo Section */}
          <a href="#hero" className="flex items-center gap-2 relative z-50">
            <Logo size={scrolled ? 'sm' : 'md'} variant={isDarkMode ? 'dark' : 'light'} />
          </a>

          {/* Desktop Navigation - Precision Lab Style */}
          <nav className="hidden lg:flex items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <MorphingNavItem
                key={item.label}
                href={item.href}
                label={getNavLabel(item.label)}
                language={language}
              />
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-6">

            {/* Context Actions Divider */}
            <div className="h-4 w-[1px] bg-squared-gray-200 dark:bg-squared-gray-800"></div>

            <div className="flex items-center gap-4">
              <button
                onClick={toggleDarkMode}
                className="hover:text-brand-primary transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={toggleLanguage}
                className="text-xs font-bold hover:text-brand-primary transition-colors"
              >
                {language === 'en' ? 'AR' : 'EN'}
              </button>
            </div>

            <MorphingButton
              onClick={onOrderClick}
              label={t.nav.order}
              language={language}
              variant="primary"
            />
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-6 z-50">
            <button
              onClick={toggleLanguage}
              className="text-xs font-bold hover:text-brand-primary transition-colors"
            >
              {language === 'en' ? 'AR' : 'EN'}
            </button>
            <button
              onClick={toggleDarkMode}
              className="hover:text-brand-primary transition-colors"
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
        className={`fixed inset-0 z-40 bg-squared-white dark:bg-squared-black transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full rtl:-translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full pt-32 px-10 pb-10">
          <nav className="flex flex-col gap-8">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-3xl font-bold text-squared-black dark:text-squared-white hover:text-brand-primary transition-colors border-b border-squared-gray-100 dark:border-squared-gray-800 pb-4 ${language === 'ar' ? 'font-arabic' : ''}`}
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
              className={`w-full bg-brand-primary text-white py-4 rounded-sm text-sm font-bold uppercase tracking-widest ${language === 'ar' ? 'font-arabic' : ''}`}
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