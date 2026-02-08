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
    <section id="menu" className="py-24 bg-squared-white dark:bg-squared-black border-t border-squared-gray-100 dark:border-squared-gray-800 relative">
      {/* Background Grid - Hero Style */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px),
                           linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      <div className="container mx-auto px-6 relative z-10">

        {/* Header: Spec Sheet Style */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-squared-black dark:border-squared-white pb-6">
          <div>
            <span className="block text-xs font-mono text-squared-cyan mb-2">REF: M-2026.01</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase text-squared-black dark:text-squared-white tracking-tight">
              {t.menu.eyebrow}
            </h2>
          </div>
          <p className="text-right text-xs font-mono text-squared-gray-800 dark:text-squared-gray-100 mt-4 md:mt-0 max-w-xs">
            Precision-crafted beverages using 100% Arabica beans sourced from sustainable micro-lots.
          </p>
        </div>

        {/* Filter Controls - Toggle Switch Style */}
        <div className="mb-12 overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex bg-squared-gray-100 dark:bg-squared-gray-900 p-1.5 rounded-sm inline-flex min-w-full md:min-w-0">
            {MENU_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-1 px-6 py-2.5 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-sm whitespace-nowrap ${activeCategory === category
                  ? 'bg-squared-white dark:bg-squared-gray-800 text-squared-black dark:text-squared-white shadow-sm'
                  : 'text-squared-gray-400 hover:text-squared-black dark:hover:text-squared-white'
                  } ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}
              >
                {t.menu.categories[category as keyof typeof t.menu.categories] || category}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Data Grid (List View) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-0">
          {activeItems.map((item, index) => {
            const itemTrans = t.menu.items?.[item.id as keyof typeof t.menu.items];
            const displayName = itemTrans?.name || item.name;
            const displayDescription = itemTrans?.description || item.description;

            return (
              <div
                key={item.id}
                onClick={() => onItemClick && onItemClick(item)}
                className="group flex items-start gap-4 py-6 border-b border-squared-gray-200 dark:border-squared-gray-800 cursor-pointer hover:bg-squared-gray-100 dark:hover:bg-squared-gray-900/50 transition-colors duration-200 px-2 -mx-2"
              >
                {/* Image Thumbnail - Small & Sharp */}
                <div className="w-16 h-16 bg-squared-gray-200 overflow-hidden shrink-0 relative">
                  <img
                    src={item.image}
                    alt={displayName}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-squared-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className={`text-lg font-bold text-squared-black dark:text-squared-white uppercase tracking-tight ${language === 'ar' ? 'font-arabic' : ''}`}>
                      {displayName}
                    </h3>
                    <span className="font-mono text-sm md:text-base text-squared-cyan font-bold tabular-nums">
                      {item.price}
                    </span>
                  </div>

                  <p className={`text-sm text-squared-gray-500 dark:text-squared-gray-400 line-clamp-2 max-w-[90%] leading-relaxed ${language === 'ar' ? 'font-arabic' : ''}`}
                  >
                    {displayDescription}
                  </p>
                </div>

                <button className="self-center p-2 text-squared-gray-300 group-hover:text-squared-cyan transition-colors">
                  <Plus size={18} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;