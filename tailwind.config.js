/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{html,js,jsx}"],
   mode: "jit",
   theme: {
     extend: {
       colors: {
         "deep-blue": "#010026",
         blue: "#2CBCE9",
         red: "",
         yellow: "#FDCC49",
         grey: "#ededed",
         "dark-grey": "#757575",
         "opaque-black": "rgba(0,0,0,0.75)",
       },
       backgroundImage: (theme) => ({
         "gradient-rainbow":
           "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
 
         "gradient-rainblue":
           "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
         "pizza": "url('https://dodopizza-a.akamaihd.net/static/Img/Products/ddadb2bd7f2d40459acddbe2f51a2389_292x292.webp')"
       }),
       fontFamily: {
         playfair: ["Playfair Display", "serif"],
         opensans: ["Open Sans", "sans-serif"],
       },
     },
     screens: {
       xs: "480px",
       ss: "620px",
       sm: "768px",
       md: "1060px",
       lg: "1200px",
       xl: "1700px",
     },
     opacity: {
      '50': '0.5',
    },
   },
   plugins: [],
   variants: {
    backgroundImage: ['responsive', 'hover', 'focus'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
 };
 