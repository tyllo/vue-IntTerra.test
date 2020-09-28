import { Routes } from '@/helpers/enums/routes'
import {
  RouteConfig,
} from 'vue-router'


const createRoutes = (): RouteConfig[] => [
  {
    path: '/',
    name: Routes.home,
    redirect: { name: Routes.operations },
  },
]

const createModule = (): RouteConfig[] => {
  const routes = createRoutes()
  return routes
}

export default createModule
