/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [ require("tailwind-scrollbar")({ nocompatible: true }),],
};
