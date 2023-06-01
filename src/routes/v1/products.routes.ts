import Router from 'express-promise-router'
import { getAllProductsController, updateProductController, findByIdController, deleteProductController, createProductController } from '../../controllers/products.controllers'
import { Auth } from '../../middleware'
import ProductValidation from '../../validations/functions/product'

const router = Router()

router.get('/', getAllProductsController)
router.patch('/:productId', updateProductController)
router.get('/:productId', findByIdController)
router.delete('/:productId', deleteProductController)
router.post(
  '/',
  ProductValidation.create,
  createProductController
)

export default router
