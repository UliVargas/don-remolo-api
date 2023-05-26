import { GetOneOrderService } from '../../services/order.service'

export default async (idOrder:string) => {
  return GetOneOrderService(idOrder)
}
