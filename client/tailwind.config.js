/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': `linear-gradient(0deg, rgba(0,0,0,.8) 0, transparent 60%, rgba(0,0,0,.8)), url('https://assets.nflxext.com/ffe/siteui/vlv3/5aecc44d-2a1f-4313-8399-98df20908b64/4d9d5abf-07d8-4dd6-9899-a96b902312ee/IN-en-20221114-popsignuptwoweeks-perspective_alpha_website_large.jpg')`,
      },
    },

    screens: {
      mobile: '420px',
      tablet: '620px',
      laptop: '1024px',
      desktop: '1280px',
    },
  },
  plugins: [],
};
