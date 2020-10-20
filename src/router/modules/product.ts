export default {
  path: '/product/:id',
  name: 'product',
  component: () => import('@/pages/product'),
  meta: {
    title: '商品详情'
  }
}
