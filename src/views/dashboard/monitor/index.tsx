import { defineComponent } from 'vue'
import { ViewNames } from '@/types/constants'
import { Grid, Space } from '@arco-design/web-vue'
import ChatPanel from './ChatPanel'
import LivePanel from './LivePanel'

export default defineComponent({
    name: ViewNames.login,
    setup() {

        return () => (
            <Grid.Row gutter={16}>
                <Grid.Col flex="300px">
                  <ChatPanel></ChatPanel>
                </Grid.Col>
                <Grid.Col flex={1}>
                     <LivePanel></LivePanel>
                </Grid.Col>
                <Grid.Col flex="280px">
                    右侧
                </Grid.Col>
            </Grid.Row>
        )
    }
})