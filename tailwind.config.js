/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        fadein: 'fadein 2s ease-in'
      },
      keyframes:{
        fadein:{
          'from':{opacity:0},
          'to':{opacity:1}
        },
      }
    },
  },
  plugins: [],
};
