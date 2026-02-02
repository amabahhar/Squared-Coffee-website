import React from 'react';
import { LOCATIONS } from '../constants';
import { Clock, MapPin, Phone } from 'lucide-react';

const Locations: React.FC = () => {
  return (
    <section id="locations" className="py-24 bg-squared-dark text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-squared-cyan uppercase mb-4">
                Visit Us
              </h2>
              <h3 className="text-4xl md:text-5xl font-serif mb-6">
                Qatif Location
              </h3>
              <p className="text-gray-400 max-w-md font-light">
                Come say hello. We are located in the vibrant district of Al Shatea, ready to serve you the perfect cup.
              </p>
            </div>

            <div className="space-y-6">
              {LOCATIONS.map((loc) => (
                <div key={loc.id} className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-squared-cyan/50 transition-colors">
                  <h4 className="text-2xl font-serif mb-4">{loc.name}</h4>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 text-squared-cyan mt-1" />
                      <span>{loc.address}<br/>{loc.city}, Saudi Arabia</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-squared-cyan" />
                      <span>{loc.hours}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-squared-cyan" />
                      <span>+966 50 000 0000</span>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <a href={loc.mapUrl} className="text-sm font-bold uppercase tracking-wider text-white hover:text-squared-cyan transition-colors flex items-center">
                      Get Directions &rarr;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[500px] lg:h-auto rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            {/* Placeholder for map or location shot */}
            <img 
              src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?auto=format&fit=crop&q=80&w=1000" 
              alt="Location Map Visual" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-squared-cyan/10 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Locations;