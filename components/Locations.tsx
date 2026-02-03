import React from 'react';
import { LOCATIONS } from '../constants';
import { Clock, MapPin, Phone } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-8 md:py-20 relative bg-transparent">
      {/* Decorative Aurora */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-squared-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">


        {/* Section Heading - Moved outside grid for alignment */}
        <div className="mb-12">
          <span className="inline-block py-1 pr-12 border-b-2 border-squared-cyan/30 text-sm md:text-base font-black tracking-[0.5em] text-squared-cyan uppercase">
            Our Spaces
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* Left Side: Location Cards */}
          <div className="flex flex-col flex-grow">
            <div className="space-y-12 h-full">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="cursor-pointer glass p-8 md:p-16 rounded-[2.5rem] md:rounded-[4.5rem] hover:shadow-[0_40px_80px_rgba(0,0,0,0.1),0_15px_30px_rgba(0,0,0,0.05)] transition-all duration-700 group border border-white/40 hover:border-squared-cyan/30 hover:-translate-y-3 h-full flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-squared-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                  <div className="relative z-10">

                    {/* Mobile Embedded Image (Float Style - Incorporated in Bubble) */}
                    <div className="lg:hidden float-right ml-6 mb-4 w-32 sm:w-40 relative z-20 pointer-events-none">
                      <img
                        src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&q=80&w=400"
                        alt="Location Map Visual"
                        className="rounded-2xl w-full aspect-[4/5] object-cover shadow-lg mb-4 transform rotate-2 border border-white/20"
                      />
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif text-squared-gray-900 mb-10 leading-tight font-black tracking-tight group-hover:text-squared-cyan transition-colors duration-500">
                      {loc.name}
                    </h2>
                    <p className="text-lg md:text-xl text-squared-gray-800 font-sans leading-relaxed mb-12 font-medium opacity-85 underline decoration-squared-cyan/15 underline-offset-8">
                      Come say hello. We are located in the vibrant district of Al Shatea, ready to serve you the perfect cup.
                    </p>

                    <div className="space-y-8 text-squared-gray-800 font-sans font-medium">
                      <div className="flex items-start">
                        <MapPin className="w-6 h-6 mr-6 text-squared-cyan mt-0.5" />
                        <span className="text-xs font-black uppercase tracking-widest leading-relaxed">{loc.address}<br />{loc.city}, Saudi Arabia</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-6 h-6 mr-6 text-squared-cyan" />
                        <span className="text-xs font-black uppercase tracking-widest">{loc.hours}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-black/5 relative z-10">
                    <a href={loc.mapUrl} className="cursor-pointer text-[10px] font-black uppercase tracking-[0.4em] text-squared-cyan hover:text-squared-cyan-dark transition-all duration-300 flex items-center group/link">
                      Open in Maps
                      <svg className="w-5 h-5 ml-4 group-hover/link:translate-x-3 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Imagery */}
          <div className="relative glass p-6 md:p-8 rounded-[2.5rem] md:rounded-[4.5rem] shadow-2xl group overflow-hidden border border-white/20 h-full min-h-[450px] lg:min-h-0 hidden lg:block">
            <div className="relative rounded-[3.5rem] overflow-hidden h-full">
              <img
                src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&q=80&w=1000"
                alt="Location Map Visual"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-0 bg-squared-cyan/10 pointer-events-none group-hover:bg-squared-cyan/0 transition-colors duration-1000"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Locations;