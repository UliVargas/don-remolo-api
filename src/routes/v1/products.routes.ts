import Router from 'express-promise-router'
import { getAllProducts, updateProduct, findById, deleteProduct, createProductController } from '../../controllers/products.controllers'
import { Auth } from '../../middleware'
import ProductValidation from '../../validations/functions/product'

const router = Router()

router.get('/', getAllProducts)
router.patch('/:productId', updateProduct)
router.get('/:productId', findById)
router.delete('/:productId', deleteProduct)
router.post(
  '/',
  ProductValidation.create,
  createProductController
)

export default router
