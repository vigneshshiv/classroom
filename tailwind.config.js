/**
 * Tailwind config for CSS
 */
const defaultTheme = require('tailwindcss/defaultTheme');

/** 
 * @type {import('tailwindcss').Config} 
 */
module.exports = {
  darkMode: 'class',
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto Slab', ...defaultTheme.fontFamily.serif],
        telex: ['Telex', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
