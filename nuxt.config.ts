import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@pinia/nuxt",
    "@nuxt/eslint",
  ],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  ssr: false,
  app: {
    head: {
      link: [
        { rel: "manifest", href: "/manifest.json" },
      ],
    },
  },
});
