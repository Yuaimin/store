import 'amfe-flexible'
import 'reset.css'
import 'vant/lib/index.css'

import { createApp } from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'

import ui from '@/plugins/ui'
import { Toast } from 'vant'

Toast.setDefaultOptions('loading', { forbidClick: true, duration: 0, loadingType: 'spinner' })

createApp(App)
  .use(store)
  .use(router)
  .use(ui)
  .use(Toast)
  .mount('#app')
