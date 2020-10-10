import { defineComponent } from 'vue'
import './index.scss'

import home from '@/assets/images/tabbar/icon-home.png'
import homeActive from '@/assets/images/tabbar/icon-home-active.png'
import sort from '@/assets/images/tabbar/icon-sort.png'
import sortActive from '@/assets/images/tabbar/icon-sort-active.png'
import card from '@/assets/images/tabbar/icon-card.png'
import cardActive from '@/assets/images/tabbar/icon-card-active.png'
import user from '@/assets/images/tabbar/icon-user.png'
import userActive from '@/assets/images/tabbar/icon-user-active.png'

export default defineComponent({
  data() {
    return {
      menu: [
        {
          name: '首页',
          routerNmae: 'home',
          icon: home,
          iconActive: homeActive
        },
        {
          name: '分类',
          routerNmae: 'sort',
          icon: sort,
          iconActive: sortActive
        },
        {
          name: '购物车',
          routerNmae: 'card',
          icon: card,
          iconActive: cardActive
        },
        {
          name: '我的',
          routerNmae: 'user',
          icon: user,
          iconActive: userActive
        }
      ]
    }
  },
  render() {
    return (
      <div class="tabbar">
        {this.menu.map(item => (
          <router-link class="tabbar-item" to={{ name: item.routerNmae }}>
            <img class="tabbar-item-icon default" src={item.icon} alt="" />
            <img class="tabbar-item-icon active" src={item.iconActive} alt="" />
            <div class="tabbar-item-text">{item.name}</div>
          </router-link>
        ))}
      </div>
    )
  }
})
