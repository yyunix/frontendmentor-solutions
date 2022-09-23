/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "rgb(var(--color-red) / <alpha-value>)",
        white: "rgb(var(--color-pure-white) / <alpha-value>)",
        "dark-blue": "rgb(var(--color-dark-blue) / <alpha-value>)",
        "gray-blue": "rgb(var(--color-grayish-blue) / <alpha-value>)",
        "semi-dark-blue": "rgb(var(--color-semi-dark-blue) / <alpha-value>)",
      },
      fontSize: {
        "body-sm": ["13px", "16px"],
        "body-md": ["15px", "19px"],
        "heading-xs": ["18px", "23px"],
        "heading-sm": ["24px", "30px"],
        "heading-md": ["24px", "30px"],
        "heading-lg": ["32px", "40px"],
      },
      gridTemplateColumns: {
        "auto-fill": "repeat(auto-fill, minmax(280px, 1fr))",
      },
    },
  },
  plugins: [],
};
