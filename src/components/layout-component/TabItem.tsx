import { useTabStore } from '@/stores'
import { defaultTab, type TabItem } from '@/stores/modules/tab'
import { ViewNames } from '@/types/constants';
import { Doption, Dropdown } from '@arco-design/web-vue'
import {
    IconClose,
    IconFolderDelete,
    IconRefresh,
    IconSwap,
    IconToLeft,
    IconToRight
} from '@arco-design/web-vue/es/icon'
import { cloneDeep } from 'lodash';


import { defineComponent, computed, withModifiers, type PropType } from "vue";

import { useI18n } from 'vue-i18n';

import { useRoute, useRouter } from 'vue-router'

import styles from './styles.modules.css'
import { ObjectFlags } from 'typescript';


enum TabActionType {
    reload = 'reload',
    current = 'current',
    left = 'left',
    right = 'right',
    others = 'others',
    all = 'all'

}


export default defineComponent({
    name: 'TabItem',
    props: {
        itemData: {
            type: Object as PropType<TabItem>,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },
    setup(props) {
        const { t } = useI18n()
        const route = useRoute()
        const router = useRouter()
        const tabStore = useTabStore()

        const tabList = computed(() => {
            return tabStore.tabList
        })
        const findCurrentRouteIndex = () => {
            return tabList.value.findIndex((el) => el.name === route.name)
        }

        const handleTabClick = () => {
            router.push({
                path: props.itemData.fullPath
            })
        }

        const handleTabClose = () => {
            tabStore.deleteTab(props.itemData.name as ViewNames)
            if (props.itemData.name === route.name) {
                const prevTab = tabList.value[props.index - 1]
                router.push({ path: prevTab.fullPath })
            }
        }

        const handleSelect = async (value: unknown) => {
            const actionType = value
            switch (actionType) {
                case TabActionType.all: {
                    tabStore.resetTabList()
                    break
                }
                case TabActionType.others: {
                    const filterList = tabList.value.filter((el, idx) => {
                        return [0, props.index].includes(idx)
                    })
                    tabStore.freshTabList(filterList)
                    break
                }
                case TabActionType.left: {
                    const currentRouteIdx = findCurrentRouteIndex()
                    const replaceList = cloneDeep(tabList.value).splice(props.index)
                    tabStore.freshTabList([defaultTab, ...replaceList]);
                    if (currentRouteIdx < props.index) {
                        router.push({ path: props.itemData.fullPath })
                    }
                    break
                }

                case TabActionType.right: {
                    const currentRouteIdx = findCurrentRouteIndex()
                    const replaceList = cloneDeep(tabList.value).splice(0, props.index + 1)
                    tabStore.freshTabList([defaultTab, ...replaceList]);
                    if (currentRouteIdx < props.index) {
                        router.push({ path: props.itemData.fullPath })
                    }
                    break
                }
                case TabActionType.reload: {
                    router.push({
                        name: ViewNames.redirect,
                        params: {
                            path: route.fullPath
                        }
                    })
                }





            }
        }














        return () => (
            <div>
                123456
            </div>
        )
    }
})