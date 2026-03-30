/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f4b400",
        dark: "#2c2c2c",
      },
    },
  },
  plugins: [],
};