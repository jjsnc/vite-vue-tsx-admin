import { defineComponent, ref } from "vue";
import { type LoginData } from '@/api/user'
import useAuth from '@/hooks/auth';
import useLoading from '@/hooks/loading';
import { ApplicationInfo, LocalStorageKey } from '@/types/constants';
import {
    Button,
    Checkbox,
    Form,
    Input,
    Link,
    Message,
    Space,
    Typography,
    type FieldRule,
    type ValidatedError
} from '@arco-design/web-vue'

import { IconLock, IconUser } from '@arco-design/web-vue/es/icon'
import { useStorage } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Logo from '@/assets/logo.svg'



export default defineComponent({
    name: 'loginForm',
    setup() {



        return () => (
            <div>login form </div>
        )
    }
})