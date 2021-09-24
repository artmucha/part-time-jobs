require('./.env');

module.exports = {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'PartTimeJobs',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8'},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { 'http-equiv':'Content-Security-Policy'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "true" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;700;900&display=swap" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/global.scss'
  ],
  
  dev: NODE_ENV !== 'production',

  // Env vars

  env: {
    BASE_URL: BASE_URL,
    PORT: PORT,
    HOST: HOST,
    DB: DB,
    DB_PORT: DB_PORT,
    DB_NAME: DB_NAME,
    DB_USER: DB_USER,
    DB_PASS: DB_PASS,
    NODE_ENV: NODE_ENV,
  },

  publicRuntimeConfig: {
    baseURL: BASE_URL,
    port: PORT,
    host: HOST,
  },

  render: {
    csp: true,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Server Middleware
  serverMiddleware: [
    '~/api/index',
  ],
}
