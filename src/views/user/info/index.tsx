import { defineComponent } from "vue";
import { Grid, Space } from '@arco-design/web-vue'
import UserInfoHeader from "./UserInfoHeader";
import MyProject from "./MyProject";
import LatestActivities from "./LatestActivities";
import MyTeam from '@/views/user/info/MyTeam'
import InSiteNotifications from '@/views/user/info/InSiteNotifications'
export default defineComponent({
    name: '',
    setup() {
        return () => (
            <div>
                <UserInfoHeader class="mb-4" />
                <Grid.Row gutter={16}>
                    <Grid.Col span={16}>
                        <Space direction="vertical" fill size={'medium'}>
                            <MyProject></MyProject>
                            <LatestActivities></LatestActivities>
                        </Space>
                    </Grid.Col>
                    <Grid.Col span={8}>
                        <Space direction="vertical" fill size={'medium'}>
                            <MyTeam />
                            <InSiteNotifications />
                        </Space>
                    </Grid.Col>
                </Grid.Row>
            </div>
        )
    }
})