import ApiError from '../../ApiError/apiError'
import { createProductService, findProductByNameService } from '../../services/product.service'
import { Product } from '@prisma/client'

export default async (productData: Product) => {
  if (await findProductByNameService(productData.name)) {
    throw new ApiError({
      errorCode: 'PRODUCT_ALREADY_EXIST'
    })
  }
  return createProductService(productData)
}
