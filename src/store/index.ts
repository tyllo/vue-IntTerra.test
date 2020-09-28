import Vue from 'vue'
import Vuex, {
  Store,
} from 'vuex'
import {
  createStore as vuexCreateStore,
} from 'vuex-smart-module'
import {
  rootStore,
  RootState,
} from './modules/root'


Vue.use(Vuex)

export const createStore = () => {
  const store = vuexCreateStore(
    rootStore,
    { strict: process.env.NODE_ENV !== 'production' },
  ) as Store<RootState>

  return store
}
