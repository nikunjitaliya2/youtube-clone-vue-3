import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../components/youtube/Profile.vue'
import Videos from '../components/youtube/videos.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'videos',
      component: Videos
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
  ]
})

export default router
