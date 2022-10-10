/**
 * Tailwind config for CSS
 */
const defaultTheme = require('tailwindcss/defaultTheme');
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
    extend: {   
      maxWidth: {
        xs: '21rem',
      },
      outline: {
        blue: ['1px auto ' + colors.link, '3px'],
      },
      opacity: {
        8: '0.08',
      },
      fontFamily: {
        sans: [
          'Optimistic Display',
          '-apple-system',
          ...defaultTheme.fontFamily.sans,
        ]
      },
      lineHeight: {
        base: '30px',
        large: '38px',
      },
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
