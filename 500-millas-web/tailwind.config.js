// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
        dancing: ["Dancing Script", "cursive"],
      },
    },
  },
  plugins: [],
};
