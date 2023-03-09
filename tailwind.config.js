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
        '3.5xl': '52rem',
      },
      fontSize: {
        '3.5xl': ['1.5rem', {
          lineHeight: '2.1rem',
          letterSpacing: '0.02rem',
        }]
      },
      backgroundImage: {
        'InitialImage': "url('../images/InitialImage.png)",
      }
    },
  },
  plugins: [],
}
