import { defineComponent, ref } from "vue";

import { Button, Card, Descriptions, Grid, Skeleton, Space, Typography } from '@arco-design/web-vue'
import { useI18n } from 'vue-i18n'
import useLoading from '@/hooks/loading'
import { queryInspectionList, type ServiceRecord } from '@/api/list'
import SkeletonCard from './SkeletonCard'
import { itemSpan } from '.'
import styles from './style.module.scss'
export default defineComponent({
    name: 'QualityInspection',
    setup() {
        const { t } = useI18n()
        const { loading, setLoading } = useLoading(true)
        const cardList = ref<ServiceRecord[]>([])
        const fillList = new Array(7).fill(undefined)
        const fetchData = async () => {
            try {
                const res = await queryInspectionList()
                cardList.value = res.data
            } catch (error) {
                /* empty */
            } finally {
                setLoading(false)
            }
        }
        fetchData()
        return () => (
            <div>
                <Typography.Title heading={6}>{t('cardList.tab.title.content')}</Typography.Title>
                <Grid rowGap={16} colGap={16}>
                    {loading.value ? fillList.map(() => <SkeletonCard loading={loading.value}></SkeletonCard>) : cardList.value.map(item => (
                        <Grid.Item span={itemSpan}>
                            <Card class={[styles.card]} hoverable>
                                {{
                                    title: () => <Typography.Text>{item.title}</Typography.Text>,
                                    default: () => (
                                        <>
                                            <div class={['text-[rgb(var(--gray-6))]', 'mb-4', 'mt-4']}>
                                                {item.description}
                                            </div>
                                            <Descriptions
                                                class={[styles['card-desc']]}
                                                data={item.data}
                                                layout="inline-horizontal"
                                                column={2}
                                                v-slots={{
                                                    skeleton: () => (
                                                        <Skeleton animation>
                                                            <Skeleton.Line
                                                                widths={['50%', '50%', '100%', '40%']}
                                                                rows={4}
                                                            ></Skeleton.Line>
                                                            <Skeleton.Line widths={['40%']} rows={1}></Skeleton.Line>
                                                        </Skeleton>
                                                    )
                                                }}
                                            ></Descriptions>

                                        </>
                                    ),
                                    actions: () => (
                                        <Space>
                                            <Button>{t('cardList.content.delete')}</Button>
                                            <Button type="primary">{t('cardList.content.inspection')}</Button>
                                        </Space>
                                    )
                                }}
                            </Card>
                        </Grid.Item>
                    ))
                    }
                </Grid>
            </div>
        )
    }
})