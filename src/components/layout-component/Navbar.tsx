import { defineComponent } from "vue";
import Logo from '@/assets/logo.svg'
import useLocale from '@/hooks/locale';
import { useAppStore } from '@/stores'
import { ApplicationInfo, LocaleOptions, layoutStyleConfig } from '@/types/constants'
import { Button, Input, Select, Space, Tooltip, Typography } from '@arco-design/web-vue'
import {
    IconFullscreen,
    IconFullscreenExit,
    IconLanguage,
    IconMoonFill,
    IconSettings,
    IconSunFill
} from '@arco-design/web-vue/es/icon'
import { useFullscreen } from '@vueuse/core'
import { isString } from 'lodash'
import { useI18n } from 'vue-i18n'
import AvatarAndOptions from './AvatarAndOptions'

export default defineComponent({
    setup() {
        return () => (
            <div>hello
                <AvatarAndOptions></AvatarAndOptions>
            </div>
        )
    }
})