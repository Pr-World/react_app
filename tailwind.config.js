/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors")

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'primary': '#00df9a',
        'dark-fg': '#fff',
        'dark-bg': "#000300",
        'light-fg': '#000',
        'light-bg': '#fff',
        'dark-bd': colors.gray['900'],
        'dark-bd-2': colors.gray['600'],
        'light-bd': colors.gray['100'],
        'light-bd-2': colors.gray['200'],
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        type: 'type 2s steps(21, end), cursor .75s step-end infinite;'
      },
      keyframes: {
        type: {
          'from': { 'width': '0%' },
          'to': { 'width': '100%' },
        },
        cursor: {
          'from, to': {'border-right-color': 'transparent'},
          '50%': {'border-right-color': colors.black}
        }
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}

