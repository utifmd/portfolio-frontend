const defaultTheme = require('tailwindcss/defaultTheme');  // import the defaul theme
 
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ['Raleway', ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'fade-in-up': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        },
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
      },
      animation: {
          'marquee': 'marquee 25s linear infinite',
          'fade-in-up': 'fade-in-up 0.5s ease-out',
          'fade-in-down': 'fade-in-down 1s ease-out'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
