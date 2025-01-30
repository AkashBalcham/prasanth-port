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

