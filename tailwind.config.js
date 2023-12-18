/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.vue ",
    "./src/App/**/*.vue",
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  darkMode: ["class", "[data-theme='dark']"],
  plugins: [
    require('@tailwindcss/typography'),

    require('daisyui')
  ],
  // ...
  daisyui: {
    themes: ["light", "dark"]
  },
}

