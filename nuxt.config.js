export default {
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || 'chihao.tw',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/chihao.tw-favicon.png' }
    ]
  },
  loading: { color: '#fff' },
  css: [],
  plugins: [],
  buildModules: [
    '@nuxtjs/eslint-module' // Doc: https://github.com/nuxt-community/eslint-module
  ],
  modules: [
    '@nuxtjs/axios' // Doc: https://axios.nuxtjs.org/usage
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {}
  }
}
