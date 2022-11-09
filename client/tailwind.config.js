/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      xs: '412px',
      sm: '524px',
      md: '712px',
      lg: '924px',
      xl: '1124px',
      '2xl': '1324px',
    },
  },
  plugins: [],
};
