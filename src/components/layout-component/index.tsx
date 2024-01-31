import { useAppStore, useUserStore } from '@/stores'
import { ViewNames, layoutStyleConfig } from '@/types/constants'
import { Layout } from '@arco-design/web-vue'
import { computed, defineComponent, watch } from 'vue'
import BreadcrumbComponent from './BreadcrumbComponent'
import FooterComponent from './FooterComponent'
import MenuComponent from './MenuComponent'
import Navbar from './Navbar'
import styles from './style.module.scss'
import AppSetting from './AppSetting'
import usePermission from '@/hooks/permission'
import RouterView, { useRoute, useRouter, } from 'vue-router'
import TabBar from './TabBar'




export default defineComponent({
    name: 'LayoutComponent',
    setup() {
        const appStore = useAppStore()
        const paddingStyle = computed(() => {
            const paddingLeft = appStore.menu ? { paddingLeft: `${siderWidth.value}px` } : {}
            const paddingTop = appStore.navbar ? { paddingTop: layoutStyleConfig.navbarHeight + 'px' } : {}
            return {
                ...paddingLeft,
                ...paddingTop
            }
        })
        const siderWidth = computed(() => {
            return appStore.menuCollapse ? 48 : appStore.menuWidth
        })
        const route = useRoute()
        const router = useRouter()
        const userStore = useUserStore()
        const permission = usePermission()
        watch(
            () => userStore.role,
            (roleValue) => {
                if (roleValue && !permission.checkRoutePermission(route))
                    router.push({ name: ViewNames.notFound })
            }
        )

        return () => (
            <>
                <Layout>
                    {appStore.navbar && <Navbar />}
                    <Layout>
                        {appStore.menu && (
                            <Layout.Sider
                                class={[styles.sider]}
                                style={{
                                    paddingTop: paddingStyle.value.paddingTop
                                }}
                                width={siderWidth.value}
                                breakpoint="xl"
                                collapsible
                                hideTrigger
                                collapsed={appStore.menuCollapse}
                                onCollapse={(val) => (appStore.menuCollapse = val)}
                            >
                                <MenuComponent></MenuComponent>
                            </Layout.Sider>
                        )}
                        <Layout class={[styles.maim]} style={paddingStyle.value}>
                           <TabBar></TabBar>
                           <BreadcrumbComponent class={['px-5']} />
                        </Layout>
                    </Layout>
                </Layout>

            </>

        )
    }
})