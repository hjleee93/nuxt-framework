import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({   
   head: {
    title: 'framework-nuxt',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  router: {
      // https://router.vuejs.org/api/#routeroptions
      options: {},
      middleware:['auth']
    },
  modules: ['@pinia/nuxt'],
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL
},
})
