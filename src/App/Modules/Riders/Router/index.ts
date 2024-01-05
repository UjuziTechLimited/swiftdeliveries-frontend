export default [
    {
        path: '/riders',
        component: () => import('../Views/Riders.vue'),
        name: 'Riders',

    },
    {
        path: '/riderdashboard',
        component: () => import('../Views/RidersDashboard.vue'),
        name: 'RidersDashboard',

    }
]