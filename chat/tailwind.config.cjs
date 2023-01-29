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
        online: '#00B37E',
        green: '#07847E',
        input: '#282843'
      },
      gridTemplateColumns: {
        'chat-500': '500px, 1fr',
        'chat-300': '300px, 1fr',
        'chat-100': '100px, 1fr',
      }
    },
  },
  plugins: [],
}
