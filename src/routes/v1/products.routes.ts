import Router from 'express-promise-router'
import { getAllProducts, updateProduct } from '../../controllers/products.controllers'
import { Auth } from '../../middleware'

const router = Router()

router.get('/', getAllProducts)
router.patch('/:productId', updateProduct)


export default router