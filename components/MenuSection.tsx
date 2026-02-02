import React, { useState } from 'react';
import { FULL_MENU, MENU_CATEGORIES } from '../constants';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);

  const activeItems = FULL_MENU.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-squared-light relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-squared-cyan/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-[0.2em] text-squared-cyan uppercase mb-3">
            Explore
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif text-squared-dark">
            Our Menu
          </h3>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto">
            Carefully curated dishes and beverages for every time of the day.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 overflow-x-auto pb-4 no-scrollbar">
          {MENU_CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 whitespace-nowrap ${
                activeCategory === category
                  ? 'bg-squared-dark text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-squared-dark border border-transparent hover:border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 min-h-[400px]">
          {activeItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] mb-4 bg-gray-100">
                <img 
                  src={item.image} 
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300"></div>
                {item.price && (
                  <div className="absolute top-4 right-4">
                    <span className="inline-block bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-squared-dark shadow-sm">
                      {item.price}
                    </span>
                  </div>
                )}
              </div>
              <div className="px-2 pb-2 flex-grow">
                <h4 className="text-xl font-serif font-bold text-squared-dark mb-2 leading-tight">{item.name}</h4>
                <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;