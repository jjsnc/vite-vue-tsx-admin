import { defineComponent, ref } from "vue";
import {
    Avatar,
    Badge,
    Button,
    Card,
    Checkbox,
    Divider,
    Dropdown,
    Link,
    Popover,
    Space,
    Table,
    Tooltip,
    Upload,
    type PaginationProps,
    type TableColumnData
} from '@arco-design/web-vue'
import { useI18n } from 'vue-i18n'
import useLoading from '@/hooks/loading'
import TableSearchForm from './TableSearchForm'
import { queryPolicyList, type PolicyQuery, type PolicyRecord } from '@/api/list'
import { type Pagination } from '@/types/global'
export default defineComponent({
    name: 'search-table',
    setup() {
        const { t } = useI18n()
        const { loading, setLoading } = useLoading()

        const initPagination: Pagination = {
            current: 1,
            pageSize: 20
        }
        const paginationConfig = ref<PaginationProps & Pagination>({
            ...initPagination,
            showTotal: true
        })
        const resetPagination = () => {
            paginationConfig.value = {
                ...paginationConfig.value,
                ...initPagination
            }
        }
        const searchQuery = ref<PolicyQuery>({
            number: '',
            name: '',
            contentType: '',
            filterType: '',
            createdTime: [],
            status: ''
        })
        const renderData = ref<PolicyRecord[]>([])
        const fetchData = async () => {
            setLoading(true)
            try {
                const query = searchQuery.value
                const params = {
                    ...query,
                    current: paginationConfig.value.current,
                    pageSize: paginationConfig.value.pageSize
                }
                const { data } = await queryPolicyList(params)

                renderData.value = data.list
                paginationConfig.value.total = data.total
            } catch (err) {
                // you can report use errorHandler or other
            } finally {
                setLoading(false)
            }
        }
        fetchData()

        const handleQuerySearch = () => {
            resetPagination()
            fetchData()
        }
        return () => (
            <div>
                <Card class="general-card " title={t('menu.list.searchTable')}>
                    <TableSearchForm
                        searchLoading={loading.value}
                        searchQuery={searchQuery.value}
                        onOnSearch={handleQuerySearch}
                    ></TableSearchForm>
                </Card>
            </div>
        )
    }
})