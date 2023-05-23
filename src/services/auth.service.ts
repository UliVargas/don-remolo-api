import { User } from '@prisma/client'
import { prisma } from '../../prisma/client'
import { BCCompare, BCHash } from '../utilities/bcrypt'
import { JWTSign } from '../utilities/jwt'

export const LoginService = async ({ email, password }: { email: string, password: string}) => {
  const user = await prisma.user.findFirst({
    where: {
      email
    }
  })

  return JWTSign({
    user: user.id,
    role: user.role
  })
}

export const CreateUser = async (data: { email: string, password: string }) => {
  return prisma.user.create({
    data: {
      ...data
    }
  })
}
