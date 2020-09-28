import VueRouter from 'vue-router'


declare module 'vuex/types/index' {
  interface Store {
    $router: VueRouter;
  }
}
