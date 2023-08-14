/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      white: "#FCFCFC",
      black: "#171717",
      primary: "#6E00FF",
      greyWhite: "#CCCCCC",
      greyDark: "#373737",
      success: "#007F2C",
      transparent: "transparent",
    },
    fontFamily: {
      primary: ["Inconsolata", "monospace"],
    }
  },
  plugins: [require('@tailwindcss/forms')],
}

