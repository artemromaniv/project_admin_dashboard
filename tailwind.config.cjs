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
        text:'#1D1C25',
        blue:'#352FC5',
        little_boy_blue:'#71A5DD',
        wind:'#A4B0CE'
      }
    },
  },
  plugins: [require("daisyui")],
}