import { SignJWT, jwtVerify } from 'jose'
import { env } from '../config/env'

const secret = new TextEncoder().encode(env.JWT_SECRET_KEY)

export const JWTSign = <T>(data: T) => {
  return new SignJWT({ payload: data })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('24h')
    .sign(secret)
}

export const JWTVerify = async (token: string) => {
  return (await jwtVerify(token, secret)).payload
}
