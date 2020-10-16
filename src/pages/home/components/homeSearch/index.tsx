import { defineComponent } from 'vue'
import './index.scss'
import searchIcon from '@images/public/icon-search.png'
import messageIcon from '@images/home/icon-message.png'

export default defineComponent({
  render() {
    return (
      <div class="header">
        <router-link class="header-search" to={{ name: 'search' }}>
          <img class="header-search-icon" src={searchIcon} alt="" />
          <div class="header-search-text">寻找你想要的</div>
        </router-link>
        <div class="header-message">
          <img class="header-message-icon" src={messageIcon} alt="" />
          <div class="header-message-subscript">9</div>
        </div>
      </div>
    )
  }
})
