import { Plus, ChevronUp, ChevronDown } from 'lucide-react';
import React, { useState, useCallback, useRef } from 'react';
import { FULL_MENU, MENU_CATEGORIES } from '../constants';
import { MenuItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface MenuSectionProps {
  onItemClick?: (item: MenuItem) => void;
}

const MenuSection: React.FC<MenuSectionProps> = ({ onItemClick }) => {
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const animatingRef = useRef(false);
  const gridContainerRef = useRef<HTMLDivElement>(null);
  const gridContainerMobileRef = useRef<HTMLDivElement>(null);
  const touchStartYRef = useRef<number | null>(null);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const { t, language } = useLanguage();

  // Handle responsive items count
  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth < 1024 ? 4 : 6);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const activeItems = FULL_MENU.filter(item => item.category === activeCategory);
  const totalPages = Math.ceil(activeItems.length / itemsPerPage);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentPage(0);
    animatingRef.current = false;
  };

  const handleNextPage = useCallback(() => {
    if (currentPage < totalPages - 1 && !animatingRef.current) {
      animatingRef.current = true;
      setCurrentPage(prev => prev + 1);
      setTimeout(() => {
        animatingRef.current = false;
      }, 300); // Allow rapid navigation with a small cooldown
    }
  }, [currentPage, totalPages]);

  const handlePrevPage = useCallback(() => {
    if (currentPage > 0 && !animatingRef.current) {
      animatingRef.current = true;
      setCurrentPage(prev => prev - 1);
      setTimeout(() => {
        animatingRef.current = false;
      }, 300); // Allow rapid navigation with a small cooldown
    }
  }, [currentPage]);

  // Use native listener to support non-passive e.preventDefault()
  React.useEffect(() => {
    const desktopContainer = gridContainerRef.current;
    const mobileContainer = gridContainerMobileRef.current;

    const handleNativeWheel = (e: WheelEvent) => {
      if (window.innerWidth < 1024) return;

      // If we are currently animating, lock the scroll to the menu (swallow it)
      if (animatingRef.current) {
        e.preventDefault();
        return;
      }

      const isScrollingDown = e.deltaY > 0;
      const isScrollingUp = e.deltaY < 0;

      // Determine if we have room to move in the desired direction
      const canMoveDown = isScrollingDown && currentPage < totalPages - 1;
      const canMoveUp = isScrollingUp && currentPage > 0;

      // If we have room to move, prevent page scroll IMMEDIATELY
      // This stops the browser from initiating a body scroll gesture even for tiny moves
      if (canMoveDown || canMoveUp) {
        e.preventDefault();

        // Only trigger the change if the movement is significant enough
        if (Math.abs(e.deltaY) >= 10) {
          if (isScrollingDown) handleNextPage();
          else handlePrevPage();
        }
      }
      // If we are at boundaries and scrolling OUT, allow native page scroll (don't preventDefault)
    };

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartYRef.current === null || animatingRef.current) return;

      const touchY = e.touches[0].clientY;
      const deltaY = touchStartYRef.current - touchY;

      const isScrollingDown = deltaY > 0;
      const isScrollingUp = deltaY < 0;
      const canMoveDown = isScrollingDown && currentPage < totalPages - 1;
      const canMoveUp = isScrollingUp && currentPage > 0;

      // If we are moving within menu boundaries, prevent page scroll
      if (canMoveDown || canMoveUp) {
        e.preventDefault();

        // Trigger page change on significant swipe
        if (Math.abs(deltaY) > 50) {
          if (isScrollingDown) handleNextPage();
          else handlePrevPage();
          touchStartYRef.current = null; // Reset to avoid multiple triggers
        }
      }
    };

    if (desktopContainer) desktopContainer.addEventListener('wheel', handleNativeWheel, { passive: false });
    if (mobileContainer) {
      mobileContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
      mobileContainer.addEventListener('touchmove', handleTouchMove, { passive: false });
    }

    return () => {
      if (desktopContainer) desktopContainer.removeEventListener('wheel', handleNativeWheel);
      if (mobileContainer) {
        mobileContainer.removeEventListener('touchstart', handleTouchStart);
        mobileContainer.removeEventListener('touchmove', handleTouchMove);
      }
    };
  }, [currentPage, totalPages, handleNextPage, handlePrevPage]);


  return (
    <section id="menu" className="py-8 md:py-12 relative bg-transparent overflow-hidden">
      {/* Decorative Aurora - Optimized for mobile */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-squared-cyan/10 rounded-full pointer-events-none"
        style={{
          filter: 'blur(80px)',
          transform: 'translateZ(0)',
        }}
      ></div>


      <div className="container mx-auto px-4 md:px-12 relative z-10">
        <div className="lg:hidden glass p-6 rounded-[2rem] shadow-2xl border border-white/30 dark:border-white/10 overflow-hidden transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

          {/* Mobile Title */}
          <div className="text-center mb-4 relative z-10">
            <span className={`inline-block py-1 px-6 border-b-2 border-squared-cyan/30 text-xs md:text-sm font-black tracking-[0.4em] text-squared-cyan uppercase ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
              {t.menu.eyebrow}
            </span>
          </div>

          {/* Horizontal Scroll Categories */}
          <div className="relative z-10 mb-8">
            {/* Scroll indicator hint */}
            <div className="flex items-center gap-2 mb-3 px-2">
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-squared-cyan/20 to-transparent"></div>
              <span className="text-[10px] text-squared-cyan/60 font-black uppercase tracking-wider">Swipe to explore</span>
              <div className="h-0.5 flex-1 bg-gradient-to-r from-transparent via-squared-cyan/20 to-transparent"></div>
            </div>

            <div
              className="horizontal-scroll flex flex-row items-center gap-2 overflow-x-auto py-4 px-1 scrollbar-hide bg-white/20 dark:bg-white/5 rounded-2xl border border-white/30 dark:border-white/10 transition-colors duration-500 snap-x snap-mandatory"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {MENU_CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`flex-shrink-0 w-[calc(50%-4px)] snap-start cursor-pointer text-center text-[10px] font-black uppercase tracking-wider transition-all duration-500 px-2 py-3.5 rounded-xl border border-transparent whitespace-nowrap overflow-hidden text-ellipsis ${activeCategory === category
                    ? 'bg-squared-cyan text-white shadow-2xl scale-[1.02]'
                    : 'bg-white/40 dark:bg-white/10 text-squared-brown-light dark:text-white/70 hover:bg-white/50'
                    } ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}
                >
                  {t.menu.categories[category as keyof typeof t.menu.categories] || category}
                </button>
              ))}
            </div>
          </div>

          {/* Menu Items Grid Windowed */}
          <div className="relative z-10 py-8">
            {/* Mobile Scroll Indicator Arrows */}
            <div className={`absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-500 z-20 ${currentPage > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <button onClick={handlePrevPage} className="p-1.5 glass rounded-full hover:bg-squared-cyan hover:text-white transition-all animate-bounce">
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>

            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 transition-all duration-500 z-20 ${currentPage < totalPages - 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
              <button onClick={handleNextPage} className="p-1.5 glass rounded-full hover:bg-squared-cyan hover:text-white transition-all animate-bounce">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            <div className="h-[460px] overflow-hidden" ref={gridContainerMobileRef}>
              <div
                className="grid grid-cols-2 gap-3 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform"
                style={{ transform: `translateY(calc(-${currentPage} * 460px))` }}
              >
                {activeItems.map((item, index) => {
                  const itemTrans = t.menu.items?.[item.id as keyof typeof t.menu.items];
                  const displayName = itemTrans?.name || item.name;
                  const displayDescription = itemTrans?.description || item.description;

                  return (
                    <div
                      key={item.id}
                      onClick={() => onItemClick && onItemClick(item)}
                      className="cursor-pointer group bg-white/40 dark:bg-white/5 rounded-2xl p-3 hover:bg-white/60 dark:hover:bg-white/10 transition-all duration-700 hover:-translate-y-1 border border-white/40 dark:border-white/10 hover:border-squared-cyan/30 flex flex-col h-[220px]"
                    >
                      <div className="relative overflow-hidden rounded-xl aspect-[4/3] mb-3 shadow-lg shrink-0">
                        <img
                          src={item.image}
                          alt={displayName}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <button
                          className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/90 dark:bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg hover:bg-squared-cyan hover:text-white transition-all duration-300"
                          onClick={(e) => {
                            e.stopPropagation();
                            onItemClick && onItemClick(item);
                          }}
                        >
                          <Plus className="w-4 h-4 text-squared-brown-dark" />
                        </button>
                      </div>
                      <div className="flex-1 flex flex-col min-h-0">
                        <div className="flex items-start justify-between gap-1 mb-1">
                          <h3 className={`text-[11px] font-black text-squared-brown-dark dark:text-white leading-tight truncate ${language === 'ar' ? 'font-arabic' : ''}`}>
                            {displayName}
                          </h3>
                          <span className="text-[10px] font-black text-squared-cyan whitespace-nowrap">
                            {item.price}
                          </span>
                        </div>
                        <p className={`text-[10px] text-squared-brown-light dark:text-white/60 leading-relaxed line-clamp-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
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

        {/* Desktop: Unified Glass Container */}
        <div className="hidden lg:block glass p-12 md:p-16 rounded-[2.5rem] md:rounded-[4rem] max-w-7xl mx-auto border border-white/30 dark:border-white/10 shadow-2xl relative overflow-hidden group backdrop-blur-md transition-colors duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

          {/* Geometric Accents */}
          <div className="absolute top-12 right-12 opacity-15 pointer-events-none group-hover:opacity-30 transition-all duration-700 -rotate-12">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 border-2 border-squared-navy dark:border-white/20 rounded-sm"></div>
              <div className="absolute inset-6 border-2 border-squared-cyan/60 rounded-sm"></div>
            </div>
          </div>
          <div className="absolute bottom-16 left-12 opacity-15 pointer-events-none group-hover:opacity-30 transition-all duration-700 rotate-12">
            <div className="w-40 h-20 overflow-hidden">
              <div className="w-40 h-40 border-2 border-squared-navy dark:border-white/20 rounded-full"></div>
            </div>
          </div>

          <div className="relative z-10">
            {/* Section Header */}
            <div className="mb-12">
              <span className={`inline-block py-1 pr-8 border-b-2 border-squared-cyan/30 text-xs md:text-sm font-black tracking-[0.4em] text-squared-cyan uppercase ${language === 'ar' ? 'font-arabic tracking-normal pl-8 pr-0' : ''}`}>
                {t.menu.eyebrow}
              </span>
            </div>

            <div className="flex flex-row gap-16 items-stretch h-[800px]">
              {/* Sidebar Category List */}
              <div className="w-1/4 min-w-0">
                <div className="sticky top-0 flex flex-col items-start gap-4 h-full">
                  {MENU_CATEGORIES.map((category) => (
                    <button
                      key={category}
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full cursor-pointer text-left text-sm font-black uppercase tracking-wider transition-all duration-500 py-3 px-4 rounded-xl border border-transparent ${activeCategory === category
                        ? 'text-squared-cyan bg-squared-cyan/5 scale-[1.02] border-squared-cyan/10 ring-1 ring-squared-cyan/20'
                        : 'text-squared-brown-light dark:text-white/70 hover:bg-white/10 dark:hover:bg-white/5'
                        } ${language === 'ar' ? 'font-arabic tracking-normal text-right' : ''}`}
                    >
                      {t.menu.categories[category as keyof typeof t.menu.categories] || category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Items Grid Window */}
              <div className="flex-1 min-w-0 flex flex-col relative" ref={gridContainerRef}>
                {/* Scroll Indicator Arrows */}
                <div className={`absolute -top-12 left-1/2 -translate-x-1/2 transition-all duration-500 z-20 ${currentPage > 0 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <button onClick={handlePrevPage} className="p-2 glass rounded-full hover:bg-squared-cyan hover:text-white transition-all animate-bounce">
                    <ChevronUp className="w-5 h-5" />
                  </button>
                </div>

                <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 transition-all duration-500 z-20 ${currentPage < totalPages - 1 ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <button onClick={handleNextPage} className="p-2 glass rounded-full hover:bg-squared-cyan hover:text-white transition-all animate-bounce">
                    <ChevronDown className="w-5 h-5" />
                  </button>
                </div>

                <div className="h-full overflow-hidden">
                  <div
                    className="grid grid-cols-2 xl:grid-cols-3 gap-8 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] will-change-transform"
                    style={{ transform: `translateY(calc(-${currentPage} * 800px))` }}
                  >
                    {activeItems.map((item, index) => {
                      const itemTrans = t.menu.items?.[item.id as keyof typeof t.menu.items];
                      const displayName = itemTrans?.name || item.name;
                      const displayDescription = itemTrans?.description || item.description;

                      return (
                        <div
                          key={item.id}
                          onClick={() => onItemClick && onItemClick(item)}
                          className="cursor-pointer group flex flex-col h-[380px] bg-white/20 dark:bg-white/5 rounded-[2.5rem] p-5 hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-700 hover:-translate-y-2 border border-white/20 dark:border-white/10 hover:border-squared-cyan/30"
                        >
                          <div className="relative overflow-hidden rounded-[2rem] aspect-[4/3] mb-6 shadow-xl shrink-0">
                            <img
                              src={item.image}
                              alt={displayName}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                            />
                            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-700" />
                            <button
                              aria-label="Add to order"
                              className="absolute bottom-4 right-4 glass p-3 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 shadow-2xl border border-white/50 bg-white/30 hover:bg-squared-cyan hover:border-transparent group/btn"
                              onClick={(e) => {
                                e.stopPropagation();
                                onItemClick && onItemClick(item);
                              }}
                            >
                              <Plus className="w-5 h-5 text-squared-brown-dark dark:text-white group-hover/btn:text-white transition-colors" />
                            </button>
                          </div>

                          <div className="px-2 flex flex-col flex-grow">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className={`text-2xl font-serif font-black text-squared-brown-dark dark:text-white group-hover:text-squared-cyan transition-colors duration-500 tracking-tight leading-tight line-clamp-2 ${language === 'ar' ? 'font-arabic font-bold' : ''}`}>
                                {displayName}
                              </h4>
                              <span className={`shrink-0 text-sm font-black text-squared-cyan px-3 py-1.5 rounded-full border border-squared-cyan/30 bg-squared-cyan/5 ml-2 transition-colors duration-500 ${language === 'ar' ? 'font-arabic tracking-normal' : ''}`}>
                                {item.price}
                              </span>
                            </div>
                            <p className={`text-sm text-squared-brown-light dark:text-white/60 font-sans leading-relaxed line-clamp-2 font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-500 ${language === 'ar' ? 'font-arabic' : ''}`}>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;