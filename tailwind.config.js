/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        around: "0 0 10px 3px rgba(125, 125, 125, 0.205)",
      },
    },
  },
  plugins: [],
};
