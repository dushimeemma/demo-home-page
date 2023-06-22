/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/hero.svg')",
        'rounded-vectors': "url('/src/assets/images/rounded-vectors.svg')",
        'advert-one': "url('/src/assets/images/advert00.svg')",
        'advert-two': "url('/src/assets/images/advert01.svg')",
        'advert-three': "url('/src/assets/images/advert02.svg')",
        'update-one': "url('/src/assets/images/update00.svg')",
        'update-two': "url('/src/assets/images/update01.svg')",
        'update-three': "url('/src/assets/images/update02.svg')",
      },
      colors: {
        'dark-green': '#9BD030',
        'dark-blue': '#006198',
        'dark-grey': '#545454',
        'dark-white': '#EEEEEE',
      },
    },
  },
  plugins: [],
};
