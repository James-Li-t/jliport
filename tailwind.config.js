/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadein: "fadein 2s ease-in-out",
      },
      keyframes: {
        fadein: {
         from: { 
           opacity: 0,
           transform: 'scale(0.7)'
          },
          to: { 
           opacity: 1,
           transform: 'scale(1)'
          },
        },
      },
    },
  },
  plugins: [],
};
