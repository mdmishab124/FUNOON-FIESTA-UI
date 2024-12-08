/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'vite';

export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D63C3E',
        secondery: '#E4E4E4',
      },
      fontFamily: {
        sans: ['Nexa', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      animation: {
        'loop-scroll': 'loop-scroll 25s linear infinite',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },         
    },
  },
  plugins: [],
  
}