import { appRoutes } from '@/router/routes'
import { ViewNames } from '@/types/constants'
import {
  IconCloseCircle,
  IconDashboard,
  IconExclamationCircle,
  IconFile,
  IconList,
  IconSettings,
  IconUser
} from '@arco-design/web-vue/es/icon'

import { isString } from 'lodash'
import { computed } from 'vue'
import type { RouteRecordName, RouteRecordRaw } from 'vue-router'
import usePermission from './permission'

const routeIconMap: Record<RouteRecordName, typeof IconDashboard | undefined> = {
  [ViewNames.dashboard]: IconDashboard,
  [ViewNames.profile]: IconFile,
  [ViewNames.exception]: IconExclamationCircle,
  [ViewNames.form]: IconSettings,
  [ViewNames.list]: IconList,
  [ViewNames.result]: IconCloseCircle,
  [ViewNames.user]: IconUser
}

/**
 * @desc convention
 *  dashboard is fixed no permission view, if you want dynamic ,use following and complete other logic
 */
export const firstPermissionRoute = {
  name: ViewNames.workplace,
  title: 'menu.dashboard.workplace',
  fullPath: '/dashboard/workplace'
}

export default function useAppRoute() {
  return '11'
}
