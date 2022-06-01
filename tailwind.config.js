const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat"],
    },
    colors: {
      ...colors
    },
    extend: {
      colors: {
        blue: "#5497B0",
      },
    },
  },
  plugins: [],
}
