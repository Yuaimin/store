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
  methods: {
    change(event: Event) {
      console.log(event)
    }
  },
  render() {
    const slot = {
      default: () => <div>default</div>,
      header: () => <div>header</div>
    }
    return (
      <div>
        <input type="text" v-model={this.value} onInput={this.change} />
        <div>{this.value}</div>
        <test v-slots={slot} />
      </div>
    )
  }
})
