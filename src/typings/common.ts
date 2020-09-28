import VueRouter from 'vue-router'
import { Store } from 'vuex'
import { RootState } from '@/store/modules/root'
import { OperationTab } from '@/helpers/enums/OperationTab'
import { SortDirection } from '@/helpers/enums/SortDirection'


export interface CreateRouterOptions {
  store: Store<RootState>;
  router?: VueRouter;
}

export interface OperationsFilters {
  tab?: OperationTab;
  sortKey?: string;
  sortDirection?: SortDirection;
}
