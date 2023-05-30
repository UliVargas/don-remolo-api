import { AddOrderService } from '../../services/order.service'
import { OrderWithItems } from '../../types/orderTypes'

export default async (dataOrder:OrderWithItems) => {
  return AddOrderService(dataOrder)
}
