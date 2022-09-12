import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    [
      "@storyblok/nuxt",
      {
        accessToken: "yUwwIBjaMiCpKZag9K8reQtt",
        // NOTEIMPORTANT: ADD THIS HERE
        apiOptions: {
          region: "us",
        },
      },
    ],
  ],
  // NOTEIMPORTANT: Ajouté ceci pour debarasser de cette erreur: https://github.com/nuxt/framework/issues/7341
  vite: {
    devBundler: "legacy",
  },
});
