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
                'squared-logo': '#00C2E0',

                // Strict Neutrals
                'squared-black': '#09090B', // Zinc-950
                'squared-gray-950': '#09090B',
                'squared-gray-900': '#18181B',
                'squared-gray-800': '#27272A',
                'squared-gray-700': '#3F3F46',
                'squared-gray-600': '#52525B',
                'squared-gray-500': '#71717A',
                'squared-gray-400': '#A1A1AA',
                'squared-gray-300': '#D4D4D8',
                'squared-gray-200': '#E4E4E7',
                'squared-gray-100': '#F4F4F5',
                'squared-gray-50': '#FAFAFA',
                'squared-white': '#FFFFFF',

                // Text legacy mappings
                'squared-brown-dark': '#111827',
                'squared-brown-light': '#4B5563',
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
