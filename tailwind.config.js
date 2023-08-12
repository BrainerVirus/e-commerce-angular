/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      boxShadow: {
        inset: "inset 0 0px 5px rgba(0, 0, 0, 0.2)",
      },
      colors: {
        bubble_bg: "#007cff2e",
        "ocean-blue-dark-theme": {
          dark: "#041725",
          medium: "#0C2340",
          light: "#02101E",
          accent: "#0076DD",
        },
        "ocean-blue-light-theme": {
          dark: "#004fca",
          medium: "#003a93",
          light: "#0064ff",
          accent: "#41d2fa",
          accent_nav_hover: "#24A3DD",
        },
      },
    },
  },
  plugins: [],
};
