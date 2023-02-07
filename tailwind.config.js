/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        nexaSlab: ["Nexa Slab"],
        openSans: ['Open-Sans', 'sans-serif'],
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '3.5xl': '52rem',
      },
      backgroundImage: {
        'InitialImage': "url('../images/InitialImage.png)",
      }
    },
  },
  plugins: [],
}
