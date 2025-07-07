/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#606c38",
        darkenLightGreen: "#4d562d",
        lightenLightGreen: "#889a50",
        darkGreen: "#283618",
        lightenDarkGreen: "#3e5425",
        lightYellow: "#fefae0",
        lightBrown: "#dda15e",
        darkBrown: "#bc6c25", 
        lightenDarkBrown: "#e3a670",
      },
      transitionDuration: {
        "250": "250ms",
        "800": "800ms",
        "900": "900ms",
      },
      spacing: {
        '54': '13.5rem'
      },
      fontFamily: {
        title: ['Bebas Neue'],
        retro: ['"Press Start 2P"'],
      },

    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}

