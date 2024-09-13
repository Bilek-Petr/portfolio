/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: "2rem",
      },
      fontFamily: {
        heading: ["Archivo Narrow", "system-ui", "serif"],
        special: ["Playfair", "system-ui", "serif"],
        text: ["Archivo", "system-ui", "sans-serif"],
      },
      colors: {
        mainAccent: "#1E1E1E",
      },
      fontSize: {
        nameHeading: "clamp(5rem, 21vw, 16rem)",
        descriptionText: "clamp(1.5rem, 3vw, 5rem)",
        navText: "clamp(3.25rem, 15vw, 6rem)",
      },
    },
  },
  plugins: [],
};
