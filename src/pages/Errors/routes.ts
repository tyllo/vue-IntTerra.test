import { Routes } from '@/helpers/enums/routes'
import {
  RouteConfig,
} from 'vue-router'


const createRoutes = (): RouteConfig[] => [
  {
    path: '*',
    name: Routes.error404,
    component: () => import('./Error404.ts.vue'),
  },
]

const createModule = (): RouteConfig[] => {
  const routes = createRoutes()
  return routes
}

export default createModule
