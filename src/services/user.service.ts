import { prisma } from '../../prisma/client'

export const FindUserByEmail = async (email: string) => {
  return prisma.user.findFirst({
    where: {
      email
    }
  })
}
