import { User } from '@prisma/client'
import { prisma } from '../../prisma/client'
import { JWTSign } from '../utilities/jwt'

export const CreateTokenService = async (user: User): Promise<string> => {
  return JWTSign({
    user: user.id,
    role: user.role
  })
}

export const CreateUser = async (data: { email: string, password: string }): Promise<User> => {
  return prisma.user.create({
    data: {
      ...data
    }
  })
}
