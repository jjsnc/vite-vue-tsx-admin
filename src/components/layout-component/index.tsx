import { useAppStore, useUserStore } from '@/stores'
import { ViewNames, layoutStyleConfig } from '@/types/constants'
import { Layout } from '@arco-design/web-vue'
import { computed, defineComponent, watch } from 'vue'
import BreadcrumbComponent from './BreadcrumbComponent'
import FooterComponent from './FooterComponent'
import MenuComponent from './MenuComponent'
import Navbar from './Navbar'




import { RouterView } from 'vue-router'



export default defineComponent({
    name: 'MenuComponent',
    setup() {
        return () => (
            <div>
                {/* <BreadcrumbComponent></BreadcrumbComponent>
                <FooterComponent></FooterComponent>
                <MenuComponent></MenuComponent> */}
                <Navbar></Navbar>
                <RouterView></RouterView>
            </div>
        )
    }
})