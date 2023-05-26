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

export const findByIdService = async (productId: string) => {
  return prisma.product.findUnique({
    where: { id: productId }
    })  
}

export const updateProductService = (productId: string, updatedProduct: Product):Promise<Product> => {

  return prisma.product.update({
    where: { id: productId },
    data: updatedProduct
  })
}

export const deleteProductService = async (productId: string) => {
  
  return prisma.product.delete({
    where: { id: productId }
  })
}

export const createProductService = async (productData: Product) => {

  return prisma.product.create({
    data: productData
  })
}