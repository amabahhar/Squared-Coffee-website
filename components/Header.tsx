import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { NAV_ITEMS, LOCATIONS } from '../constants';
import { Menu, X, MapPin, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  onOrderClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOrderClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${scrolled ? 'glass py-4 border-b border-white/20 shadow-xl backdrop-blur-2xl' : 'bg-transparent py-8'
        }`}
    >
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">

        {/* Logo */}
        <a href="#hero" className="relative z-50 group">
          <Logo size={scrolled ? 'sm' : 'md'} variant={isOpen ? 'dark' : 'light'} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-14">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`cursor-pointer text-[10px] font-black tracking-[0.4em] uppercase transition-all duration-500 ${scrolled ? 'text-squared-gray-900' : 'text-squared-gray-900'
                } hover:text-squared-cyan relative group`}
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-squared-cyan shadow-[0_0_8px_rgba(0,159,184,0.6)] transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center text-[10px] font-black tracking-[0.2em] text-squared-gray-900 uppercase py-2 border-b-2 border-squared-cyan/30">
            <MapPin className="w-3.5 h-3.5 mr-2 text-squared-cyan" />
            <span>{LOCATIONS[0].city}</span>
            <span className="mx-2">•</span>
            <span className="text-squared-gray-500">Open Now</span>
          </div>

          <button
            onClick={onOrderClick}
            className="cursor-pointer bg-squared-cyan text-white px-10 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] hover:bg-squared-cyan-dark transition-all duration-500 shadow-xl shadow-squared-cyan/20 hover:shadow-squared-cyan/40 hover:-translate-y-1 active:scale-95"
          >
            Order
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="cursor-pointer md:hidden relative z-50 p-2 text-squared-gray-900 hover:text-squared-cyan transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 glass-dark z-40 flex flex-col justify-center items-center transition-all duration-[800ms] ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-squared-cyan/10 to-transparent pointer-events-none"></div>
        <nav className="flex flex-col items-center space-y-12 relative z-10">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="cursor-pointer text-3xl md:text-4xl font-serif font-black text-white hover:text-squared-cyan transition-all duration-300 tracking-wider hover:scale-110"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-12 md:mt-16 flex flex-col items-center space-y-6 md:space-y-8">
            <div className="flex items-center text-[10px] md:text-xs font-black text-white/70 uppercase tracking-[0.3em]">
              <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-3 md:mr-4 text-squared-cyan" />
              {LOCATIONS[0].city}
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                onOrderClick();
              }}
              className="cursor-pointer bg-squared-cyan text-white px-10 py-4 md:px-14 md:py-5 rounded-full text-lg md:text-xl font-black uppercase tracking-[0.2em] hover:bg-squared-cyan-dark shadow-2xl transition-all duration-500 hover:scale-105 active:scale-95"
            >
              Order Now
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;