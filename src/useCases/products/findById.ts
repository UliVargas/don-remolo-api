import { findByIdService } from '../../services/product.service'
import ApiError from '../../ApiError/apiError'

export default async (productId: string) => {
  if (!await findByIdService(productId)) {
    throw new ApiError({
      errorCode: 'PRODUCT_DONT_EXIST'
    })
  }
  // agregar si no recibe un ID pedir un ID. para si o si recibir un ID
  return findByIdService(productId)
}
