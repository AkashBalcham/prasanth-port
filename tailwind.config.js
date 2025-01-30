/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['gilroy', 'sans-serif'],
        duplet: ['duplet', 'sans-serif'],
        canela: ['canela', 'sans-serif'],
      },
      fontWeight: {
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        mid: 550,
        semibold: 600,
        extrabold: 900,
      },
      screens: {
        lg: "1024px",
        lgMid: "1152px",
        xl: "1280px",
        xlMid: "1408px",
        "2xl": "1536px",
        "3xl": "1700px",
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.word-spacing-sm': {
          wordSpacing: '0.1em',
        },
        '.word-spacing-md': {
          wordSpacing: '0.25em',
        },
        '.word-spacing-lg': {
          wordSpacing: '0.5em',
        },
      });
    },
  ],
}

/*
lg	lg:	1024px
xl	xl:	1280px
2xl	2xl:	1536px
*/