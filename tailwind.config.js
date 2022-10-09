/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    textColor: {
        "white": "#ffffff",
        "black": "#000000",
        "blue": "#3b82f6",
    },
    colors: {
      "white": "#ffffff",
      "modal": "#000000cc",
      "header": "#2c2c2c"
    },
    extend: {},
  },
  plugins: [],
}
