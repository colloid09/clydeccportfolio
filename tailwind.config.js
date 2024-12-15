/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#920CE3',
        'primary-hover': '#7a0abf',
      },
    },
  },
  plugins: [],
};