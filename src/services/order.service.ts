import { prisma } from '../../prisma/client'
import { OrderWithItems } from '../types/orderTypes'

export const AddOrderService = async (dataOrder:OrderWithItems) => {
  await prisma.order.create({
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
  const allItems = await prisma.order.findMany({
    include: {
      items: {
        select: {
          id: true,
          quantity: true
        }
      }
    }
  })
  return allItems
}
