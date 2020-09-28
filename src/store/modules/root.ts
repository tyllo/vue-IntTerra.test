import {
  Getters,
  Mutations,
  Actions,
  Module,
} from 'vuex-smart-module'


type S = RootState
type G = RootGetters
type M = RootMutations
type A = RootActions

export class RootState {
}

export class RootGetters extends Getters<S> {
}

export class RootMutations extends Mutations<S> {
}

export class RootActions extends Actions<S, G, M, A> {
}

export const rootStore = new Module({
  namespaced: false,
  state: RootState,
  getters: RootGetters,
  mutations: RootMutations,
  actions: RootActions,
})
