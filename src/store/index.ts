import Vue from 'vue'
import Vuex, {
  Store,
} from 'vuex'
import {
  createStore as vuexCreateStore,
  registerModule,
} from 'vuex-smart-module'
import {
  rootStore,
  RootState,
} from './modules/root'
import { operationsStore } from './modules/operations'

Vue.use(Vuex)

export const createStore = () => {
  const store = vuexCreateStore(
    rootStore,
    { strict: process.env.NODE_ENV !== 'production' },
  ) as Store<RootState>

  registerModule(
    store,
    'operations',
    'operations',
    operationsStore,
  )

  return store
}
