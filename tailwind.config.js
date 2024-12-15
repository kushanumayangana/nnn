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
    screens: {
      xs: '400px', // custom breakpoint 
    },
  },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

