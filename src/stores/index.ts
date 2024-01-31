import { createPinia } from 'pinia'

import useAppStore from './modules/app'
import useUserStore from './modules/user'
import useTabStore from './modules/tab'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

export { useAppStore, useUserStore,useTabStore }
export default pinia
