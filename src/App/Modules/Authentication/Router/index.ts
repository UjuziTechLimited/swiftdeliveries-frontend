import Login from '../Views/Login.vue';
export default [
    {
        path: '/login',
        component: Login,
        name: 'Login',
        requiresAuth: true,
        meta: {
            title: 'Login',
            // requiresAuth: true,
        }

    }
]