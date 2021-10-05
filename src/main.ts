import { createApp } from 'vue'
import router from './router/index.ts'
import 'ant-design-vue/dist/antd.css'
import Antd from 'ant-design-vue'

import App from './App.vue'
const app = createApp(App)
app.config.productionTip = false
app.use(Antd).use(router).mount('#app')
