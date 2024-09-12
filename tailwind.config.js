/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Archivo Narrow", "system-ui", "serif"],
        special: ["Playfair", "system-ui", "serif"],
        text: ["Archivo", "system-ui", "sans-serif"],
      },
      colors: {
        mainBlack: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
