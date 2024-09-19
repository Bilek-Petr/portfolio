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
        sectionText: "clamp(2.5rem, 14vw, 14rem)",
        aboutMeText: "clamp(0.9rem, 1vw, 1.5rem)",
        projectDescription: "clamp(1.4rem, 2vw, 4rem)",
        projectTitle: "clamp(2.5rem, 3vw, 6rem)",
      },
      boxShadow: {
        "custom-black": "1.5px 1.5px 0px #000000",
        "custom-black-hover": "5px 5px 0px #000000",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
      },
    },
  },
  plugins: [],
};
