import Router from 'express-promise-router'
import ProductsRoutes from './products.routes'
import AuthRoutes from './auth.routes'

const router = Router()

router.use('/products', ProductsRoutes)
router.use('/auth', AuthRoutes)

export default router
