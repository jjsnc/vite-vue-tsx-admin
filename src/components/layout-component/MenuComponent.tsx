import useAppRoute from '@/hooks/appRoute'
import { defineComponent } from "vue";



console.log(useAppRoute,'useAppRoute')
export default defineComponent({
    name: 'MenuComponent',
    setup() {
     return ()=>(
        <div>123</div>
     )
    }
})