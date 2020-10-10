import { defineComponent } from 'vue'
import baseTabbar from '@/components/baseTabbar'

export default defineComponent({
  components: { baseTabbar },
  render() {
    return (
      <div class="page">
        <div class="page-container">
          <router-view />
        </div>
        <base-tabbar />
      </div>
    )
  }
})
