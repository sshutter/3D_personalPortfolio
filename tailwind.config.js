/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#fafafa",
        secondary: "#1A1A1A",
        inactive: "#9E9E9E",
        normal: "#212121",
        grey: "#969696",
        card: "#e2e0e0",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('src/assets/38119.png')",
      // },
    },
  },
  plugins: [],
};
