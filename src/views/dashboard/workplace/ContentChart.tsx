import { defineComponent, ref } from "vue";
import { Spin, Card, Link } from '@arco-design/web-vue'
import useLoading from '@/hooks/loading'
import { useI18n } from 'vue-i18n'
import ChartComponent from '@/components/chart-component'
import type { AnyObject } from '@/types/global'
export default defineComponent({
    name: 'ContentChar',
    setup() {
        const { loading, setLoading } = useLoading(true)
        const { t } = useI18n()
        const xAxis = ref<string[]>([])
        const chartsData = ref<number[]>([])
        function graphicFactory(side: AnyObject) {
            return {
                type: 'text',
                bottom: '8',
                ...side,
                style: {
                    text: '',
                    textAlign: 'center',
                    fill: '#4E5969',
                    fontSize: 12
                }
            }
        }
        const graphicElements = ref([graphicFactory({ left: '2.6%' }), graphicFactory({ right: 0 })])
        return () => (
            <Spin loading={loading.value} class="w-full">
                <Card
                    bordered={false}
                    title={t('workplace.contentData')}
                    v-slots={{
                        extra: () => <Link>{t('workplace.viewMore')}</Link>
                    }}
                >
                    <ChartComponent />

                </Card>
            </Spin>
        )
    }
})