import Router from 'express-promise-router'
import { getAllProducts } from '../../controllers/products.controllers'

const router = Router()

router.get('/', getAllProducts)

export default router
