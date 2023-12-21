export default [
    {
        path: '/dashboard',
        component: () => import('../Views/Dashboard.vue'),
        name: 'Dashboard',
        requiresAuth: true,
        meta: {
            title: 'Dashboard',
        }
    }
]