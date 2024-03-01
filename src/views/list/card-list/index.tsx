import { defineComponent } from "vue";
import { Card, Input, Tabs, Typography } from '@arco-design/web-vue'

import { useI18n } from 'vue-i18n'
export default defineComponent({
    name: 'card-list',
    setup() {
        const { t } = useI18n()
        
        return () => (
            <div>
                <Card
                    class="general-card"
                    v-slots={{
                        title: () => <Typography.Title heading={6}>{t('menu.list.cardList')}</Typography.Title>
                    }}
                ></Card>
            </div>
        )
    }
})