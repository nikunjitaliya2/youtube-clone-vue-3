import { createRouter, createWebHistory } from 'vue-router'
import Header from '../components/common/Header.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Header',
      component: Header
    }
  ]
})

export default router
