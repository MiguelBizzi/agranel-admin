/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      text: "#07071d",
      text_light: "#fff",
      background: "#fbfbfe",
      primary: "#4545e3",
      secondary: "#eaeafa",
      accent: "#2a2aa2",
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
