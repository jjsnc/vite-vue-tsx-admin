import { defineComponent, render } from 'vue'
import { RouterView } from 'vue-router'



export default defineComponent({
    name: 'MenuComponent',
    setup() {
        return () => (
            <div>
                layout
                <RouterView></RouterView>
            </div>
        )
    }
})