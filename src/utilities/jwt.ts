import { sign, verify } from 'jsonwebtoken'
import { env } from '../config/env'

export const JWTSign = <T>(data: T) => {
  return sign({ payload: data }, env.JWT_SECRET_KEY, { expiresIn: '24h' })
}

export const JWTVerify = (token: string) => {
  return verify(token, env.JWT_SECRET_KEY)
}
