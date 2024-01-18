import { login, logout, type LoginData } from '@/api/user'
import { useUserStore } from '@/stores'
import { setToken, clearToken } from '@/utils/token'
import { removeRouteListener } from '@/utils/routerListener'

/**
 * @desc system authentication
 *
 */
export default function useAuth() {
  const loginApp = async (data: LoginData) => {
    try {
      const res = await login(data)
      setToken(res.data.token)
    } catch (error) {
      clearToken()
      throw error
    }
  }
  const logoutApp = async () => {
    const userStore = useUserStore()
    const afterLogout = () => {
      userStore.resetUserInfo()
      clearToken()
      removeRouteListener()
    }
    try {
      await logout()
    } finally {
      afterLogout()
    }
  }

  return {
    loginApp,
    logoutApp
  }
}
