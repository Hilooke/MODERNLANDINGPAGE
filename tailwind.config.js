/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html"],
  theme: {
    extend: {
      colors: {
        "bookmark-purple": "#7e22ce",
        "bookmark-red": "#b91c1c",
        "bookmark-blue": "#1d4ed8",
        "bookmark-gray": "#374151",
        "bookmark-white": "#f8fafc",
      },
    },
    fontFamily: {
      poppins: ["poppins, sans-serif"],
    },
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

