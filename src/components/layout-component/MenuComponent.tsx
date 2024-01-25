import useAppRoute from '@/hooks/appRoute'
import { useAppStore } from '@/stores'
import { listenerRouteChange } from '@/utils/routerListener'
import { Menu } from '@arco-design/web-vue'
import { defineComponent, h, ref } from "vue";
import { useI18n } from 'vue-i18n'
import { useRouter, type RouteRecordRaw } from 'vue-router'

console.log(useAppRoute, 'useAppRoute')
export default defineComponent({
    name: 'MenuComponent',
    setup() {
        const { t } = useI18n()
        const router = useRouter()
        const { appRouteData } = useAppRoute()
        console.log(appRouteData.value.tree,'appRouteData.value.tree')
        const openKeys = ref<string[]>([])
        const selectedKey = ref<string[]>([])
        return () => (
            <div>123</div>
        )
    }
})