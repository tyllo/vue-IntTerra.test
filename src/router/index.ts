import { CreateRouterOptions } from '@/typings/common'

import Vue from 'vue'
import VueRouter from 'vue-router'
import {
  createRoutes,
} from './routes'


type Options = Required<CreateRouterOptions>

Vue.use(VueRouter)

export const createRouter = (options: CreateRouterOptions) => {
  const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes: [],
  })

  const opt: Options = { ...options, router }

  const routes = createRoutes(opt)
  router.addRoutes(routes)

  return router
}
