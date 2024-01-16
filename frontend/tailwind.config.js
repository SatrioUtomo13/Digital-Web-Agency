/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ubuntu': ["'Ubuntu', 'sans-serif'"],
        'bilbo': ["'Bilbo Swash Caps', 'cursive'"] 
      },
      colors: {
        'primary': '#352F44',
        'secondary': '#5C5470'
      }
    },
  },
  plugins: [],
}

