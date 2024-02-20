import { defineComponent } from 'vue'

import { ViewNames } from '@/types/constants'
import { Space, Grid } from '@arco-design/web-vue'
import OverView from './OverView'


export default defineComponent({
    name: ViewNames.login,
    setup() {

        return () => (
            <div class='flex'>
                <div class={['flex-1', 'overflow-hidden']}>
                    <Space size="medium" direction="vertical" fill>
                        <OverView></OverView>
                        <Grid.Row gutter={16}>
                            <Grid.Col span={12}>
                                123456
                            </Grid.Col>
                            <Grid.Col span={12}>
                                654321
                            </Grid.Col>
                        </Grid.Row>
                    </Space>
                </div>
                <div class="w-72 ml-4">2</div>
            </div>
        )
    }
})