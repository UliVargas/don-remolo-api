import ApiError from '../../ApiError/apiError'
import { GetOneOrderService, UpdateOrderService } from '../../services/order.service'

import { OrderWithItems } from '../../types/orderTypes'

export default async (data:{idOrder:string, order:OrderWithItems}) => {
  const order = await GetOneOrderService(data.idOrder)
  if (!order) {
    throw new ApiError({
      errorCode: 'ORDER_DONT_EXIST'
    })
  }
  return UpdateOrderService(data)
}
