/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ["'Ubuntu', 'sans-serif'"],
        bilbo: ["'Bilbo Swash Caps', 'cursive'"],
      },
      colors: {
        footer: '#141414',
      },
    },
  },
  plugins: [],
};
