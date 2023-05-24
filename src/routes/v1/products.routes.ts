import Router from 'express-promise-router'
import { getAllProducts, updateProduct, findById } from '../../controllers/products.controllers'
import { Auth } from '../../middleware'

const router = Router()

router.get('/', getAllProducts)
router.patch('/:productId', updateProduct)
router.get('/find/:productId', findById)


export default router