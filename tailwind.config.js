// @ts-check

/** @type {import("tailwindcss/types").Config } */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary:"#033A5B",
        hover:"#E4BE72"
      },
      textColor: {
        primary:"#8B8B8B",
        hover:"#E4BE72"
      },
      backgroundImage:{
        hero: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url("/mobile-background.webp")',
        desktop:'linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/hero-background.webp")'
      }
    },
  },

  plugins: [require('@tailwindcss/forms')],
}
