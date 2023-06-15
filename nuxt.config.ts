// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    "@bg-dev/nuxt-naiveui",
    "@pinia/nuxt",
    '@pinia-plugin-persistedstate/nuxt',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
