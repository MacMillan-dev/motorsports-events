import { createRouter, createWebHistory } from 'vue-router'
import pinia from '@/store/useDatabase'
import { useDatabaseStore } from '@/store/useDatabase'
const store = useDatabaseStore(pinia)
import HomeView from '../views/HomeView.vue'
import CreateEvent from '../views/CreateEvent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/createEvent',
    name: 'new-event',
    component: CreateEvent
  },
  {
    path: '/support',
    name: 'support',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Support.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
