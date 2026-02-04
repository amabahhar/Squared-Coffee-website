import React, { useState } from 'react';
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
import { MenuItem } from './types';

const App: React.FC = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [targetOrderUrl, setTargetOrderUrl] = useState<string | null>(null);

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
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Wallpaper - Fixed on desktop, absolute on mobile for iOS performance */}
      <div
        className="desktop-bg-fixed z-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&q=80&w=2000")',
          transform: 'translateZ(0)',
        }}
      >
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-squared-cream/10"></div>
      </div>

      {/* Aurora Background Effects - Optimized blur for mobile */}
      <div
        className="desktop-bg-fixed top-[-5%] right-[-5%] w-[70%] h-[70%] bg-squared-cyan/15 rounded-full pointer-events-none z-0 lg:animate-blob"
        style={{
          filter: 'blur(25px)',
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      ></div>
      <div
        className="desktop-bg-fixed bottom-[-5%] left-[-5%] w-[60%] h-[60%] bg-white/20 rounded-full pointer-events-none z-0 lg:animate-blob"
        style={{
          animationDelay: '3s',
          filter: 'blur(20px)',
          transform: 'translateZ(0)',
          willChange: 'transform'
        }}
      ></div>
      <div
        className="desktop-bg-fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-squared-cyan/5 rounded-full pointer-events-none z-0"
        style={{
          filter: 'blur(15px)',
          transform: 'translate(-50%, -50%) translateZ(0)',
          willChange: 'transform'
        }}
      ></div>

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
      </div>
    </div>
  );
};

export default App;