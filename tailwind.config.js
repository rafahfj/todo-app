/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      boxShadow: {
        standard: "0 0 5px rgba(0,0,0,0.3)",
      },
      colors: {
        primary: {
          1: "#A28B55",
          2: "#86AB89",
          3: "#CBE2B5",
          4: "#E7FBE6",
        },
      },
    },
  },
  plugins: [],
};
