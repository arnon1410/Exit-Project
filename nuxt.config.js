import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - front_end',
    title: 'front_end',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
          light: {
              primary: '#3f51b5',
              secondary: '#006664',
              anchor: '#8c9eff',
              error: "#FF5252",
              info: "#2196F3",
              success: "#4CAF50",
              warning: "#FFC107",
              lightblue: "#14c6FF",
              yellow: "#FFCF00",
              pink: "#FF1976",
              orange: "#FF8657",
              magenta: "#C33AFC",
              darkblue: "#1E2D56",
              gray: "#909090",
              neutralgray: "#9BA6C1",
              green: "#2ED47A",
              red: "#FF5c4E",
              darkblueshade: "#308DC2",
              lightgray: "#BDBDBD",
              lightpink: "#FFCFE3",
              white: "#FFFFFF"
          }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    options: {
      fix: true
    }
    
  }
}
