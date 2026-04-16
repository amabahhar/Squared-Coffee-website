import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
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
import { PrecisionCoffeeLoader } from './components/ui/PrecisionCoffeeLoader';
import { MenuItem } from './types';
import { useTheme } from './contexts/ThemeContext';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [targetOrderUrl, setTargetOrderUrl] = useState<string | null>(null);
  const { isDarkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleOrderClick = () => {
    setTargetOrderUrl(null); // Open main menu
    setIsOrderModalOpen(true);
  };

  const handleProductClick = (item: MenuItem) => {
    if (item.foodicsId) {
      // Construct deep link URL
      // Format: /ID-Slug
      // We create a safe slug from the name
      const slug = item.name.toLowerCase()
        .replace(/\+/g, 'plus') // handle '+' signs explicitly e.g. "Club + Chips"
        .replace(/ /g, '-')
        .replace(/[^\w\u0600-\u06FF-]+/g, ''); // Keep alphanumeric and Arabic chars, remove others

      const url = `https://squared-coffee.foodics.online/menu/-226471/${item.foodicsId}-${slug}`;
      setTargetOrderUrl(url);
      setIsOrderModalOpen(true);
    } else {
      // Fallback: Open main menu if no specific ID is linked yet
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
          <Header onOrderClick={handleOrderClick} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <main>
            <Hero />
            <AboutSection />
            <MenuSection onItemClick={handleProductClick} isDarkMode={isDarkMode} />
            <Locations isDarkMode={isDarkMode} />
            <SocialSection isDarkMode={isDarkMode} />
            <LoyaltySection isDarkMode={isDarkMode} />
            <Testimonials isDarkMode={isDarkMode} />
          </main>
          <Footer />

          <OrderModal
            isOpen={isOrderModalOpen}
            onClose={() => setIsOrderModalOpen(false)}
            initialUrl={targetOrderUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default App;