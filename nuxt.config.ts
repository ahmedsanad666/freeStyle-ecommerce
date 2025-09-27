// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/icon",
    "@nuxtjs/tailwindcss",
    "nuxt-svgo",
    "@pinia/nuxt"
  ],
  css: ["@/assets/css/style.css"],
    // nuxt.config.js
    
  
});