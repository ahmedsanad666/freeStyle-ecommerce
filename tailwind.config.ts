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
          xl: "1200px",
          "2xl": "1200px",
        },
      },
      colors: {
        basic: "#F5F5F5",
        primary: "#D01D3E",
        secondary: "#000000",
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
