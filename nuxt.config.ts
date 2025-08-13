// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
        },
        { rel: "icon", type: "image/webp", href: "/pratika-logo.webp" },
        {
          rel: "stylesheet",
          href: "https://unpkg.com/leaflet/dist/leaflet.css",
        },
      ],
      title: "Pratika Manufacture Industry",
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/icon", "@nuxt/fonts", "@nuxt/image"],
  vite: {
    plugins: [tailwindcss()],
  },
  plugins: [{ src: "~/plugins/leaflet.client.js", ssr: false }],
});
