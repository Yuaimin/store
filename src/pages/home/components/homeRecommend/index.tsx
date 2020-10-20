import './index.scss'
import { defineComponent, PropType } from 'vue'
import { RecommendItem } from '@/pages/home/types'
import baseTitle from '@/components/baseTitle'

import { formatPrice } from '@/utils'

export default defineComponent({
  props: {
    productData: {
      type: Array as PropType<Array<RecommendItem>>,
      default: []
    }
  },
  components: { baseTitle },
  render() {
    const { productData } = this
    return (
      <div class="recommend">
        <base-title title="发现好物" subTitle="平·台·精·选" />
        <div class="recommend-container scroll-bar-none">
          <div class="recommend-container-content">
            {productData.map(item => (
              <router-link to={{ name: 'product', params: { id: item.id } }} class="recommend-container-content-item">
                <div class="recommend-container-content-item-image">
                  <img src={item.image} alt="" />
                </div>
                <div class="recommend-container-content-item-name van-multi-ellipsis--l2">{item.name}</div>
                <div class="recommend-container-content-item-price">￥{formatPrice(item.price)}</div>
              </router-link>
            ))}
          </div>
        </div>
      </div>
    )
  }
})
