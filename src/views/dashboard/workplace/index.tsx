import { defineComponent } from 'vue'

import { ViewNames } from '@/types/constants'
import { Space } from '@arco-design/web-vue'
import OverView from './OverView'


export default defineComponent({
    name: ViewNames.login,
    setup() {

        return () => (
            <div class='flex'>
                <div class={['flex-1', 'overflow-hidden']}>
                    <Space size="medium" direction="vertical" fill>
                       <OverView></OverView>
                    </Space>
                </div>
                <div class="w-72 ml-4">2</div>
            </div>
        )
    }
})