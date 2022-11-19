/**
 * Tailwind config for CSS
 */

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
    extend: {}
  }
}
