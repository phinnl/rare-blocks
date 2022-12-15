/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        mac: "0px 24px 164px -20px rgba(35, 40, 105, 0.15)",
        stat: "0px 0.481081px 0px rgba(18, 32, 59, 0.09)",
      }
    },
  },
  plugins: [],
};
