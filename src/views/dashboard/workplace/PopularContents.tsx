import { defineComponent, ref, watch } from "vue";
import { Spin, Card, Link, Space, RadioGroup,Table } from '@arco-design/web-vue'
import useLoading from '@/hooks/loading'
import { useI18n } from 'vue-i18n'
import { queryPopularList } from '@/api/dashboard'
import type { TableData } from '@arco-design/web-vue/es/table/interface'
import { IconCaretDown, IconCaretUp } from '@arco-design/web-vue/es/icon'
export default defineComponent({
    name: 'PopularContents',
    setup() {
        const { t } = useI18n()
        const { loading, setLoading } = useLoading()
        const sourceType = ref<string>('text')
        const tableData = ref<TableData[]>()
        const fetchData = async (contentType: string) => {
            try {
                setLoading(true)
                const { data } = await queryPopularList({ type: contentType })
                tableData.value = data
            } catch (err) {
                // you can report use errorHandler or other
            } finally {
                setLoading(false)
            }
        }
        fetchData(sourceType.value)
        const columns = [
            {
                title: '排名',
                dataIndex: 'key',
                width: 65
            },
            {
                title: '内容标题',
                dataIndex: 'title',
                render: ({ record }: { record: TableData }) => <span>{record.title}</span>
            },
            {
                title: '点击量',
                dataIndex: 'clickNumber'
            },
            {
                title: '日涨幅',
                dataIndex: 'increases',

                render: ({ record }: { record: TableData }) => {
                    return (
                        <Space size="small">
                            <span>{record.increases}%</span>
                            {record.increases > 20 ? (
                                <IconCaretUp class={['text-xs', 'text-[red]']} />
                            ) : (
                                record.increases !== 0 && <IconCaretDown class={['text-xs', 'text-[green]']} />
                            )}
                        </Space>
                    )
                }
            }
        ]
        watch(sourceType, () => {
            fetchData(sourceType.value)
        })
        return () => (
            <Spin loading={loading.value} class="w-full">
                <Card class="general-card" title={t('workplace.popularContent')}>
                    {{
                        extra: () => <Link>{t('workplace.viewMore')}</Link>,
                        default: () => (
                            <Space size={10} direction="vertical" fill>
                                <RadioGroup
                                    type="button"
                                    v-model={sourceType.value}
                                    options={[
                                        { label: t('workplace.popularContent.text'), value: 'text' },
                                        { label: t('workplace.popularContent.image'), value: 'image' },
                                        { label: t('workplace.popularContent.video'), value: 'video' }
                                    ]}
                                ></RadioGroup>
                                <Table
                                    bordered={false}
                                    data={tableData.value}
                                    tableLayoutFixed
                                    pagination={false}
                                    columns={columns}
                                ></Table>
                            </Space>
                        )
                    }}
                </Card>
            </Spin>
        )
    }
})