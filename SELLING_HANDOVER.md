# White-Label Template Handover Document

This project has been architected as a premium white-label template for specialty coffee shops and boutique cafes. It uses a dynamic **BrandProvider** system that allows you to rebrand the entire website in seconds without touching the core component logic.

## 🚀 Quick Setup

To configure a new brand, follow these steps:

### 1. Define the Brand Configuration
Open `brand.config.ts` and add a new entry to the `BRAND_PRESETS` object:

```typescript
export const BRAND_PRESETS: Record<string, BrandConfig> = {
  // ... existing presets
  'your-brand-id': {
    id: 'your-brand-id',
    name: 'Your Brand Name',
    legalName: 'Your Brand Company LLC',
    logo: {
      text: 'BRAND',
      symbol: '^2', // Or any technical accent
    },
    colors: {
      primary: '#XXXXXX', // Your brand primary color
    },
    integrations: {
      foodicsMenuId: 'XXXXX', // From your Foodics dashboard
      loopyLoyaltyCampaignId: 'XXXXXX', // From Loopy Loyalty
      loopyLoyaltyEnrolUrl: 'https://api.loopyloyalty.com/v1/enrol/XXXXXX',
    },
    social: {
      instagram: 'https://instagram.com/yourbrand',
    },
  },
};
```

### 2. Set the Active Brand
In `App.tsx`, change the `initialBrandId` prop of the `BrandProvider`:

```tsx
<BrandProvider initialBrandId="your-brand-id">
  <AppContent />
</BrandProvider>
```

## 🏗️ Technical Architecture

### Dynamic Styling (Tailwind + CSS Variables)
The `BrandProvider` injects your brand's primary color into a CSS variable `--brand-primary`. Tailwind is configured to map `bg-brand-primary`, `text-brand-primary`, and `border-brand-primary` to this variable.
*   **Real-time Rebranding:** Changing the brand in the config immediately updates all buttons, accents, and highlights across the site.

### Localized Assets
All images used in the template (Menu items, Social previews) are stored locally in `public/assets/`. To replace them:
1.  Add your images to `public/assets/menu/` or `public/assets/social/`.
2.  Update the paths in `constants.ts`.

### Components
*   **Logo.tsx:** Automatically adjusts based on the brand's logo text and symbol.
*   **OrderModal.tsx:** Dynamically builds the Foodics ordering URL.
*   **LoyaltySection.tsx:** Connects to your specific Loopy Loyalty campaign.

## 🛠️ Demo Tools
A **Brand Switcher** is included in the bottom right corner for previewing different configurations. **Note:** Remove `<BrandSwitcher />` from `App.tsx` before deploying to production for a specific client.

## 📄 License & Sale
This template is ready for sale. When selling to a client:
1.  Configure their brand in `brand.config.ts`.
2.  Remove the `BrandSwitcher` component.
3.  Deploy the bundled `dist/` folder.
