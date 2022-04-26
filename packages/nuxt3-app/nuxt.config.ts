import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  build: {
    transpile: ['test-lib'],
  },
})
