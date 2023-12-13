import HomepageRouter from './Modules/Homepage/Router'
import DashboardRouter from './Modules/Dashboard/Router'
import OrdersRouter from './Modules/Orders/Router'
import RidersRouter from './Modules/Riders/Router'





export default [
    ...DashboardRouter,
    ...HomepageRouter,
    ...RidersRouter,
    ...OrdersRouter,
]