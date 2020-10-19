import { Configuration } from '@nuxt/types'
require('dotenv').config()
const { BASE_URL } = process.env

const config: Configuration = {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  // mode: 'universal',
  ssr: true,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Src directory
   */
  // srcDir: 'src',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    htmlAttrs: {
      lang: 'ja',
    },
    title: 'kappy tech blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          process.env.npm_package_description ||
          '主にVue.jsやNuxt.js、電子工作について勉強した内容や得た知見をメモしたり共有するブログです。',
      },
      {
        hid: 'og:site_name',
        property: 'og:site_name',
        content: 'kappy tech blog',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      { hid: 'og:url', property: 'og:url', content: BASE_URL },
      { hid: 'og:title', property: 'og:title', content: 'kappy tech blog' },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          '主にVue.jsやNuxt.js、電子工作について勉強した内容や得た知見をメモしたり共有するブログです。',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: `${BASE_URL}/img/ogp/home.png`,
      },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/global.css', '@/assets/css/content.css'],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '~/plugins/scrollactive.ts', ssr: false },
    { src: '~/plugins/font-awesome', ssr: false },
    { src: '~plugins/ga.js', mode: 'client' },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    'nuxt-fontawesome',
  ],
  env: {
    BASE_URL,
  },
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css',
      },
    },
  },
  fontawesome: {
    component: 'fa',
  },
  googleAnalytics: {
    id: 'UA-138249132-2',
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}

export default config
