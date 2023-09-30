/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: "Nunito, sans-serif",
        roboto: "Roboto, sans-serif",
        mooli: "Mooli, sans-serif",
      },
      colors: {
        primary: "#49aa80",
      },
      keyframes: {
        slide: {
          "0%": {
            transform: "translateX(1250px)",
            opacity: "0",
            overflow: "hidden",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
            overflow: "hidden",
          },
        },
        slideLeft: {
          "0%": {
            transform: "translateX(-1250px)",
            opacity: "0",
            overflow: "hidden",
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1",
            overflow: "hidden",
          },
        },
      },
      animation: {
        slide: "slide 750ms linear 1",
        slideSlow: "slide 1s linear 1",
        slideLeftSlow: "slideLeft 1s linear 1",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".hide-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
