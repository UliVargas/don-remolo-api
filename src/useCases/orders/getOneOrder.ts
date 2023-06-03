import ApiError from '../../ApiError/apiError'
import { GetOneOrderService } from '../../services/order.service'

export default async (idOrder:string) => {
  const order = await GetOneOrderService(idOrder)
  if (!order) {
    throw new ApiError({
      errorCode: 'ORDER_DONT_EXIST'
    })
  }
  return order
}
