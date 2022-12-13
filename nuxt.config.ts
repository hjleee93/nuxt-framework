import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({ 
  app:{

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
  },
  modules: ['@pinia/nuxt'],
  runtimeConfig:{
    API_BASE_URL: process.env.API_BASE_URL
  },
 
})
