import { defineComponent } from 'vue'
import './index.scss'
import test from '@/components/test'

export default defineComponent({
  components: { test },
  data() {
    return {
      value: ''
    }
  },
  render() {
    const slot = {
      default: () => <div>default</div>,
      header: () => <div>header</div>
    }
    console.log(this)
    return (
      <div>
        <input type="text" v-model={this.value} />
        <div>{this.value}</div>
        <test v-slots={slot} />
      </div>
    )
  }
})
