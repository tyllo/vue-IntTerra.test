const dotenv = require('dotenv')
const dotenvExpand = require('dotenv-expand')

const isProd = process.env.NODE_ENV === 'production'
const environment = dotenv.config({ path: '.env' })
dotenvExpand(environment)

console.log(environment.parsed)

module.exports = {
  lintOnSave: false,

  publicPath: isProd
    ? '/vue-IntTerra.test/'
    : '/',

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

  chainWebpack: (config) => {
    config.module
      .rule('svg-sprite')
      .use('svgo-loader')
      .loader('svgo-loader')
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
