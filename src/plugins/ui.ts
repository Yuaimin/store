import { App } from 'vue'
import { Tabs, Tab, Swipe, SwipeItem } from 'vant'

export default {
  install(Vue: App): void {
    Vue.component('v-tabs', Tabs)
    Vue.component('v-tab', Tab)
    Vue.component('v-swiper', Swipe)
    Vue.component('v-swiper-item', SwipeItem)
  }
}
