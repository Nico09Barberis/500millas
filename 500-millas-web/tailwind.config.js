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

        // Nuevas tipografías
        'ancois-one': ['"Francois One"', 'sans-serif'],
        'cormorant-garamond': ['"Cormorant Garamond"', 'serif'],
        'rowdies-light': ['Rowdies', 'sans-serif'],
        'rowdies-regular': ['Rowdies', 'sans-serif'],
        'rowdies-bold': ['Rowdies', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
