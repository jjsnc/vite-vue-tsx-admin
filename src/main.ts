import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';

import '@arco-design/web-vue/dist/arco.css';
import './assets/style/index.scss'

import App from './App'
import router from './router'
import store from '@/stores/index'
import i18n from './locale'

const app = createApp(App)

app.use(i18n)
app.use(ArcoVue)
app.use(store)
app.use(router)


app.mount('#app')
