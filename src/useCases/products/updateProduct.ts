import { Product } from '@prisma/client'
import { updateProductService, findByIdService } from '../../services/product.service'
import ApiError from '../../ApiError/apiError'

export default async (productId: string, updatedProduct: Product) => {
  if (!await findByIdService(productId)) {
    throw new ApiError({
      errorCode: 'PRODUCT_DONT_EXIST'
    })
  }

  return updateProductService(productId, updatedProduct)
}
