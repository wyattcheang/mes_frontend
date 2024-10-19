// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DashboardView from '@/views/DashboardView.vue'
import ProductionView from '@/views/ProductionView.vue'
import QualityView from '@/views/QualityView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
  },
  {
    path: '/production',
    name: 'Production',
    component: ProductionView,
  },
  {
    path: '/quality',
    name: 'Quality',
    component: QualityView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
