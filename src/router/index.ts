import { createRouter, createWebHistory } from 'vue-router'

const files = require.context('./modules', false, /.ts$/)

const defaultRoutes = files
  .keys()
  .map(item => files(item).default)
  .filter(item => item?.meta?.default)

const publicRoutes = files
  .keys()
  .map(item => files(item).default)
  .filter(item => !item?.meta?.default)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default'),
      children: defaultRoutes
    },
    {
      path: '/',
      component: () => import('@/layouts/public'),
      children: publicRoutes
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) document.title = to.meta.title
  next()
})

export default router
