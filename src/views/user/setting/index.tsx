import { defineComponent, h } from "vue";
import { Card, Grid, Tabs } from '@arco-design/web-vue'
import { useI18n } from 'vue-i18n'
import UserPanel from './UserPanel'
import BasicInformation from './BasicInformation'
import SecuritySettings from "./SecuritySettings";
import Certification from "./Certification";
export default defineComponent({
    name: '',
    setup() {
        const { t } = useI18n()
        const componentList = [
            {
                key: '1',
                component: BasicInformation,
                getTitle: () => t('userSetting.tab.basicInformation')
            },
            {
                key: '2',
                component: SecuritySettings,
                getTitle: () => t('userSetting.tab.securitySettings')
            },
            {
                key: '3',
                component: Certification,
                getTitle: () => t('userSetting.tab.certification')
            }
        ]
        return () => (
            <div>
                <Grid.Row>
                    <Grid.Col span={24}>
                        <UserPanel></UserPanel>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Col span={24} class="mt-4">
                        <Card class="general-card pt-5">
                            <Tabs type="rounded" defaultActiveKey="1">
                                {componentList.map((item) => {
                                    return (
                                        <Tabs.TabPane key={item.key} title={item.getTitle()}>
                                            {h(item.component)}
                                        </Tabs.TabPane>
                                    )
                                })}
                            </Tabs>
                        </Card>
                    </Grid.Col>
                </Grid.Row>
            </div>
        )
    }
})