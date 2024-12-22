/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ttuPattern: "url('header_img.png')",
      },
      keyframes:{
        fadeIn:{
          '0%':{opacity:'0'},
          '100%':{opacity:'1'},
        }
      }
    },
  },
  plugins: [],
}
