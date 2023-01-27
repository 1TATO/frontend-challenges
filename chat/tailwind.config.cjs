/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        background: '#1A1924',
        textwhite: '#E1E1E6',
        online: '#00B37E'
      }
    },
  },
  plugins: [],
}
