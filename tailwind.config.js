/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "rgb(255, 192, 23)",
        black: "#000",
        blackLight: "#393838",
        white: "#fff",
      },
    },
  },
  plugins: [],
  unknownAtRules: "ignore",
};
