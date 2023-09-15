// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: false },

  components: {
    dirs: [],
  },

  css: ["~/assets/stylesheets/main.css"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/stylesheets/scss/_colors.scss" as *;',
        },
      },
    },
  },

  app: {
    head: {
      title: "Music-Player-Pwa",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },

    pageTransition: { name: "page", mode: "out-in" },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
