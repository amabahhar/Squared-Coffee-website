import React from 'react';
import Logo from './Logo';
import { NAV_ITEMS } from '../constants';
import { Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="py-8 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-3xl pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-squared-cyan/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="glass-dark p-8 md:p-24 rounded-[3rem] md:rounded-[4.5rem] shadow-2xl border border-white/10 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-squared-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

          <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-20 relative z-10">
            <div className="max-w-sm">
              <Logo size="lg" className="mb-0" variant="dark" />
              <p className="mt-10 text-white/50 font-sans leading-relaxed text-base font-medium">
                Experience the perfect equation of taste, comfort, and community in the heart of Qatif. Your local sanctuary for exceptional coffee.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-16 md:gap-40">
              <div>
                <span className="block text-[10px] font-black tracking-[0.5em] uppercase mb-10 text-squared-cyan">Navigate</span>
                <nav className="flex flex-col space-y-5">
                  {NAV_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="cursor-pointer text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-squared-cyan transition-all duration-300 hover:translate-x-2"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>

              <div>
                <span className="block text-[10px] font-black tracking-[0.5em] uppercase mb-10 text-squared-cyan">Connect</span>
                <div className="flex flex-col space-y-5">
                  <a href="https://www.instagram.com/squared_coffee/" target="_blank" rel="noopener noreferrer" className="cursor-pointer text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-squared-cyan transition-all duration-300 flex items-center group/link hover:translate-x-2">
                    <Instagram className="w-5 h-5 mr-4 group-hover/link:text-squared-cyan transition-colors" /> Instagram
                  </a>
                  <a href="#" className="cursor-pointer text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-squared-cyan transition-all duration-300 flex items-center group/link hover:translate-x-2">
                    <Twitter className="w-5 h-5 mr-4 group-hover/link:text-squared-cyan transition-colors" /> Twitter
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black tracking-[0.3em] uppercase text-white/20 relative z-10 text-center md:text-left">
            <div>
              &copy; {new Date().getFullYear()} Squared Coffee. All rights reserved.
            </div>

            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10">
              <a href="#" className="cursor-pointer hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="cursor-pointer hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="cursor-pointer hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;