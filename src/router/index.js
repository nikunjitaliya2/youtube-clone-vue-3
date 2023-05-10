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
      path: '/subscribe',
      name: 'subscribe',
      component: () => import('../components/youtube/subscribers.vue')
    },
    {
      path: '/viewchannel',
      name: 'viewchannel',
      component: () => import('../components/youtube/viewchannel.vue')
    },
    {
      path: '/favorite',
      name: 'favorite',
      component: () => import('../components/youtube/favorite.vue')
    },
    {
      path: '/playlists',
      name: 'playlist',
      component: () => import('../components/youtube/PlayList.vue')
    },
    {
      path: '/upload',
      name: 'upload',
      component: () => import('../components/youtube/Upload.vue')
    },
    {
      path: '/profile',
      component: () => import('../components/youtube/Profile.vue'),
      children: [
        //when no path getted this component are appear
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
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
    }
  ]
})

export default router
