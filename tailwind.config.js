/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      transparent: 'transparent',
      'backcolor': '#14142b',
      'midnight': '#121063',
      'backbox': '#1301099f',
      'custumviolet': '#38252e',
      'custumgray': '#0800073b',
      'rose': '#d48cb0',
      'rose1': '#C37B89',
    },
    boxShadow: {
        '3xl': '10px 5px 25px rgb(56, 37, 46)',
      }
    },
  },
  plugins: [],
}
