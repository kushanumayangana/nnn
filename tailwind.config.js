/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
      primary: "#ff5722", //Can you add custom color
    },
  },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

