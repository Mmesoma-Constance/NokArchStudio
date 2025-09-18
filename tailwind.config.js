/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       fontFamily: {
        playfair: ["Playfair Display", "serif"],
        sourcesans: ["Source Sans Pro", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        lora: ["Lora", "serif"],
        montserrat: ["Montserrat", "sans-serif"],
        inconsolata: ["Inconsolata", "monospace"],
      },
    },
  },
  plugins: [],
};
