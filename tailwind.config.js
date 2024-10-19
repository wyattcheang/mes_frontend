/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#FFE7D5', // Lightest shade
          200: '#FFC3A3', // Very light shade
          300: '#FFA170', // Light shade
          400: '#FF7F47', // Lighter shade
          500: '#FF6100', // Base primary shade (default)
          600: '#E65700', // Slightly darker
          700: '#CC4E00', // Darker shade
          800: '#FA6814FF', // Dark
          900: '#FF5C00', // Darkest
        },
      },
    },
  },
  plugins: [require('@headlessui/tailwindcss')],
}
