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
        primary: '#352F44',
        secondary: '#5C5470',
        gradPrimary: '#5f39ff',
        gradSecondary: '#20d9a1',
        text: '#d9d9d9',
        footer: '#141414',
      },
    },
  },
  plugins: [],
};
