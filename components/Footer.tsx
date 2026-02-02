import React from 'react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="mb-8 md:mb-0">
            <Logo size="lg" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className="text-lg font-serif text-squared-dark hover:text-squared-cyan transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-100 pt-10">
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Squared Coffee.<br/>
            All rights reserved.
          </div>

          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-squared-cyan transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-squared-cyan transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-squared-cyan transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
          </div>

          <div className="md:text-right text-gray-500 text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span className="mx-2">•</span>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;