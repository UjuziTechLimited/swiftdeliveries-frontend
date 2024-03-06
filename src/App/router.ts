import HomepageRouter from './Modules/Homepage/Router'
import DashboardRouter from './Modules/Dashboard/Router'
import OrdersRouter from './Modules/Orders/Router'
import RidersRouter from './Modules/Riders/Router'
import AuthenticationRouter from './Modules/Authentication/Router'
import AnalyticsRouter from './Modules/Analytics/Router'
import MessagesRouter from './Modules/Messages/Router'
import SuperadminRouter from './Modules/Superadmin/Router'
import OrganizationsRouter from './Modules/Organizations/Router'
import AdminRouter from './Modules/Admin/Router'
import NotFound from './Common/Views/NotFound.vue'


export default [
    ...DashboardRouter,
    ...HomepageRouter,
    ...RidersRouter,
    ...OrdersRouter,
    ...AuthenticationRouter,
    ...AnalyticsRouter,
    ...MessagesRouter,
    ...SuperadminRouter,
    ...OrganizationsRouter,
    ...AdminRouter,

    // 404 PAGE
    {
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: NotFound,
    },
]