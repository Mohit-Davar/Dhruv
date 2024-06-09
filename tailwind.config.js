/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        themeColorOne: "#d8ab21",
      },
      boxShadow: {
        'sharpButton': '5px 5px 0px 0px rgba(0, 0, 0, 1)',
        'sharpCard' : '5px 5px 0px 0px rgba(255,255,255,1)'
      },
      fontFamily:{
        'poppins':[ "Poppins", 'sans-serif'],
        'robotoCondensed': [ '"Roboto Condensed"', 'sans-serif'],
        'archivoBlack': ['"Archivo Black"', 'sans-serif'],
        "lobster":['"Lobster"', 'sans-serif'],
        "alfa": ['"Alfa Slab One"', 'serif']
      },
    },
  },
  plugins: [],
}

