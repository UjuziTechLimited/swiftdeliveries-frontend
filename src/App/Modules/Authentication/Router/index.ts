export default [
    {
        path: '/login',
        component: () => import('../Views/Login.vue'),
        name: 'Login',
        requiresAuth: true,
        meta: {
            title: 'Login',
            // requiresAuth: true,
        }

    }
]