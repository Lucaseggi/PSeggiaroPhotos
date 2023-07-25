// Composables
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/about',
    component: AboutView
  },
  {
    path: '/:slug',
    name: 'groups',
    component: () => import('@/views/GroupView.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
