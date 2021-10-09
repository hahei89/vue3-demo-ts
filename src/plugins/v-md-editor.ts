// plugin for v-md-editor
import { App } from 'vue'
// 富文本编辑器
import VMdEditor from '@kangc/v-md-editor'
import '@kangc/v-md-editor/lib/style/base-editor.css'
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js'
import '@kangc/v-md-editor/lib/theme/style/vuepress.css'
// Prism
import Prism from 'prismjs'
// highlight code
import 'prismjs/components/prism-json'

export default function (app: App) {
  VMdEditor.use(vuepressTheme, {
    Prism
  })
  app.use(VMdEditor)
  return app
}
