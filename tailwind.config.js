/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      transitionDuration: {
        250: "250ms",
        800: "800ms",
        900: "900ms",
      },
      spacing: {
        54: "13.5rem",
      },
      fontFamily: {
        title: ["Bebas Neue"],
        retro: ['"Press Start 2P"'],
        bokuteh: ["BokutehPro", "sans-serif"],
        seurat: ["SeuratPro", "sans-serif"],
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
