import { defineComponent } from 'vue'
import './index.scss'

interface TabsItem {
  id: number
  title: string
}

export default defineComponent({
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  render() {
    const { tabs } = this
    return (
      <v-tabs>
        {tabs.map(item => (
          <v-tab title={(item as TabsItem).title} />
        ))}
      </v-tabs>
    )
  }
})