import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center">
      {/* Background/Aurora is handled by App.tsx */}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-12 md:mt-20 flex justify-center">
        <div className="glass p-6 md:p-16 rounded-[2rem] md:rounded-[3rem] max-w-6xl w-full border border-white/30 shadow-2xl relative overflow-hidden group backdrop-blur-md">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

          <div className="relative z-10">
            <span className="inline-block py-2 px-6 glass-dark text-white rounded-full text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-6 md:mb-10 shadow-lg border border-white/10">
              Est. Qatif
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium text-squared-gray-900 mb-6 md:mb-8 leading-[0.95] tracking-tighter drop-shadow-sm">
              Squared<br />
              <span className="text-squared-cyan drop-shadow-[0_0_35px_rgba(0,159,184,0.35)] font-black">Coffee</span>
            </h1>

            <p className="text-base md:text-2xl text-squared-gray-800 max-w-2xl mx-auto font-sans leading-relaxed font-medium opacity-90 mb-8 md:mb-12">
              Your second living room. Experience the perfect equation of taste, comfort, and community in the heart of Qatif.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
              <a
                href="#menu"
                className="w-full sm:w-auto group cursor-pointer bg-squared-cyan text-white px-8 md:px-10 py-3 md:py-4 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] shadow-[0_15px_30px_rgba(0,159,184,0.3)] hover:shadow-[0_25px_50px_rgba(0,159,184,0.5)] transition-all duration-500 hover:-translate-y-1"
              >
                Explore Menu
              </a>
              <a
                href="#locations"
                className="w-full sm:w-auto group cursor-pointer glass text-squared-gray-900 px-8 md:px-10 py-3 md:py-4 rounded-full text-xs md:text-sm font-black uppercase tracking-[0.2em] shadow-xl border border-white/40 hover:bg-white/50 transition-all duration-500 hover:-translate-y-1"
              >
                Find Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-8 h-8 text-squared-gray-900/30" />
      </div>
    </section>
  );
};

export default Hero;