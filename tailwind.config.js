/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant Garamond", "serif"],
        quintessential: ["Quintessential", "cursive"],
        poppins: ["Poppins", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
        baskerville: ["baskerville"],
        roboto: ["Roboto", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      backdropBlur: {
        xs: "3px",
      },
      animations: {
        spin: "spin 1s linear infinite",
        "slide-right-md": "slideRight 1s ease-in-out",
      },
    },
  },
  plugins: [require("tailwindcss-motion")],
};
