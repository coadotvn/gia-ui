import { defineNuxtConfig } from 'nuxt3'
import GiaUi from '..'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    GiaUi
  ],

  css: [
    '~/assets/gia-ui.scss'
  ]
})
