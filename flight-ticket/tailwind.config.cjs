/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        'purple-light': '#8257e5',
        'purple-dark': '#271a45'
      },
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
    },

  },
  plugins: [],
}
