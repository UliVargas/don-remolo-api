import Router from 'express-promise-router'
import { Auth } from '../../middleware'
import { createOrder } from '../../controllers/orders.controllers'

const router = Router()

router.post('/', createOrder)

export default router
