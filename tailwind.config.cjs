/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', 'src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryBG: '#242424',
        primary: '#535bf2', //Blue
        secondary: '#90EE90',

        darkBg: '#242424',
        lightBg: 'white',
        darkElementBg: '#111827',
        lightElementBg: '#F3F4F6',
        darkElementBgSecondary: '#374151',
      },
    },
  },
  plugins: [],
}
