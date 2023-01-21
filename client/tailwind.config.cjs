/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': `linear-gradient(0deg, rgba(0,0,0,.8) 0, transparent 60%, rgba(0,0,0,.8)), url('https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/3689d1b9-def2-446b-bc6c-ba159a4469f8/IN-en-20230109-popsignuptwoweeks-perspective_alpha_website_large.jpg')`,

        'login-screen': `linear-gradient(0deg, rgba(0,0,0,.4) 0, transparent 90%, rgba(0,0,0,.4)), url('https://assets.nflxext.com/ffe/siteui/vlv3/935156fb-9579-4fc2-ad94-70680402b8ef/3689d1b9-def2-446b-bc6c-ba159a4469f8/IN-en-20230109-popsignuptwoweeks-perspective_alpha_website_large.jpg')`,
      },
    },
    screens: {
      xs: '398px',
      login: '740px',
      mobile: '420px',
      tablet: '620px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
