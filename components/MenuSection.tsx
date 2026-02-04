import { Plus } from 'lucide-react';
import React, { useState } from 'react';
import { FULL_MENU, MENU_CATEGORIES } from '../constants';
import { MenuItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface MenuSectionProps {
  onItemClick?: (item: MenuItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onItemClick }) => {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);
  const { t, language } = useLanguage();

  const activeItems = FULL_MENU.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-8 md:py-20 relative bg-transparent overflow-hidden">
      {/* Decorative Aurora - Optimized for mobile */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-squared-cyan/10 rounded-full pointer-events-none"
        style={{
          filter: 'blur(80px)',
          transform: 'translateZ(0)',
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="w-full lg:w-1/4 min-w-0">
            <div className="sticky top-24 md:top-32 glass p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-warm border border-white/30 overflow-hidden relative group min-h-[120px] flex items-center">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
              {/* Geometric Accents */}
              <div className="absolute -top-4 -right-4 opacity-10 pointer-events-none">
                <div className="w-16 h-16 border-2 border-squared-navy rounded-sm rotate-12"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 opacity-10 pointer-events-none">
                <div className="w-20 h-20 border-2 border-squared-navy/60 rounded-full"></div>
              </div>
              <span className={`hidden md:inline-block py-1 pr-8 border-b-2 border-squared-cyan/30 text-xs md:text-sm font-black tracking-[0.4em] text-squared-cyan uppercase mb-8 ${language === 'ar' ? 'font-arabic tracking-normal pl-8 pr-0' : ''}`}>
                {t.menu.eyebrow}
              </span>

              <div className="flex flex-row md:flex-col items-center md:items-start gap-4 overflow-x-auto overflow-y-hidden md:overflow-visible pb-0 md:pb-0 w-full -mx-6 px-6 md:mx-0 md:px-0" style={{ WebkitOverflowScrolling: 'touch' }}>
                {MENU_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex-shrink-0 w-auto md:w-full cursor-pointer text-left text-xs md:text-sm font-black uppercase tracking-wider transition-all duration-500 px-8 py-4 md:py-4 rounded-xl border whitespace-nowrap ${activeCategory === category
                      ? 'bg-squared-cyan text-white shadow-warm scale-[1.05] border-transparent'
                      : 'bg-white/40 md:bg-transparent text-squared-gray-600 border-transparent hover:border-white/20'
                      } ${language === 'ar' ? 'font-arabic tracking-normal text-right' : ''}`}
                  >
                    {t.menu.categories[category as keyof typeof t.menu.categories] || category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:flex-1 min-w-0">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-12 lg:gap-8">
              {activeItems.map((item, index) => {
                // Get translated item details if available, fallback to original
                const itemTrans = t.menu.items?.[item.id as keyof typeof t.menu.items];
                const displayName = itemTrans?.name || item.name;
                const displayDescription = itemTrans?.description || item.description;

                return (
                  <div
                    key={item.id}
                    onClick={() => onItemClick && onItemClick(item)}
                    className="cursor-pointer group glass-card rounded-2xl md:rounded-[2.5rem] p-3 md:p-6 hover:shadow-warm-lg transition-all duration-700 hover:-translate-y-2 animate-fade-in-up border border-white/40 hover:border-squared-cyan/30 flex flex-col h-full"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative overflow-hidden rounded-xl md:rounded-[2rem] aspect-[4/3] mb-3 md:mb-6 shadow-xl shrink-0">
                      <img
                        src={item.image}
                        alt={displayName}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-natural"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-700" />
                      <button aria-label="Add to order" className="hidden md:block absolute bottom-5 right-5 glass p-3.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 shadow-2xl border border-white/50 hover:scale-110 active:scale-95 bg-white/30 hover:bg-squared-cyan hover:border-transparent group/btn">
                        <Plus className="w-5 h-5 text-squared-gray-900 group-hover/btn:text-white transition-colors" />
                      </button>
                      {/* Mobile Plus Button - Always visible but small */}
                      <button aria-label="Add to order" className="md:hidden absolute bottom-2 right-2 glass p-1.5 rounded-full shadow-lg border border-white/50 bg-white/30 text-squared-gray-900">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="px-1 md:px-2 flex flex-col flex-grow">
                      <div className="flex justify-between items-start mb-1 md:mb-3">
                        <h4 className={`text-sm md:text-2xl font-serif font-black text-squared-gray-900 group-hover:text-squared-cyan transition-colors duration-500 tracking-tight leading-tight line-clamp-2 ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>{displayName}</h4>
                        <span className={`shrink-0 text-[10px] md:text-sm font-black text-squared-cyan glass border border-squared-cyan/30 px-2 py-0.5 md:px-3.5 md:py-1.5 rounded-full shadow-inner bg-squared-cyan/5 ml-1.5 md:ml-2 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>{item.price}</span>
                      </div>
                      <p className={`text-[10px] md:text-sm text-squared-gray-600 font-sans leading-relaxed line-clamp-2 font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
                        {displayDescription}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;