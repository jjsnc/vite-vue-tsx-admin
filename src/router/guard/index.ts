import { setRouteEmitter } from '@/utils/routerListener'

import type { Router } from 'vue-router'

/**
 *
 * @param desc emit router change
 */

function setupPageGuard(router: Router) {
  router.beforeEach((to) => {
    setRouteEmitter(to)
  })
}

export default function configRouteGuard(router: Router) {
  setupPageGuard(router)
}
