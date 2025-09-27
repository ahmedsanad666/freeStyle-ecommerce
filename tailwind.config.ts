import type { Config } from "tailwindcss";

export default <Config>{
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1480px",
        },
      },
      colors: {
        primary: "#1e40af", //  blue
        secondary: "#FFA88C", // orang
        textGray: "#676767", // gray
        danger: "#ef4444", //red
        darkBlue: "#0E2148",
        black: "#141414",
        darkGray: "#626262",
        blue:"#0A66C2",
        orange:"#D01D3E",
        lightWhite: "#FFFFFF",
        mutedTeal: "#FFA88C",
        yellow:"#FFB400",
      },
    },
  },
  plugins: [],
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
};
