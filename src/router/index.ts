import { createRouter, createWebHashHistory } from 'vue-router'

import { ViewNames } from '@/types/constants'

import { appRoutes } from './routes'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
NProgress.configure({ showSpinner: false })


const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: ViewNames.login }
    },
    ...appRoutes,
    {
      path: '/login',
      name: ViewNames.login,
      component: () => import('@/views/login'),
      meta: {
        requiresAuth: false
      }
    }
  ]
})

export default router
