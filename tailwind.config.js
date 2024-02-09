/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  fontFamily: {
    sans: ["Inter", "sans-serif"],
    thin: ["Thin", "sans-serif"],
    extraLight: ["ExtraLight", "sans-serif"],
    regular: ["Regular", "sans-serif"],
    medium: ["Medium", "sans-serif"],
    semiBold: ["SemiBold", "sans-serif"],
    bold: ["Bold", "sans-serif"],
  },
  plugins: [],
};
