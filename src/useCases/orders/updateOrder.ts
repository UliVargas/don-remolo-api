import { UpdateOrderService } from '../../services/order.service'
import { OrderWithItems } from '../../types/orderTypes'

export default async (data:{idOrder:string, order:OrderWithItems}) => {
  return UpdateOrderService(data)
}
