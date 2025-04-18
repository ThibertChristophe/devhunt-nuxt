import tailwindcss from "@tailwindcss/vite";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ["~/assets/css/tailwind.css"],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxt/ui-pro", "@nuxt/test-utils", "motion-v/nuxt"],
  uiPro: {
    license: process.env.MY_ENVIRONMENT_VARIABLE
  }
});
