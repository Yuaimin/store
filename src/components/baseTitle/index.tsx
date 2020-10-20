import './index.scss'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    }
  },
  render() {
    const { title, subTitle } = this
    return (
      <div class="base-title">
        <div class="base-title-text">{title}</div>
        <div class="base-title-subtext">{subTitle}</div>
      </div>
    )
  }
})
