import { defineComponent } from "vue";
import { Card, Input, Tabs, Typography } from '@arco-design/web-vue'

import { useI18n } from 'vue-i18n'
import QualityInspection from './QualityInspection'
import TheService from './TheService'
export const itemSpan = {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 8,
    xl: 8,
    xxl: 6
} as const
export default defineComponent({
    name: 'card-list',
    setup() {
        const { t } = useI18n()
        const tabList = [
            {
                getTitle: () => t('cardList.tab.title.all'),
                value: 1,
                pane: (
                    <>
                        <QualityInspection />
                        <TheService></TheService>
                    </>
                )
            },
            {
                getTitle: () => t('cardList.tab.title.content'),
                value: 2,

                pane: (
                    <>
                        <QualityInspection />
                    </>
                )
            },
            {
                getTitle: () => t('cardList.tab.title.service'),
                value: 3,
                pane: (
                    <>
                        <div>123</div>
                    </>
                )
            },
            {
                getTitle: () => t('cardList.tab.title.preset'),
                value: 4,
                pane: (
                    <>
                        <div>123</div>
                    </>
                )
            }
        ]

        return () => (
            <div>
                <Card
                    class="general-card"
                    v-slots={{
                        title: () => <Typography.Title heading={6}>{t('menu.list.cardList')}</Typography.Title>
                    }}
                >
                    <Tabs
                        type="rounded"
                        defaultActiveKey={1}
                        v-slots={{
                            extra: () => (
                                <Input placeholder={t('cardList.searchInput.placeholder')} class="w-60" />
                            )
                        }}
                    >
                        {
                            tabList.map(tab => (
                                <Tabs.TabPane key={tab.value} title={tab.getTitle()}>
                                    {tab.pane}
                                </Tabs.TabPane>
                            ))
                        }


                    </Tabs>

                </Card>
            </div>
        )
    }
})