import { GetAllOrdersService } from '../../services/order.service'
import { QueryType } from '../../types/orderTypes'

export default async (querys:QueryType) => {
  return GetAllOrdersService(querys)
}
