import { createRouter, createWebHistory } from 'vue-router'
// import Profile from '../components/youtube/Profile.vue'
// import Videos from '../components/youtube/videos.vue'
// import ProfileHome from '../components/featured/HomeProfile.vue'
// import Channels from '../components/featured/Channels.vue'
// import PlayLists from '../components/featured/PlayLists.vue'
// import NoSelect from '../views/NoSelect.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'videos',
      component: () => import('../components/youtube/videos.vue')
    },
    {
      path: '/channels',
      name: 'channel',
      component: () => import('../components/featured/Channels.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('../components/youtube/favorite.vue')
    },
    {
      path: '/profile',
      component: () => import('../components/youtube/Profile.vue'),
      children: [
        // {
        //   path: '',
        //   component: NoSelect
        // },
        {
          path: '',
          component: () => import('../components/featured/HomeProfile.vue')
        },
        {
          path: 'channels',
          component: () => import('../components/featured/Channels.vue')
        },
        {
          path: 'playlists',
          component: () => import('../components/featured/PlayLists.vue')
        }
      ]
    }
  ]
})

export default router
