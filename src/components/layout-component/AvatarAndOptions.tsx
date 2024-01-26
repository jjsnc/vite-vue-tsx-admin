import { computed, defineComponent } from "vue";

import { useUserStore } from '@/stores'
import { ViewNames } from '@/types/constants'
import { Avatar, Dropdown, Message, Space } from '@arco-design/web-vue'
import { IconExport, IconSettings, IconTag, IconUser } from '@arco-design/web-vue/es/icon'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import useAuth from '@/hooks/auth'
export default defineComponent({
    name: 'AvatarAndOptions',
    setup() {
        const { t } = useI18n()
        const userStore = useUserStore()
        const { logoutApp } = useAuth()
        const router = useRouter()
        const handleLogout = async () => {
            try {
                await logoutApp()
                Message.success('登出成功')
                router.push({ name: ViewNames.login })
            } finally {
                /* empty */
            }
        }

        const switchRole = () => {
            userStore
                .switchRoles()
                .then((res) => {
                    if (res) Message.success(res)
                })
                .catch(() => {
                    Message.error('切换失败')
                })
        }
        const optionList = computed(() => [
            {
                label: t('messageBox.switchRoles'),
                onClick: switchRole,
                icon: <IconTag />
            },
            {
                label: t('messageBox.userCenter'),
                onClick: () => {
                    router.push({ name: ViewNames.info })
                },
                icon: <IconUser />
            },
            {
                label: t('messageBox.userSettings'),
                onClick: () => {
                    router.push({ name: ViewNames.setting })
                },
                icon: <IconSettings />
            },
            {
                label: t('messageBox.logout'),
                onClick: handleLogout,
                icon: <IconExport />
            }
        ])
        return () => (

            <Dropdown trigger="click">
                {{
                    default: () => (
                        <Avatar size={32} class={['cursor-pointer', 'mr-2']}>
                            <img
                                alt="avatar"
                                src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fsafe-img.xhscdn.com%2Fbw1%2F5d88a972-1b34-43ed-8b3a-4a7ebbb900a1%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fsafe-img.xhscdn.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1708845403&t=aeba5280a97b12418c67a59bcfbcc946"
                            />
                        </Avatar>
                    ),
                    content: () => {
                        return optionList.value.map(item => (
                            <Dropdown.Option onClick={item.onClick}>
                                <Space>
                                    {item.icon}
                                    <span>{item.label}</span>
                                </Space>

                            </Dropdown.Option>
                        ))
                    }

                }}
            </Dropdown>

        )
    }
})