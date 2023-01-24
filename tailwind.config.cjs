/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', 'src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // primaryBG: '#242424',
        primaryBG: '#0b192e',
        primary: '#535bf2', //Blue
        secondary: '#90EE90',

        darkBg: '#242424',
        lightBg: 'white',
        darkElementBg: '#112240',
        darkElement2Bg: '#112240',
        lightElementBg: '#F3F4F6',
        darkElementBgSecondary: '#374151',
      },
    },
  },
  plugins: [],
}
