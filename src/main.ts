import { createApp } from 'vue'
import App from './App.vue'
import store, { key } from './store/index'
import router from './router/index'
import '@mestoness/resetcss/dist/css/resetCss.min.css'
// 富文本编辑器
import VMdEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
// Prism
import Prism from 'prismjs'
// highlight code
import 'prismjs/components/prism-json'

import Antd from 'ant-design-vue'
// 自定义主题，覆盖antd默认主题
import '@/assets/antd-reset.less'
import '@/assets/index.css'

VMdEditor.use(vuepressTheme, {
  Prism
})


const app = createApp(App)
app
  .use(VMdEditor)
  .use(Antd)
  .use(router)
  .use(store, key)
  .mount('#app')
