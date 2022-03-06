import * as VueRouter from 'vue-router'
import Home from '@/views/Home'
import Cart from '@/views/Cart'

const routes = [
  { path: '/', component: Home },
  { path: '/cart', component: Cart}
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

export default router