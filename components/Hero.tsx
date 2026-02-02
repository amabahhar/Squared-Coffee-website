import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=2000" 
          alt="Squared Coffee Interior" 
          className="w-full h-full object-cover"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center mt-20">
        <span className="inline-block py-1 px-3 border border-squared-dark/30 rounded-full text-xs font-bold tracking-[0.2em] uppercase mb-6 bg-white/50 backdrop-blur-sm">
          Est. Qatif
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-medium text-squared-dark mb-6 tracking-tight">
          Squared<br/>Coffee
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto font-light leading-relaxed">
          Your second living room. Experience the perfect equation of taste, comfort, and community in the heart of Qatif.
        </p>
        
        <div className="mt-12 flex justify-center gap-4">
          <a href="#menu" className="group bg-squared-dark text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-squared-cyan transition-all duration-300 transform hover:-translate-y-1">
            View Menu
          </a>
          <a href="#locations" className="group bg-white text-squared-dark px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-gray-100 transition-all duration-300 border border-gray-200 transform hover:-translate-y-1">
            Find Us
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-squared-dark/50" />
      </div>
    </section>
  );
};

export default Hero;