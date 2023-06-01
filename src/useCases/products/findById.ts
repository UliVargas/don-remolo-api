import { findByIdService } from '../../services/product.service'
import ApiError from '../../ApiError/apiError'

export default async (productId: string) => {
  console.log(productId)
  if (!await findByIdService(productId)) {
    throw new ApiError({
      errorCode: 'PRODUCT_DONT_EXIST'
    })
  }

  return findByIdService(productId)
}
