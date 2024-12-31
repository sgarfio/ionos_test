// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('@/layouts/default/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/components/HomePage.vue'),
      },
    ],
  },
  {
    path: '/services',
    component: () => import('@/layouts/default/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/components/ServicesPage.vue'),
      },
    ],
  },
  {
    path: '/about',
    component: () => import('@/layouts/default/DefaultLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/components/AboutPage.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
