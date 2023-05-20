import { prisma } from '../../prisma/client'

export const GetAllProductsService = async () => {
  return prisma.product.findMany({
    include: {
      category: true
    }
  })
}
