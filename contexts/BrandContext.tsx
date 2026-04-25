import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { BrandConfig, BRAND_PRESETS, SQUARED_COFFEE } from '../brand.config';

interface BrandContextType {
  brand: BrandConfig;
  setBrandById: (id: string) => void;
  updateBrandColors: (newColors: Partial<BrandConfig['colors']>) => void;
  availablePresets: string[];
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Check localStorage for saved brand, default to 'squared-coffee'
  const [activeBrandId, setActiveBrandId] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('active-brand-id') || 'squared-coffee';
    }
    return 'squared-coffee';
  });

  const [brand, setBrand] = useState<BrandConfig>(
    BRAND_PRESETS[activeBrandId] || SQUARED_COFFEE
  );

  const setBrandById = (id: string) => {
    if (BRAND_PRESETS[id]) {
        setActiveBrandId(id);
        const newBrand = BRAND_PRESETS[id];
        setBrand(newBrand);
        localStorage.setItem('active-brand-id', id);
        // Clear custom overrides when switching presets
        localStorage.removeItem('custom-brand-colors');
    }
  };

  const updateBrandColors = (newColors: Partial<BrandConfig['colors']>) => {
    setBrand(prev => {
      const updated = {
        ...prev,
        colors: { ...prev.colors, ...newColors }
      };
      localStorage.setItem('custom-brand-colors', JSON.stringify(updated.colors));
      return updated;
    });
  };

  useEffect(() => {
    // Load custom colors from localStorage if they exist
    const savedColors = localStorage.getItem('custom-brand-colors');
    if (savedColors) {
      try {
        const colors = JSON.parse(savedColors);
        setBrand(prev => ({ ...prev, colors: { ...prev.colors, ...colors } }));
      } catch (e) {
        console.error('Failed to load custom colors', e);
      }
    }
  }, []);

  useEffect(() => {
    // Apply CSS Variables to :root
    const root = document.documentElement;
    const { colors } = brand;
    root.style.setProperty('--brand-primary', colors.primary);
    root.style.setProperty('--brand-primary-hover', colors.primaryHover);
    root.style.setProperty('--brand-primary-dark', colors.primaryDark);
    root.style.setProperty('--brand-primary-muted', colors.primaryMuted);
    root.style.setProperty('--brand-background', colors.background);
    root.style.setProperty('--brand-surface', colors.surface);
    root.style.setProperty('--brand-text', colors.text);
    
    // Update Document Title
    document.title = brand.name + " | Technical Precision";
  }, [brand]);

  return (
    <BrandContext.Provider value={{ 
      brand, 
      setBrandById, 
      updateBrandColors,
      availablePresets: Object.keys(BRAND_PRESETS) 
    }}>
      {children}
    </BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error('useBrand must be used within a BrandProvider');
  }
  return context;
};
