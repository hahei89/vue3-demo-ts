import { createApp } from 'vue'
import store, { key } from './store/index.ts'
import router from './router/index.ts'
import '@mestoness/resetcss/dist/css/resetCss.min.css'

import Antd from 'ant-design-vue'
// 自定义主题，覆盖antd默认主题
import '@/assets/antd-reset.less'
import '@/assets/index.css'

import App from './App.vue'
const app = createApp(App)
app.config.productionTip = false
app.use(Antd).use(router).use(store, key).mount('#app')
