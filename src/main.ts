import { createApp } from 'vue'
import './assets/css/main.css'
import './assets/css/style.css'
import App from './App.vue'
import router from "./router";
import DataVVue3 from '@kjgl77/datav-vue3'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// 引入路由，开始使用
app.use(router)
// 全局引入DataV
app.use(DataVVue3)
// 全局引入ElementPlus
app.use(ElementPlus)

app.mount('#app')
