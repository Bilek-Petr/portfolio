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
        mainAccent: "#0D1931",
        primaryTone: "#34A6F2",

        mainLight: "#F2F2F2",
        gray500: "#AAAAAA",
        gray100: "#DBDBDB",
      },
      fontSize: {
        nameHeading: "clamp(5rem, 21vw, 16rem)",
        descriptionText: "clamp(1.2rem, 3vw, 5rem)",
        sectionText: "clamp(2.5rem, 14vw, 14rem)",
        aboutMeText: "clamp(0.9rem, 1vw, 1.5rem)",
        projectDescription: "clamp(1.4rem, 2vw, 4rem)",
        projectTitle: "clamp(2.2rem, 3.5vw, 6rem)",
      },
      boxShadow: {
        "custom-black": "1.5px 1.5px 0px #000000",
        "custom-black-hover": "5px 5px 0px #000000",
        "custom-inset": "inset 0 0 0 0 var(--tw-shadow-color)",
        "custom-inset-hover": "inset 100px 0 0 0 var(--tw-shadow-color)",
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
      transitionProperty: {
        "color-shadow": "color, box-shadow",
      },
    },
  },
  plugins: [],
};
