import Router from 'express-promise-router'
import { Auth } from '../../middleware'
import { createOrder, getAllOrders, getOneOrderById, updateOrder } from '../../controllers/orders.controllers'

const router = Router()

router.get('/', Auth, getAllOrders)
router.get('/:idOrder', Auth, getOneOrderById)
router.post('/', Auth, createOrder)
router.patch('/update/:idOrder', Auth, updateOrder)

export default router
