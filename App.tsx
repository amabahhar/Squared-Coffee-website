import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { LanguageProvider } from './contexts/LanguageContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { BrandProvider, useBrand } from './contexts/BrandContext';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import Locations from './components/Locations';
import SocialSection from './components/SocialSection';
import LoyaltySection from './components/LoyaltySection';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import OrderModal from './components/OrderModal';
import GeometricBackground from './components/GeometricBackground';
import BrandSwitcher from './components/BrandSwitcher';
import { PrecisionCoffeeLoader } from './components/ui/PrecisionCoffeeLoader';
import { MenuItem } from './types';
import { createFoodicsUrl } from './utils/string';

const AppContent: React.FC = () => {
  const { brand } = useBrand();
  const [isLoading, setIsLoading] = useState(true);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [targetOrderUrl, setTargetOrderUrl] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleOrderClick = () => {
    setTargetOrderUrl(null);
    setIsOrderModalOpen(true);
  };

  const handleProductClick = (item: MenuItem) => {
    if (item.foodicsId) {
      const url = createFoodicsUrl(item.foodicsId, item.name);
      setTargetOrderUrl(url);
      setIsOrderModalOpen(true);
    } else {
      setTargetOrderUrl(null);
      setIsOrderModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-white dark:bg-squared-black transition-colors duration-500">
      <AnimatePresence>
        {isLoading && <PrecisionCoffeeLoader key="loader" />}
      </AnimatePresence>

      <div className={isLoading ? "h-screen overflow-hidden" : ""}>
        {/* Background Wallpaper - Fixed on desktop, absolute on mobile for iOS performance */}
        <GeometricBackground />

        <div className="relative z-10">
          <Header onOrderClick={handleOrderClick} />
          <main>
            <Hero />
            <AboutSection />
            <MenuSection onItemClick={handleProductClick} />
            <Locations />
            <SocialSection />
            <LoyaltySection />
            <Testimonials />
          </main>
          <Footer />

          <OrderModal
            isOpen={isOrderModalOpen}
            onClose={() => setIsOrderModalOpen(false)}
            initialUrl={targetOrderUrl}
          />
          
          {/* Internal Demo Tool */}
          <BrandSwitcher />
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrandProvider>
          <AppContent />
        </BrandProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;