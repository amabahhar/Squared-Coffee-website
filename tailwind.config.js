/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./contexts/**/*.{js,ts,jsx,tsx}",
        "./utils/**/*.{js,ts,jsx,tsx}",
        "./App.tsx",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                // Dynamic Brand Palette
                'brand-primary': 'var(--brand-primary)',
                'brand-primary-hover': 'var(--brand-primary-hover)',
                'brand-primary-dark': 'var(--brand-primary-dark)',
                'brand-primary-muted': 'var(--brand-primary-muted)',
                'brand-background': 'var(--brand-background)',
                'brand-surface': 'var(--brand-surface)',
                'brand-text': 'var(--brand-text)',

                // Legacy Squared Palette (aliased to brand colors for now)
                'squared-cyan': 'var(--brand-primary)',
                'squared-cyan-light': 'var(--brand-primary-light)',

                // Full Zinc-based Neutral Scale
                'squared-black': '#09090B',   // Zinc-950
                'squared-gray-950': '#09090B', // Zinc-950 alias
                'squared-gray-900': '#18181B', // Zinc-900
                'squared-gray-800': '#27272A', // Zinc-800
                'squared-gray-700': '#3F3F46', // Zinc-700
                'squared-gray-600': '#52525B', // Zinc-600
                'squared-gray-500': '#71717A', // Zinc-500
                'squared-gray-400': '#A1A1AA', // Zinc-400
                'squared-gray-300': '#D4D4D8', // Zinc-300
                'squared-gray-200': '#E4E4E7', // Zinc-200
                'squared-gray-100': '#F4F4F5', // Zinc-100
                'squared-gray-50': '#FAFAFA',  // Zinc-50
                'squared-white': '#FFFFFF',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
                mono: ['Roboto Mono', 'monospace'],
                arabic: ['Cairo', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            keyframes: {
                blob: {
                    "0%": { transform: "translate(0px, 0px) scale(1)" },
                    "33%": { transform: "translate(20px, -30px) scale(1.05)" },
                    "66%": { transform: "translate(-15px, 15px) scale(0.95)" },
                    "100%": { transform: "translate(0px, 0px) scale(1)" },
                },
                fadeIn: {
                    "0%": { opacity: "0", transform: "translateY(10px)" },
                    "100%": { opacity: "1", transform: "translateY(0)" },
                },
            },
            animation: {
                blob: "blob 12s infinite",
                "fade-in": "fadeIn 0.5s ease-out forwards",
            },
            borderRadius: {
                'xs': '2px',
                'sm': '4px',
                'md': '6px',
                'lg': '8px',
            },
            boxShadow: {
                'precision': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                'precision-lg': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
        },
    },
    plugins: [],
}
