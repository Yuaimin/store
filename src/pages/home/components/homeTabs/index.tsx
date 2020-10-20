import { defineComponent, PropType } from 'vue'
import './index.scss'

import { TabsItem } from '@/pages/home/types'

export default defineComponent({
  props: {
    tabs: {
      type: Array as PropType<Array<TabsItem>>,
      default: () => []
    }
  },
  render() {
    const { tabs } = this
    return (
      <v-tabs>
        {tabs.map(item => (
          <v-tab title={item.title} />
        ))}
      </v-tabs>
    )
  }
})
