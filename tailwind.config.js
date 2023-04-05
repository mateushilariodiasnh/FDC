/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./source/presentation/pages/**/*.{js,ts,jsx,tsx}",
    "./source/presentation/components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        nexaSlab: ["Nexa Slab"],
        openSans: ['Open-Sans', 'sans-serif'],
      },
      maxWidth: {
        '3.5xl': '52rem',
        '1.5xl': '37.5rem',
        '2.5xl': '44.375rem',
      },
      fontSize: {
        '4.5xl': ['2.5rem', {
          lineHeight: '3rem',
          letterSpacing: '0.02rem',
        }],
        '4.1xl': ['2rem', {
          lineHeight: '2.8rem',
          letterSpacing: '0.02rem',
        }],
        '3.5xl': ['1.5rem', {
          lineHeight: '2.1rem',
          letterSpacing: '0.02rem',
        }],
        '1.5xl': ['1rem', {
          lineHeight: '1.4rem',
          letterSpacing: '0.02rem',
        }],
        '1xl': ['1.125rem', {
          lineHeight: '1.575rem',
          letterSpacing: '0.02rem',
        }],
      },
      height: {
        '102': '25.5rem',
        '159': '39.75rem',
        '162': '40.5rem',
      },
      width: {
        '112': '28rem',
        '138': '34.5rem',
        '151': '37.75rem',
        '241': '60.25rem',
        '454': '113.5rem',
        '473': '118.25rem',
        '525': '131.25rem',
      },
      backgroundImage: {
        'InitialImage': "url('../public/images/initialImageWebdoor.png')",
      }
    },
    colors: {
      primaryGrayDark: '#5C585B',
      secondaryGrayDark: '#686366',
      secondaryGrayMedium: '#E4E2E2',
      tertiaryOrange: '#FAA635',
      tertiaryGrayBlue: '#B9CAD2',
      white: '#FFFFFF',
      secondaryWhite: '#EFEDED',
      primaryBlue: '#2A9FBC',
      primaryBlueDark: '#005E83',
    },
  },
  plugins: [],
}
