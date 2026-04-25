export interface BrandConfig {
  id: string;
  name: string;
  legalName: string;
  logoText: {
    top: string;
    bottom: string;
    symbol: string;
  };
  colors: {
    primary: string;      // Used for accents, buttons
    primaryHover: string; // Used for hover states
    primaryDark: string;  // Used for gradients
    primaryMuted: string; // Used for subtle accents (bg-primary/20)
    background: string;   // Main dark background
    surface: string;      // Light mode surface / cards
    text: string;         // Main text color
  };
  integrations: {
    foodicsMenuUrl: string;
    loopyLoyaltyCampaignId: string;
    loopyLoyaltyEnrolUrl: string;
  };
  social: {
    instagram: string;
    twitter?: string;
    facebook?: string;
  };
  contact: {
    email: string;
    address: string;
    mapUrl: string;
  };
}

export const SQUARED_COFFEE: BrandConfig = {
  id: 'squared-coffee',
  name: 'Squared Coffee',
  legalName: 'Squared Coffee Specialty',
  logoText: {
    top: 'Squared',
    bottom: 'Coffee',
    symbol: '^2'
  },
  colors: {
    primary: '#009FB8',
    primaryHover: '#33CEE6',
    primaryDark: '#007A8D',
    primaryMuted: 'rgba(0, 159, 184, 0.2)',
    background: '#09090B',
    surface: '#FFFFFF',
    text: '#FFFFFF',
  },
  integrations: {
    foodicsMenuUrl: 'https://squared-coffee.foodics.online/menu/-226471',
    loopyLoyaltyCampaignId: '1rmMhxhNM13OIXfFWJOxKU',
    loopyLoyaltyEnrolUrl: 'https://api.loopyloyalty.com/v1/enrol/1rmMhxhNM13OIXfFWJOxKU',
  },
  social: {
    instagram: 'https://instagram.com/squaredcoffee',
  },
  contact: {
    email: 'hello@squaredcoffee.com',
    address: 'King Abdulaziz Street, Al Shatea, Qatif',
    mapUrl: 'https://maps.google.com/?q=Squared+Coffee+Qatif'
  }
};

export const PRECISION_LAB_TEMPLATE: BrandConfig = {
  id: 'precision-lab',
  name: 'Precision Lab',
  legalName: 'Precision Lab Coffee Roasters',
  logoText: {
    top: 'Precision',
    bottom: 'Lab',
    symbol: 'PL'
  },
  colors: {
    primary: '#10B981', // Emerald 500
    primaryHover: '#34D399', // Emerald 400
    primaryDark: '#059669', // Emerald 600
    primaryMuted: 'rgba(16, 185, 129, 0.2)',
    background: '#0F172A', // Slate 900
    surface: '#F8FAFC',
    text: '#F8FAFC',
  },
  integrations: {
    foodicsMenuUrl: 'https://demo.foodics.online/',
    loopyLoyaltyCampaignId: 'demo-campaign-id',
    loopyLoyaltyEnrolUrl: 'https://api.loopyloyalty.com/v1/enrol/demo',
  },
  social: {
    instagram: 'https://instagram.com/precisionlab',
  },
  contact: {
    email: 'info@precisionlab.example',
    address: 'Scientific Way, Innovation District',
    mapUrl: '#'
  }
};

export const BRAND_PRESETS: Record<string, BrandConfig> = {
  'squared-coffee': SQUARED_COFFEE,
  'precision-lab': PRECISION_LAB_TEMPLATE,
};
