import VueRouter from 'vue-router'
import { Store } from 'vuex'
import { RootState } from './store/modules/root'


declare module 'vuex/types/index' {
  interface Store {
    $router: VueRouter;
  }
}

declare module "vue/types/vue" {
  interface Vue {
    $store: Store<RootState>;
  }
}
