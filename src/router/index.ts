import { createRouter, createWebHistory } from 'vue-router'
import ProductDetail from '@/components/product-detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'product',
      component: ProductDetail
    },
  ]
})

export default router
