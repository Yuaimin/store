import { defineComponent } from 'vue'

export default defineComponent({
  render() {
    return <div class="test">{this.$slots.default}</div>
  }
})
