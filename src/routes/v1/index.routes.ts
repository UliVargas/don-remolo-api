import Router from 'express-promise-router'
import ProductsRoutes from './products.routes'
import OrdersRoutes from './orders.routes'
import AuthRoutes from './auth.routes'

const router = Router()

router.use('/products', ProductsRoutes)
router.use('/auth', AuthRoutes)
router.use('/orders', OrdersRoutes)

export default router
