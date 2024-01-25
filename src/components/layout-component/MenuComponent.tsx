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
        console.log(appRouteData.value.tree, 'appRouteData.value.tree')
        const openKeys = ref<string[]>([])
        const selectedKey = ref<string[]>([])
        const renderMenuContent = () => {
            const traverse = (routeList: any) => {
                let list = []
                for (let i = 0; i < routeList.length; i++) {
                    const route = routeList[i]
                    if (route.chileren == undefined) {
                        list.push(
                            <Menu.Item key={route.name as string} onClick={() => handleMenuItemClick(route)}></Menu.Item>
                        )
                    } else {
                        list.push(
                            <Menu.SubMenu
                                key={route.name as string}
                                v-slots={{
                                    icon: () => h(route.icon),
                                    title: () => t(route.locale)
                                }}
                            >

                            </Menu.SubMenu>
                        )
                    }

                }
            }

            return traverse(appRouteData.value.tree)
        }
        const handleMenuItemClick = (item: RouteRecordRaw) => {
            router.push({
                name: item.name
            })
        }
        return () => (
            <div>123</div>
        )
    }
})