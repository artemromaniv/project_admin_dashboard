/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        background:'#F0F2F7',
        crust:'#FFFFFF',
        text:'#1D1C25'
      }
    },
  },
  plugins: [require("daisyui")],
}