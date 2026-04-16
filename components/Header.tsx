import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { NAV_ITEMS, LOCATIONS } from '../constants';
import { Menu, X, MapPin, Globe, Sun, Moon, ShoppingBag } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { MorphingNavItem, MorphingButton } from './MorphingUI';

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
          <nav className="hidden lg:flex items-center gap-4">
            {NAV_ITEMS.map((item) => (
              <MorphingNavItem
                key={item.label}
                href={item.href}
                label={getNavLabel(item.label)}
                isDarkMode={isDarkMode}
                language={language}
              />
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-6">

            {/* Context Actions Divider */}
            <div className="h-4 w-[1px] bg-squared-gray-200 dark:bg-squared-gray-800"></div>

            <div className="flex items-center gap-4">
              <label className="switch-ui" aria-label="Toggle theme">
                <input
                  type="checkbox"
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <span className="switch-slider">
                  <span className="sun-ui">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <g fill="currentColor">
                        <circle r="5" cy="12" cx="12" />
                        <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z" />
                      </g>
                    </svg>
                  </span>
                  <span className="moon-ui">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                    </svg>
                  </span>
                </span>
              </label>

              <button
                onClick={toggleLanguage}
                className="text-xs font-bold hover:text-squared-cyan transition-colors"
              >
                {language === 'en' ? 'AR' : 'EN'}
              </button>
            </div>

            <MorphingButton
              onClick={onOrderClick}
              label={t.nav.order}
              isDarkMode={isDarkMode}
              language={language}
              variant="primary"
            />
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-4 z-50">
            <label className="switch-ui scale-90" aria-label="Toggle theme">
              <input
                type="checkbox"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              <span className="switch-slider">
                <span className="sun-ui">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g fill="currentColor">
                      <circle r="5" cy="12" cx="12" />
                      <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z" />
                    </g>
                  </svg>
                </span>
                <span className="moon-ui">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                  </svg>
                </span>
              </span>
            </label>
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