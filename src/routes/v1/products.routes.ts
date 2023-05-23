import Router from 'express-promise-router'
import { getAllProducts } from '../../controllers/products.controllers'
import { Auth } from '../../middleware'

const router = Router()

router.get('/', Auth, getAllProducts)

export default router
