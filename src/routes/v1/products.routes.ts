import Router from 'express-promise-router'
import { getAllProducts, updateProduct, findById, deleteProduct, createProduct } from '../../controllers/products.controllers'
import { Auth } from '../../middleware'

const router = Router()

router.get('/', getAllProducts)
router.patch('/:productId', updateProduct)
router.get('/find/:productId', findById)
router.delete('/delete/:productId', deleteProduct)
router.post('/newProduct', createProduct)


export default router