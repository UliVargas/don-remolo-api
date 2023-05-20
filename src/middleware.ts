import { User } from '@prisma/client'
import { Request, Response, NextFunction } from 'express'
import { JWTVerify } from './utilities/jwt'

interface RequestExtended extends Request {
  user: User
}

interface Error {
  status: number | null
  message: string | null
}

export const Auth = (req: RequestExtended, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]

  if (!token) {
    const error: Error = {
      message: null,
      status: null
    }
    error.status = 401
    error.message = 'Necesitas autenticación'
    throw error
  }

  const tokenDecoded = JWTVerify(token) as User

  if (tokenDecoded) {
    req.user = tokenDecoded
  }

  next()
}
