export default [
    {
        path: '/admin/riders',
        component: () => import('../Views/Riders.vue'),
        name: 'Riders',

    },
    {
        path: '/riderdashboard',
        component: () => import('../Views/RidersDashboard.vue'),
        name: 'RidersDashboard',

    },

    {
        path: '/delivery/view/details/:id',
        component: () => import('../Views/RiderMapView.vue'),
        name: 'RidersMapView',

    },

    {
        path: '/signature',
        component: () => import('../Views/RiderSignature.vue'),
        name: 'RiderSignature',

    },

]