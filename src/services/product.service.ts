import { prisma } from '../../prisma/client'
import { Product } from '@prisma/client'

export const GetAllProductsService = async () => {
  return prisma.product.findMany({
    include: {
      category: {
        select: { name: true }
      }
    }
  })  
}

export const findById = async (productId: string) => {
  return prisma.product.findUnique({
    where: { id: productId }
    })  
}

export const updateProduct = (productId: string, updatedProduct: Product):Promise<Product> => {

  return prisma.product.update({
    where: { id: productId },
    data: updatedProduct
  });  
}