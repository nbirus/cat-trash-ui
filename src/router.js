import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
  },
  {
    path: '/thank-you',
    name: 'thank-you',
    component: () => import(/* webpackChunkName: "thank-you" */ './views/ThankYou.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
