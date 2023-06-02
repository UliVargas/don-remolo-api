import Router from 'express-promise-router'
import { Auth } from '../../middleware'
import { createOrder, getAllOrders, getOneOrderById, updateOrder } from '../../controllers/orders.controllers'
import OrderValidation from '../../validations/functions/order'
const router = Router()

router.get('/', Auth, getAllOrders)
router.get('/:orderId', Auth, getOneOrderById)
router.post('/', OrderValidation.create, createOrder)
router.patch('/:orderId', updateOrder)

export default router
