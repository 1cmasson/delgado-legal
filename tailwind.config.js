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
      }
    },
  },

  plugins: [require('@tailwindcss/forms')],
}
