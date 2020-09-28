import { RouteConfig } from 'vue-router'
import { CreateRouterOptions } from '@/typings/common'

import HomeRoutes from '@/pages/Home/routes'
import OperationsRoutes from '@/pages/Operations/routes'
import ErrorRoutes from '@/pages/Errors/routes'


type RouteConfigFabric = ((o: CreateRouterOptions) => RouteConfig[]) | RouteConfig[]

const createGetRoutes = (
  options: CreateRouterOptions,
  list: RouteConfigFabric[],
): RouteConfig[] => (
  list.reduce((acc: RouteConfig[], routes: RouteConfigFabric) => {
    const result = typeof routes === 'function' ? routes(options) : routes
    return acc.concat(result)
  }, [] as RouteConfig[]).filter(Boolean).flat()
)

export const createRoutes = (options: CreateRouterOptions): RouteConfig[] => (
  createGetRoutes(options, [
    HomeRoutes,
    OperationsRoutes,

    // must be last, because in error - `*` route
    ErrorRoutes,
  ])
)
