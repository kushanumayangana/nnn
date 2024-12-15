/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Add Inter as the default sans font
      },
      colors: {
      primary: "#ff5722", //Can you add custom color
    },
  },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

