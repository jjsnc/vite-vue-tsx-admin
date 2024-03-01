import { defineComponent, ref } from "vue";
import { ViewNames } from '@/types/constants'
import {
    Button,
    Card,
    Form,
    Grid,
    Input,
    InputNumber,
    Message,
    Select,
    Space,
    Textarea,
    type FormInstance
} from '@arco-design/web-vue'

import { useI18n } from 'vue-i18n'
import { submitGroupForm, type GroupFormModel } from '@/api/form'

import useLoading from '@/hooks/loading'
import { isEmpty } from 'lodash'

export default defineComponent({
    name: ViewNames.group,
    setup() {
        const { t } = useI18n()
        const { loading, setLoading } = useLoading()

        const formRef = ref<FormInstance>()
        const formData = ref({
            video: {
                mode: undefined,
                acquisition: {
                    resolution: undefined,
                    frameRate: undefined
                },
                encoding: {
                    resolution: undefined,
                    rate: {
                        min: undefined,
                        max: undefined,
                        default: undefined
                    },
                    frameRate: undefined,
                    profile: undefined
                }
            },
            audio: {
                mode: undefined,
                acquisition: {
                    channels: undefined
                },
                explanation: undefined,
                encoding: {
                    channels: undefined,
                    rate: undefined,
                    profile: undefined
                }
            }
        })
        const handleSubmit = async () => {
            formRef.value?.validate().then(async (errors) => {
                if (isEmpty(errors)) {
                    try {
                        setLoading(true)
                        await submitGroupForm(formData.value as unknown as GroupFormModel)
                        Message.success('提交成功')
                    } catch (e) {
                        /* empty */
                    } finally {
                        setLoading(false)
                    }
                }
            })
        }
        const handleReset = () => {
            formRef.value?.resetFields()
        }
        return () => (
            <div>
                <Form layout="vertical" model={formData.value} ref={formRef}>
                    <Space size="medium" direction="vertical">
                        <Card class="general-card" title={t('groupForm.title.video')}>

                    
                        </Card>
                    </Space>

                </Form>
                <div
                    style={{
                        boxShadow: '0 -3px 12px rgba(0,0,0,.1)'
                    }}
                    class={[
                        'fixed',
                        'bottom-0',
                        'left-0',
                        'right-0',
                        'text-right',
                        'p-5',
                        'bg-[color:var(--color-bg-2)]'
                    ]}
                >
                    <Space>
                        <Button onClick={handleReset} size="large">
                            {t('groupForm.reset')}
                        </Button>
                        <Button type="primary" loading={loading.value} onClick={handleSubmit} size="large">
                            {t('groupForm.submit')}
                        </Button>
                    </Space>
                </div>
            </div>
        )
    },

})