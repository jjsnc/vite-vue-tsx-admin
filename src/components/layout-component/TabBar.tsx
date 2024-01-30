import { defineComponent, computed, onUnmounted, ref, watch } from "vue";

import useTabStore from '@/stores/modules/tab/index'
import { layoutStyleConfig } from "@/types/constants";
import { listenerRouteChange, removeRouteListener } from '@/utils/routerListener'
import { Affix } from "@arco-design/web-vue";
import type { RouteLocationNormalized } from "vue-router";


export default defineComponent({
    name: 'TabBar',
    setup() {
        return () => (
            <div>666666</div>

        )
    }
})