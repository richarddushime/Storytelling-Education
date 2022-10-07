/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      white: "#ffffff",
      "russian-violet": "#3d0e50",
      "ghos-white": "#edeaee",
      "back-shadows": "#b2aab8",
      "gray-light": "#838391",
      "violet-crayola": "#983084",
    },
    fontSize: {
      80: "80px",
      40: "40px",
      28: "28px",
      15: "15px",
      11: "11px",
      12: "12px",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
    fontFamily: {
      eloquia: ["Eloquia", "sans-serif"],
    },
    extend: {
      screens: {
        sm: "375px",
        md: "768px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
