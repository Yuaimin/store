import { createRouter, createWebHistory } from 'vue-router'

const files = require.context('./modules', false, /.ts$/)

const routes = files.keys().map(item => files(item).default)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/layouts/default'),
      children: routes
    },
    {
      path: '/',
      component: () => import('@/layouts/public'),
      children: routes
    }
  ]
})

export default router
