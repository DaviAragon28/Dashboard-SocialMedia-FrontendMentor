/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "index.html"
  ],
  theme: {
    extend: {
      colors: {
        limeGreen: '#1db489',
        brightRed: '#dc414c',
        facebook: '#198ff5',
        twitter: '#1ca0f2',
        instagram: '',
        youtube: '#c4032a',
        veryDarkBlueBG: '#1e202a',
        veryDarkBlueTOP: '#1f212e',
        darkDesaturatedBlue: '#252a41',
        desaturatedBlue: '#8b97c6',
        veryPaleBlue: '#f5f7ff',
        lightGrayishBlueCardBG: '#f0f2fa',
        darkGrayishBlueText: '#63687e',
        veryDarkBlueText: '#1e202a'
      },
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}
