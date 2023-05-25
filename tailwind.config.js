/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#E5E5CB",
        secondary: "#D5CEA3",
        tertiary: "#3C2A21",
        forth: "#1A120B",
        fifth: "#9F8772",
        wood: "#573523",
        "wood-bright": "#7d543e",
        "wood-brightest": "#8f654f",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "all-black": "#000",
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
