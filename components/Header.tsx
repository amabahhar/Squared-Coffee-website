import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { NAV_ITEMS, LOCATIONS } from '../constants';
import { Menu, X, MapPin, ShoppingBag } from 'lucide-react';

const Header: React.FC = () => {
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <a href="#hero" className="relative z-50 group">
          <Logo size={scrolled ? 'sm' : 'md'} />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`text-sm font-medium tracking-wide uppercase hover:text-squared-cyan transition-colors ${
                scrolled ? 'text-squared-dark' : 'text-squared-dark'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center text-xs font-medium text-gray-600 bg-white px-3 py-2 rounded-full shadow-sm border border-gray-100">
            <MapPin className="w-3 h-3 mr-2 text-squared-cyan" />
            <span>{LOCATIONS[0].city}</span>
            <span className="mx-1">•</span>
            <span className="text-green-600">Open Now</span>
          </div>
          
          <button className="bg-squared-dark text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-squared-cyan transition-colors flex items-center">
            <ShoppingBag className="w-4 h-4 mr-2" />
            Order
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden relative z-50 p-2 text-squared-dark"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out transform ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <nav className="flex flex-col items-center space-y-6">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label}
              href={item.href}
              className="text-2xl font-serif font-medium text-squared-dark"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-8 flex flex-col items-center space-y-4">
             <div className="flex items-center text-sm font-medium text-gray-600">
                <MapPin className="w-4 h-4 mr-2 text-squared-cyan" />
                {LOCATIONS[0].city}
             </div>
             <button className="bg-squared-cyan text-white px-8 py-3 rounded-full text-lg font-medium">
                Order Delivery
             </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;