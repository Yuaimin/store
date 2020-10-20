import { defineComponent } from 'vue'
import './index.scss'
import homeSearch from './components/homeSearch'
import homeTabs from './components/homeTabs'
import baseSwiper from '@/components/baseSwiper'
import homeRecommend from './components/homeRecommend'
import test from '@/components/test'

import { Data } from './types'

export default defineComponent({
  components: { homeSearch, homeTabs, baseSwiper, homeRecommend, test },
  data(): Data {
    return {
      show: false,
      tabs: [],
      banners: [],
      recommend: []
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

        this.recommend = [
          {
            id: 1,
            name: '【炫研】原创新款女装西装领长袖系带显瘦时尚休闲印花中长款风衣外套女',
            image: 'https://b2c-qingdao-img.haier-ioc.com/content/uploads/images/201907/goods_img/54060_P_1563749804470.jpg_640x640.jpg',
            price: 201.9
          },
          {
            id: 1,
            name: '【炫研】原创新款女装西装领长袖系带显瘦时尚休闲印花中长款风衣外套女',
            image: 'https://b2c-qingdao-img.haier-ioc.com/content/uploads/images/201907/goods_img/54060_P_1563749804470.jpg_640x640.jpg',
            price: 200
          },
          {
            id: 1,
            name: '【炫研】原创新款女装西装领长袖系带显瘦时尚休闲印花中长款风衣外套女',
            image: 'https://b2c-qingdao-img.haier-ioc.com/content/uploads/images/201907/goods_img/54060_P_1563749804470.jpg_640x640.jpg',
            price: 200
          },
          {
            id: 1,
            name: '【炫研】原创新款女装西装领长袖系带显瘦时尚休闲印花中长款风衣外套女',
            image: 'https://b2c-qingdao-img.haier-ioc.com/content/uploads/images/201907/goods_img/54060_P_1563749804470.jpg_640x640.jpg',
            price: 200
          },
          {
            id: 1,
            name: '【炫研】原创新款女装西装领长袖系带显瘦时尚休闲印花中长款风衣外套女',
            image: 'https://b2c-qingdao-img.haier-ioc.com/content/uploads/images/201907/goods_img/54060_P_1563749804470.jpg_640x640.jpg',
            price: 200
          }
        ]

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
    const { show, tabs, banners, recommend } = this
    return show ? (
      <div class="container">
        <home-search />
        <homeTabs tabs={tabs} />
        <base-swiper banners={banners} />
        <test v-slots={slot} />
        <home-recommend product-data={recommend} />
      </div>
    ) : null
  }
})
