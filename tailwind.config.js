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
                // Precision Lab Palette
                'squared-cyan': '#009FB8',
                'squared-cyan-light': '#33CEE6',
                'squared-cyan-dark': '#007A8F',

                // Strict Neutrals
                'squared-black': '#09090B', // Zinc-950
                'squared-gray-900': '#18181B', // Zinc-900
                'squared-gray-800': '#27272A', // Zinc-800
                'squared-gray-100': '#F4F4F5', // Zinc-100
                'squared-gray-50': '#FAFAFA', // Zinc-50
                'squared-white': '#FFFFFF',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace'],
                body: ['Roboto', 'sans-serif'],
            },
            borderRadius: {
                'xs': '2px',
                'sm': '4px',
                'md': '6px',
                'lg': '8px',
                // Avoid full rounded unless for buttons
            },
            boxShadow: {
                'precision': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                'precision-lg': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            },
        },
    },
    plugins: [],
}
