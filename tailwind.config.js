module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'],//['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    container: {
      // padding: '2rem',
      center: true
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
