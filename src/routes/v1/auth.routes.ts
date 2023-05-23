import Router from 'express-promise-router'
import { login, createUser } from '../../controllers/auth.controllers'

const router = Router()

router.post('/signin', login)
router.post('/signup', createUser)

export default router
