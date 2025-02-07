/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {},
    container:{
      center: true,
      padding: "1rem",
      screens : {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variant: {
    extend: {},
  },
  plugins: [],
};

