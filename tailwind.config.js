const { rotate } = require("tailwindcss/defaultTheme");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      screens: {
         xs: "540px",
         ...defaultTheme.screens,
      },
      extend: {
         animation: {
            tilt: "tilt 10s infinite ease-in-out",
         },
         keyframes: {
            tilt: {
               "0%, 50%, 100%": { transform: "rotate(0deg)" },
               "25%": { transform: "rotate(1deg)" },
               "75%": { transform: "rotate(-1deg)" },
            },
         },
      },
   },
   plugins: [require("@tailwindcss/forms")],
};
