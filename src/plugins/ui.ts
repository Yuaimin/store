import { App } from 'vue'
import { Button, NumberKeyboard } from 'vant'

export default {
  install(Vue: App): void {
    Vue.component('v-button', Button)
    Vue.component('v-number-keyboard', NumberKeyboard)
  }
}
