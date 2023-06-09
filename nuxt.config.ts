// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
    "@bg-dev/nuxt-naiveui"
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
