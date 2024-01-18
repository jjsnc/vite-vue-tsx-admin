import { ViewNames } from '@/types/constants'

/**
 * @desc convention
 *  dashboard is fixed no permission view, if you want dynamic ,use following and complete other logic
 */
export const firstPermissionRoute = {
    name: ViewNames.workplace,
    title: 'menu.dashboard.workplace',
    fullPath: '/dashboard/workplace'
  }