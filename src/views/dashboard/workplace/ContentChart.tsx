import { defineComponent, ref } from "vue";
import { Spin, Card, Link } from '@arco-design/web-vue'
import useLoading from '@/hooks/loading'
import { useI18n } from 'vue-i18n'
import ChartComponent from '@/components/chart-component'
import useChartOption from '@/hooks/chartOption'
import type { AnyObject } from '@/types/global'
import { graphic } from 'echarts'
import { queryContentData, type ContentDataRecord } from '@/api/dashboard'
export default defineComponent({
    name: 'ContentChar',
    setup() {
        const { loading, setLoading } = useLoading(true)
        const { t } = useI18n()
        const xAxis = ref<string[]>([])
        const chartsData = ref<number[]>([])
        const fetchData = async () => {
            try {
                const { data: chartData } = await queryContentData()

                chartData.forEach((el: ContentDataRecord, idx: number) => {
                    xAxis.value.push(el.x)
                    chartsData.value.push(el.y)
                    if (idx === 0) {
                        graphicElements.value[0].style.text = el.x
                    }
                    if (idx === chartData.length - 1) {
                        graphicElements.value[1].style.text = el.x
                    }
                })
            } catch (err) {
                /* empty */
            } finally {
                setLoading(false)
            }
        }

        fetchData();
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
        const { chartOption } = useChartOption(() => {
            return {
                grid: {
                    left: '5.6%',
                    right: 0,
                    top: '10',
                    bottom: '30'
                },
                xAxis: {
                    type: 'category',
                    offset: 2,
                    data: xAxis.value,
                    boundaryGap: false,
                    axisLabel: {
                        color: '#4E5969',
                        formatter(value: number, idx: number) {
                            if (idx === 0) return ''
                            if (idx === xAxis.value.length - 1) return ''
                            return `${value}`
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: true,
                        interval: (idx: number) => {
                            if (idx === 0) return false
                            if (idx === xAxis.value.length - 1) return false
                            return true
                        },
                        lineStyle: {
                            color: '#E5E8EF'
                        }
                    },
                    axisPointer: {
                        show: true,
                        lineStyle: {
                            color: '#23ADFF',
                            width: 2
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        formatter(value: any, idx: number) {
                            if (idx === 0) return value
                            return `${value}k`
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            type: 'dashed',
                            color: '#E5E8EF'
                        }
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    formatter(params) {
                        const [firstElement] = params as any[]
                        return `<div>
                      <p class="tooltip-title">${firstElement.axisValueLabel}</p>
                      <div class="content-panel"><span>总内容量</span><span class="tooltip-value">${(
                                Number(firstElement.value) * 10000
                            ).toLocaleString()}</span></div>
                    </div>`
                    },
                    className: 'echarts-tooltip-diy'
                },
                graphic: {
                    elements: graphicElements.value
                },
                series: [
                    {
                        data: chartsData.value,
                        type: 'line',
                        smooth: true,
                        symbolSize: 12,
                        emphasis: {
                            focus: 'series',
                            itemStyle: {
                                borderWidth: 2
                            }
                        },
                        lineStyle: {
                            width: 3,
                            color: new graphic.LinearGradient(0, 0, 1, 0, [
                                {
                                    offset: 0,
                                    color: 'rgba(30, 231, 255, 1)'
                                },
                                {
                                    offset: 0.5,
                                    color: 'rgba(36, 154, 255, 1)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(111, 66, 251, 1)'
                                }
                            ])
                        },
                        showSymbol: false,
                        areaStyle: {
                            opacity: 0.8,
                            color: new graphic.LinearGradient(0, 0, 0, 1, [
                                {
                                    offset: 0,
                                    color: 'rgba(17, 126, 255, 0.16)'
                                },
                                {
                                    offset: 1,
                                    color: 'rgba(17, 128, 255, 0)'
                                }
                            ])
                        }
                    }
                ]
            }
        })
        console.log(chartOption.value,'123')


        return () => (
            <Spin loading={loading.value} class="w-full">
                <Card
                    bordered={false}
                    title={t('workplace.contentData')}
                    v-slots={{
                        extra: () => <Link>{t('workplace.viewMore')}</Link>
                    }}
                >
                    <ChartComponent  height="410px" options={chartOption.value}  />

                </Card>
            </Spin>
        )
    }
})