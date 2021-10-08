import { createApp } from 'vue'
import App from './App.vue'
import store, { key } from './store/index'
import router from './router/index'
import '@mestoness/resetcss/dist/css/resetCss.min.css'

import Antd from 'ant-design-vue'
// 自定义主题，覆盖antd默认主题
import '@/assets/antd-reset.less'
import '@/assets/index.css'

const app = createApp(App)
app.use(Antd).use(router).use(store, key).mount('#app')
