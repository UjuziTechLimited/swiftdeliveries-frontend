import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import moduleRoutes from '@/App/router'
import { useAuthStore } from '@/stores/authStore'

let routes: Array<RouteRecordRaw> = moduleRoutes

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()
  if (to.path.startsWith('/admin/') && !authStore.authUser) {
    next({ name: 'Login' });
  } else {
    next();
  }
})
export default router