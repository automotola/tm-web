const pkg = require('./package')

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.17/css/uikit.min.css' }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.17/js/uikit.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-rc.17/js/uikit-icons.min.js' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/css/tailwind.css'
  ],

  /*
** Plugins to load before mounting the App
*/
  plugins: [
    // '~/plugins/vue-editable',
    '~/plugins/vueAxios',
    '~/plugins/vueGun',
    '~/plugins/vueEditable',
    '~/plugins/vueMarkdown',
    // '~/plugins/vueBot'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
    '@nuxtjs/markdownit'
  ],

  /*
  ** Module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxyHeaders: false,
    credentials: false
  },
  markdownit: {
    // See https://github.com/markdown-it/markdown-it
    injected: true,
    preset: 'default',
    linkify: true,
    breaks: true,
    use: [
      // ['markdown-it-container', containerName],
      'markdown-it-attrs'
    ]
  },


  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        }),
        config.module.rules.push({
          test: /\.txt$/,
          use: 'raw-loader'
        }),
        config.resolve.alias['vue'] = 'vue/dist/vue.min.js'
      }
    }
  }
}
