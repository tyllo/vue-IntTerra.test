import { Routes } from '@/helpers/enums/routes'
import {
  RouteConfig,
} from 'vue-router'
import { OperationTab } from '@/helpers/enums/OperationTab'


const tabs = Object.values(OperationTab).join('|')

const createRoutes = (): RouteConfig[] => [
  {
    path: `/operations/:tab(${tabs})?`,
    name: Routes.operations,
    props: true,
    component: () => import('./Operations.ts.vue'),
  },
]

const createModule = (): RouteConfig[] => {
  const routes = createRoutes()
  return routes
}

export default createModule
