export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': './',
  },
  css: ["bootstrap/dist/css/bootstrap.min.css", "@/assets/styles/main.scss"],
  modules: ["@pinia/nuxt"],
});
