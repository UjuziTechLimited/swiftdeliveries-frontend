import { createRouter, createWebHistory } from 'vue-router'

import type { RouteRecordRaw } from 'vue-router'

import moduleRoutes from '@/App/router'
import { useAuthStore } from '@/stores/authStore'



let routes: Array<RouteRecordRaw> = moduleRoutes

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})


router.beforeEach((to, from, next) => {

  const authStore = useAuthStore()

  if (to.name === 'Dashboard' && !authStore.isAuthenticated) {
    // if (!useAuthStore.isAuthenticated) {
    next({ name: 'Login' });
  } else {
    next();
  }

})


export default router