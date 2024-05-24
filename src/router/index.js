import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   redirect: '/login'
    // },
    // {
    //   path: '/',
    //   name: 'userPage',
    //   component: () => import('@/pages/User/ui.vue')
    // },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/pages/LogIn/ui.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/Home/ui.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/pages/Signup/ui.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('@/pages/Search/ui.vue')
    },
    {
      path: '/library',
      name: 'library',
      component: () => import('@/pages/Library/ui.vue')
    },
    {
      path: '/like',
      name: 'Like',
      component: () => import('@/pages/Like/ui.vue')
    }
  ]
})

export default router
