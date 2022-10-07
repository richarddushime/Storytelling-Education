/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: {
        100: "#e6d8ec",
        200: "#cdb0d8",
        300: "#c09ccf",
        400: "#b489c5",
        500: "#a775bb",
        600: "#9b61b2",
        700: "#7c4791",
        800: "#4a2b57",
        900: "#25152c",
      },
    },
    extend: {},
    plugins: [],
  },
};
