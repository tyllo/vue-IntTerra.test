// styles
import '@/assets/scss/index.scss'

import { CreateElement } from 'vue/types/umd'

import { createStore } from '@/store'
import { createRouter } from '@/router'

import Vue from 'vue'
import App from './App.ts.vue'


Vue.config.productionTip = false
// Vue.config.performance = process.env.NODE_ENV !== 'production'

const store = createStore()
const router = createRouter({ store })
store.$router = router

const app = {
  store,
  router,
  render: (h: CreateElement) => h(App),
}

new Vue(app).$mount('#app')
