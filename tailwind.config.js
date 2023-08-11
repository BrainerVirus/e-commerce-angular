/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        bubble_bg: "#007cff2e",
        "ocean-blue-dark-theme": {
          dark: "#041725",
          medium: "#0C2340",
          light: "#02101E",
          accent: "#00cde9",
        },
        "ocean-blue-light-theme": {
          light: "#2683c8",
          medium: "#0861b9",
          accent: "#00cde9",
        },
      },
    },
  },
  plugins: [],
};
