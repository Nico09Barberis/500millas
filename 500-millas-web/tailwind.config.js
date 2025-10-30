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

        // Tipografías existentes
        'ancois-one': ['"Francois One"', 'sans-serif'],
        'cormorant-garamond': ['"Cormorant Garamond"', 'serif'],
        'rowdies-light': ['Rowdies', 'sans-serif'],
        'rowdies-regular': ['Rowdies', 'sans-serif'],
        'rowdies-bold': ['Rowdies', 'sans-serif'],
        'tangerine-regular': ['"Tangerine"', 'cursive'],
        'tangerine-bold': ['"Tangerine"', 'cursive'],

        // 🪵 Nuevas tipografías estilo vintage / rústico
        'cabin-sketch': ['"Cabin Sketch"', 'cursive'],
        'caudex': ['"Caudex"', 'serif'],
        'cinzel-decorative': ['"Cinzel Decorative"', 'serif'],
        'italiana': ['"Italiana"', 'serif'],
        'londrina-shadow': ['"Londrina Shadow"', 'display'],
        'lora': ['"Lora"', 'serif'],
        'metal': ['"Metal"', 'display'],
        'six-caps': ['"Six Caps"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};