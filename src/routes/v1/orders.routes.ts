import Router from 'express-promise-router'
import { Auth } from '../../middleware'
import { createOrder, getAllOrders, getOneOrderById, updateOrder } from '../../controllers/orders.controllers'
import OrderValidation from '../../validations/functions/order'
const router = Router()

router.get('/', Auth, getAllOrders)
router.get('/:idOrder', Auth, getOneOrderById)
router.post('/', Auth, OrderValidation.create, createOrder)
router.patch('/update/:idOrder', Auth, updateOrder)

export default router
