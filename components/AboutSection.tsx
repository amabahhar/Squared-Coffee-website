import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="story" className="py-8 md:py-20 relative overflow-hidden">
      {/* Aurora Background for Glass Effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-squared-cyan/20 blur-[120px] rounded-full animate-blob"></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Image Grid - Editorial Style (Desktop Only) */}
          <div className="relative group hidden md:block">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-10 md:col-span-8 z-0">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=800"
                  alt="Coffee Brewing"
                  className="rounded-3xl w-full aspect-[4/5] object-cover shadow-2xl hover:scale-[1.02] transition-all duration-700"
                />
              </div>
              <div className="col-span-7 md:col-span-6 -mt-20 md:-mt-32 ml-auto relative z-10">
                <div className="p-2 glass-card rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600"
                    alt="Cafe Atmosphere"
                    className="rounded-2xl w-full aspect-square object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="glass-card p-6 md:p-10 rounded-[2.5rem] shadow-warm-lg border border-white/40 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-squared-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

            <div className="relative z-10">
              <span className="inline-block py-1 pr-12 border-b-2 border-squared-cyan/40 text-[10px] font-black tracking-[0.6em] text-squared-cyan uppercase mb-10 md:mb-14 animate-fade-in">
                The Squared Ethos
              </span>

              {/* Mobile Embedded Images (Float Style) */}
              <div className="md:hidden float-right ml-8 mb-2 w-32 relative z-20 pointer-events-none">
                <img
                  src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=400"
                  alt="Coffee Brewing"
                  className="rounded-2xl w-32 aspect-[4/5] object-cover shadow-lg mb-4 transform rotate-2"
                />
                <div className="p-1 glass-card rounded-xl shadow-lg w-20 absolute -bottom-4 -left-5 transform -rotate-3">
                  <img
                    src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=300"
                    alt="Cafe Atmosphere"
                    className="rounded-lg w-full aspect-square object-cover"
                  />
                </div>
              </div>

              <h2 className="text-3xl md:text-5xl font-serif text-squared-gray-900 mb-6 md:mb-8 leading-[1.1] font-black tracking-tight">
                More than just<br /> <span className="text-squared-cyan">a coffee shop.</span>
              </h2>

              <div className="space-y-6 text-squared-gray-800 font-sans leading-relaxed text-sm md:text-base max-w-xl font-medium opacity-90">
                <p>
                  Whether you drop by for a delicious cup of coffee, a homemade pastry, a kick-start breakfast, or a delicious lunch: the door of Squared Coffee is wide open for you.
                </p>
                <p>
                  As soon as you step over the threshold, you are home. The café radiates peace, warmth, and domesticity.
                </p>
                <p>
                  It is the ultimate place to have a chat, open a good book, study quietly, or just relax in your favorite chair. We believe in the perfect equation of taste, comfort, and community.
                </p>
              </div>

              <div className="mt-8 md:mt-12 pt-8 border-t border-squared-gray-900/10 flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-0">
                <div className="text-center md:text-left">
                  <span className="block text-[10px] font-black tracking-[0.4em] uppercase text-squared-cyan mb-2">Since 2024</span>
                  <span className="font-serif italic text-squared-gray-900 text-xl font-black tracking-tight">The Squared Team</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;