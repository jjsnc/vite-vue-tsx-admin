import { useTabStore } from "@/stores";
import { get } from 'lodash'


import { defineComponent, KeepAlive, Transition, type VNode } from "vue";

import { RouterView, type RouteLocationNormalizedLoaded } from "vue-router";


export default defineComponent({
    name: 'PageComponent',
    setup() {
        const tabStore = useTabStore()
        return (
            <RouterView>
                {({ Component, route }: { Component: VNode; route: RouteLocationNormalizedLoaded }) => {
                    <Transition appear>
                        {
                            get(route, 'meta.ignoreCache') === true ? (Component) : (
                                <KeepAlive include={tabStore.getCacheList}>{Component}</KeepAlive>
                            )
                        }
                    </Transition>
                }}
            </RouterView>
        )
    }
})