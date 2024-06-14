// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    base: 'byro-2.0.github.io',
  },
  css: ['normalize.css', 'vue-final-modal/style.css'],
  modules: [
    '@nuxt/eslint',
    '@hypernym/nuxt-gsap',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-swiper'
  ],
  swiper: {
    modules: ['effect-fade'],
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
  },
  ssr: false,
  typescript: {
    typeCheck: true
  },
  //eslint: {
  //  // options here
  //},
  //devtools: { enabled: true }
})