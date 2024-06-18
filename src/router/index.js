import { createRouter, createWebHistory } from 'vue-router';
import Profile from '@/pages/profile/ui.vue';
import Main from '@/pages/main/ui.vue';
import Search from '@/pages/Search/ui.vue';
import Like from '@/pages/Like/ui.vue';

// import { isAuthenticated } from '@/stores/index.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/LogIn/ui.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('@/pages/Signup/ui.vue'),
    },
    {
      path: '/',
      name: 'profile',
      component: Profile,
      meta:{
        needAuth: true,
      },
      children: [
        {
          path: '',
          name: 'Main',
          component: Main,
          meta:{
            isPersonalPage: true,
          },
        },
        {
          path: 'search',
          name: 'Search',
          component: Search
        },
        // {
        //   path: 'library',
        //   name: 'Library',
        //   component: Library
        // },
        // {
        //   path: 'album/:id',
        //   name: 'album',
        //   component: AlbumDetails
        // },
        {
          path: 'like',
          name: 'Like',
          component: Like
        }
      ]
    }
  ]
})


// router.beforeEach((to, from) => {
//   if(to.meta.needAuth && !isAuthenticated.value){
//     return{ name: 'Login' }
//   }
// })

export default router
