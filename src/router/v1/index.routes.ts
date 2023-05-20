import Router from 'express-promise-router'
import productsRoutes from './products.routes'

const router = Router()

router.use('/products', productsRoutes)

export default router
