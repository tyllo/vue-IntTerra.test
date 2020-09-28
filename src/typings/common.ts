import VueRouter from 'vue-router'
import { Store } from 'vuex'
import { RootState } from '@/store/modules/root'


export interface CreateRouterOptions {
  store: Store<RootState>;
  router?: VueRouter;
}
