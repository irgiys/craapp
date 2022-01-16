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
         fontFamily: {
            Nautigal: ["The Nautigal", "cursive"],
            Rampart: ["Rampart One", "cursive"],
         },
         animation: {
            tilt: "tilt 10s infinite ease-in-out",
            raindbow: "raindbow 10s infinite ease-in-out",
         },
         keyframes: {
            tilt: {
               "0%, 50%, 100%": { transform: "rotate(0deg)" },
               "25%": { transform: "rotate(1deg)" },
               "75%": { transform: "rotate(-1deg)" },
            },
            raindbow: {
               "0%, 100%": {
                  background: "#557C55",
                  backgroundClip: "text",
               },
               "25%": {
                  background: "#A6CF98",
                  backgroundClip: "text",
               },
               "75%": {
                  background: "#DB6B97",
                  backgroundClip: "text",
               },
            },
         },
      },
   },
   plugins: [require("@tailwindcss/forms")],
};
