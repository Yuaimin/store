import './index.scss'
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    banners: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      currentKeys: 0
    }
  },
  methods: {
    swiperChange(key: number) {
      this.currentKeys = key
    }
  },
  render() {
    const { banners, swiperChange, currentKeys } = this

    const slot = {
      indicator: () => (
        <div class="swiper-indicator">
          {banners.map((item, keys) => (
            <div class={{ 'swiper-indicator-item': true, active: keys === currentKeys }}></div>
          ))}
        </div>
      )
    }
    return (
      <div class="swiper">
        <v-swiper autoplay={3000} indicator-color="white" v-slots={slot} onChange={swiperChange}>
          {banners.map(item => (
            <v-swiper-item>
              <img src={item as string} alt="" />
            </v-swiper-item>
          ))}
        </v-swiper>
      </div>
    )
  }
})
