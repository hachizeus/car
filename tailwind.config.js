/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#2a2a2a',
        accent: {
          DEFAULT: '#d4af37',
          light: '#f4cf57',
          dark: '#b48f17'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Playfair Display', 'serif']
      },
      height: {
        screen: '100dvh'
      }
    },
  },
  plugins: [],
};