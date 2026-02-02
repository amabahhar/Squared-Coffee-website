import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <img 
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600" 
              alt="Coffee Brewing" 
              className="rounded-2xl w-full h-64 object-cover transform translate-y-8 shadow-lg"
            />
            <img 
              src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600" 
              alt="Cafe Atmosphere" 
              className="rounded-2xl w-full h-64 object-cover shadow-lg"
            />
            {/* Decorative Square element */}
            <div className="absolute -z-10 -bottom-8 -left-8 w-32 h-32 bg-squared-cyan/20 rounded-xl"></div>
          </div>

          {/* Text Content */}
          <div className="md:pl-10">
            <h2 className="text-sm font-bold tracking-[0.2em] text-squared-cyan uppercase mb-4">
              Our Concept
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-squared-dark mb-6 leading-tight">
              More than just<br/> a coffee shop.
            </h3>
            <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg">
              <p>
                Whether you drop by for a delicious cup of coffee, a homemade pastry, a kick-start breakfast, or a delicious lunch: the door of Squared Coffee is wide open for you.
              </p>
              <p>
                As soon as you step over the threshold, you are home. The café radiates peace, warmth, and domesticity. It is the ultimate place to have a chat, open a good book, study quietly, or just relax in your favorite chair.
              </p>
            </div>
            
            <div className="mt-8 flex items-center space-x-4">
              <div className="h-px bg-gray-200 flex-grow"></div>
              <span className="font-serif italic text-squared-dark">Squared Coffee Team</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;