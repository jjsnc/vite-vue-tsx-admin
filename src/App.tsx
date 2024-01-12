import { ConfigProvider } from '@arco-design/web-vue'
import { defineComponent, computed } from "vue";
import { RouterView } from 'vue-router'

import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn'
import enUS from '@arco-design/web-vue/es/locale/lang/en-us'
import { LocaleOptions } from './types/constants'
import { useAppStore } from './stores'
import useLocale from './hooks/locale'

export default defineComponent({
    name: 'app',
    setup() {
        const appStore = useAppStore();
        const arcoLocaleMap = {
            [LocaleOptions.cn]: zhCN,
            [LocaleOptions.en]: enUS
        }

        const { currentLocale } = useLocale();

        const arcoLocale = computed(() => {
            switch (currentLocale.value) {
                case LocaleOptions.cn:
                case LocaleOptions.en:
                    return arcoLocaleMap[currentLocale.value]
                default:
                    return enUS
            }
        })



        console.log(useLocale(), 'useLocale currentLocale')


        return () => {
            <ConfigProvider locale={arcoLocale.value}>
                <RouterView />
            </ConfigProvider>
        }
    }
})