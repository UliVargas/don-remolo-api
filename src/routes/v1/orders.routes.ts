import Router from 'express-promise-router'
import { Auth } from '../../middleware'
import { createOrder, getAllOrders } from '../../controllers/orders.controllers'

const router = Router()

router.get('/', Auth, getAllOrders)
router.post('/', createOrder)

export default router
