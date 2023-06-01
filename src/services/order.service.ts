import { Order } from '@prisma/client'
import { prisma } from '../../prisma/client'
import { OrderWithItems } from '../types/orderTypes'

export const GetAllOrdersService = async () => {
  return await prisma.order.findMany({
    include: {
      items: {
        select: { quantity: true, id: true }
      }
    }
  })
}

export const AddOrderService = async (dataOrder:OrderWithItems) => {
  return await prisma.order.create({
    data: {
      ...dataOrder,
      items: {
        create: dataOrder.items.map(item => ({
          quantity: item.quantity,
          product: { connect: { id: item.productId } }
        }))
      }

    }
  })
}
export const GetOneOrderService = async (idOrder:string): Promise<Order> => {
  return prisma.order.findFirst({
    where: { id: idOrder },
    include: {
      items: {
        select: { quantity: true, id: true, productId: true }
      }
    }
  })
}
