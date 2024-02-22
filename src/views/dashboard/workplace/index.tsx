import { defineComponent } from 'vue'

import { ViewNames } from '@/types/constants'
import { Space, Grid } from '@arco-design/web-vue'
import OverView from './OverView'
import PopularContents from '@/views/dashboard/workplace/PopularContents'
import ContentPercentage from '@/views/dashboard/workplace/ContentPercentage'


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
                                <PopularContents></PopularContents>
                            </Grid.Col>
                            <Grid.Col span={12}>
                                <ContentPercentage></ContentPercentage>
                            </Grid.Col>
                        </Grid.Row>
                    </Space>
                </div>
                <div class="w-72 ml-4">2</div>
            </div>
        )
    }
})