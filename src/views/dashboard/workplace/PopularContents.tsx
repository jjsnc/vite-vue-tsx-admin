import { defineComponent } from "vue";
import { Spin, Card } from '@arco-design/web-vue'
import useLoading from '@/hooks/loading'
import { useI18n } from 'vue-i18n'
export default defineComponent({
    name: 'PopularContents',
    setup() {
        const { t } = useI18n()
        const { loading, setLoading } = useLoading()
        return () => (
            <Spin loading={loading.value} class="w-full">
                <Card class="general-card" title={t('workplace.popularContent')}>

                </Card>
            </Spin>
        )
    }
})