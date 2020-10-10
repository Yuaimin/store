import 'amfe-flexible'
import { createApp } from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'

import ui from '@/plugins/ui'

import 'reset.css'
import 'vant/lib/index.css'

createApp(App)
  .use(store)
  .use(router)
  .use(ui)
  .mount('#app')
