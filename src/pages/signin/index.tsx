import { defineComponent } from 'vue'
import { signin } from '@/api/public'

export default defineComponent({
  created() {
    this.signin()
  },
  methods: {
    async signin() {
      const mobile = 17600464168,
        password = '123456'
      const data = await signin({ mobile, password })
      if (!data) return
      console.log(data)
    }
  },
  render() {
    return <div class="tabbar">signin</div>
  }
})
