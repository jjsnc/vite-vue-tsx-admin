import { defineComponent } from "vue";
import { Card, Grid, Tabs } from '@arco-design/web-vue'
import UserPanel from './UserPanel'
export default defineComponent({
    name: '',
    setup() {
        return () => (
            <div>
                <Grid.Row>
                    <Grid.Col span={24}>
                        <UserPanel></UserPanel>
                    </Grid.Col>
                </Grid.Row>
                <Grid.Row></Grid.Row>
            </div>
        )
    }
})