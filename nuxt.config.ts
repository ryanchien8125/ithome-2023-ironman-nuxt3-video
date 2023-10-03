// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  runtimeConfig: {
    apiSecret: '怎麼可以讓你知道呢 :P', // 會被 NUXT_API_SECRET 環境變數覆蓋
    public: {
      apiBase: '/api' // 會被 NUXT_PUBLIC_API_BASE 環境變數覆蓋
    }
  }
})
