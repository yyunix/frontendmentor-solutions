/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      base: ["18px", "23px"],
      lg: ["24px", "31px"],
      xl: ["32px", "43px"],
    },
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", ...fontFamily.mono],
      },
      colors: {
        "very-dark-gray": "var(--color-very-dark-gray)",
        "dark-gray": "var(--color-dark-gray)",
        gray: "var(--color-gray)",
        "almost-white": "var(--color-almost-white)",
        green: "var(--color-green)",
        red: "var(--color-red)",
        salmon: "var(--color-salmon)",
        yellow: "var(--color-yellow)",
      },
    },
  },
  plugins: [],
};
