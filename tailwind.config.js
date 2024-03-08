/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.vue ",
    "./src/App/**/*.vue",
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'headings': ['JetBrains Mono', 'monospace'],
        'ArtStyle': ['Permanent Marker', 'cursive'],
        'content': ['Red Hat Mono', 'monospace'],
      }



    },
  },
  darkMode: 'class',
  darkMode: ["class", "[data-theme='dark']"],
  plugins: [
    // require('@tailwindcss/typography'),

    require('daisyui')
  ],
  // ...
  daisyui: {
    themes: ["light", "dark"]
  },
}

