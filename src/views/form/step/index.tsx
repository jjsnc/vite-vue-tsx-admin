import { defineComponent } from "vue";



import { ViewNames } from '@/types/constants'


export default defineComponent({
    name: ViewNames.group,
    setup() {
        return () => (
            <div>step</div>
        )
    },

})