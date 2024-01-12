import './assets/main.css'

import { createApp } from 'vue'


import App from './App'
import router from './router'
import store from '@/stores/index'
import i18n from './locale'
const app = createApp(App)

app.use(i18n)
app.use(router)
app.use(store)


app.mount('#app')
