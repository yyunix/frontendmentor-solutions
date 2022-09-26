/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "rgb(var(--color-violet) / <alpha-value>)",
        "light-violet": "rgb(var(--color-light-violet) / <alpha-value>)",
        "dark-navy": "rgb(var(--color-dark-navy) / <alpha-value>)",
        navy: "rgb(var(--color-navy) / <alpha-value>)",
        "blue-gray": "rgb(var(--color-blue-gray) / <alpha-value>)",
        gray: "rgb(var(--color-gray) / <alpha-value>)",
        blue: "rgb(var(--color-blue) / <alpha-value>)",
        "black-0": "rgb(var(--color-black-0) / <alpha-value>)",
        "black-1": "rgb(var(--color-black-1) / <alpha-value>)",
        red: "rgb(var(--color-red) / <alpha-value>)",
        salmon: "rgb(var(--color-salmon) / <alpha-value>)",
        "very-light-gray": "rgb(var(--color-very-light-gray) / <alpha-value>)",
        green: "rgb(var(--color-green) / <alpha-value>)",
        orange: "rgb(var(--color-orange) / <alpha-value>)",
        "very-dark-blue": "rgb(var(--color-very-dark-blue) / <alpha-value>)",
      },
      fontSize: {
        "body-2": ["11px", { lineHeight: "18px", letterSpacing: "-0.23px" }],
        "body-1": ["12px", { lineHeight: "15px", letterSpacing: "-0.25px" }],
        "heading-xs": [
          "12px",
          { lineHeight: "15px", letterSpacing: "-0.25px" },
        ],
        "heading-sm": ["16px", { lineHeight: "24px", letterSpacing: "-0.8px" }],
        "heading-md": [
          "20px",
          { lineHeight: "22px", letterSpacing: "-0.63px" },
        ],
        "heading-lg": ["32px", { lineHeight: "36px", letterSpacing: "-1px" }],
      },
    },
  },
  plugins: [],
};
