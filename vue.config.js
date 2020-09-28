const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

const isProd = process.env.NODE_ENV === 'production'
const environment = dotenv.config({ path: '.env' })
dotenvExpand(environment)

console.log(environment.parsed)

module.exports = {
  lintOnSave: false,

  pages: {
    index: {
      entry: 'src/main',
      template: 'public/index.html',
      title: environment.parsed.VUE_APP_TITLE,
    },
  },

  css: {
    sourceMap: true,
    extract: isProd,
    loaderOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/variables.scss";',
      },
    },
  },

  pluginOptions: {
    moment: {
      locales: ['ru'],
    },
  },

  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
}
