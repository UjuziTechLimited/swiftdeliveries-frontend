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
  // if (to.path.startsWith('/admin/') || to.path.startsWith('/super/') || to.path.startsWith('/dispatch/') || to.path.startsWith('/rider/') && !authStore.authUser) {
  if (!authStore.authUser && to.name !== 'Login' && to.name !== 'Homepage') {
    next({ name: 'Login' });
  } else {
    next();
  }

  // if(authStore.authUser && (to.name === 'Login' || to.name === 'Homepage')) {
  //   next({ name: 'Dashboard' });
  // }

})
export default router