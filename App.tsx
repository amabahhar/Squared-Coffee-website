import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import MenuSection from './components/MenuSection';
import Locations from './components/Locations';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <MenuSection />
        <Locations />
      </main>
      <Footer />
    </div>
  );
};

export default App;