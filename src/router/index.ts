import { createRouter, createWebHistory } from 'vue-router'

import { ViewNames } from '@/types/constants'

import { appRoutes } from './routes'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
