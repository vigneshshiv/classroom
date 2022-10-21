/**
 * Tailwind config for CSS
 */
const colors = require('./colors');

/** 
 * @type {import('tailwindcss').Config} 
 */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      mono: ['Roboto', 'sans-serif'],
    },
    extend: {   
      fontSize: {
        '6xl': '68px',
        '5xl': '40px',
        '4xl': '32px',
        '3xl': '28px',
        '2xl': '24px',
        xl: '20px',
        lg: '17px',
        base: '15px',
        sm: '13px',
        xs: '11px'
      },
      colors
    }
  },
  plugins: [],
}
