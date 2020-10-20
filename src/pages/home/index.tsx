import { defineComponent } from 'vue'
import './index.scss'
import homeSearch from './components/homeSearch'
import homeTabs from './components/homeTabs'
import baseSwiper from '@/components/baseSwiper'
import test from '@/components/test'

interface Data {
  show: boolean
  tabs: Array<TabsItem>
  banners: Array<string>
}

interface TabsItem {
  id: number
  title: string
}

export default defineComponent({
  components: { homeSearch, homeTabs, baseSwiper, test },
  data(): Data {
    return {
      show: false,
      tabs: [],
      banners: []
    }
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      this.$toast.loading('加载中...')
      setTimeout(() => {
        this.tabs = [
          {
            id: 0,
            title: '推荐'
          },
          {
            id: 1,
            title: '男装'
          },
          {
            id: 2,
            title: '女装'
          }
        ]

        this.banners = ['https://b2c-qingdao-img.haier-ioc.com/content/uploads/data/cycleimage/1578864927335942089.jpg', 'https://b2c-qingdao-img.haier-ioc.com/content/uploads/data/cycleimage/1580450699644154520.jpeg']

        this.$toast.clear()
        this.show = true
      }, 1000)
    }
  },
  render() {
    const slot = {
      default: () => <div>default</div>,
      header: () => <div>header</div>
    }
    const { show, tabs, banners } = this
    return show ? (
      <div class="container">
        <home-search />
        <homeTabs tabs={tabs} />
        <base-swiper banners={banners} />
        <br />
        <test v-slots={slot} />
      </div>
    ) : null
  }
})
