/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        bubble_bg: "#007cff2e;",
        blue: {
          dark: "#0C2340",
          medium: "#041725",
          light: "#02101E",
        },
      },
    },
  },
  plugins: [],
};
