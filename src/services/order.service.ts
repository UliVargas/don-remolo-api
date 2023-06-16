import { Order, Status } from '@prisma/client'
import { prisma } from '../../prisma/client'
import { OrderWithItems, QueryType } from '../types/orderTypes'

export const GetAllOrdersService = async (querys:QueryType) => {
  const { offset, limit, status, date } = querys
  const skip = (offset - 1) * limit
  const where: { status?: Status, Date?: string} = {}

  if (status) {
    where.status = Status[status as keyof typeof Status]
  }
  if (date) {
    where.Date = date
  }
  return await prisma.order.findMany({
    where,
    skip,
    take: limit,
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
export const UpdateOrderService = async (data:{idOrder:string, order:OrderWithItems}) => {
  const { idOrder, order } = data
  // crear objeto sin la prpiedad items
  const { items, ...orderWithOutItems } = order

  const updatedOrder = await prisma.order.update({
    where: { id: idOrder },
    data: orderWithOutItems
  })

  // actualizar items relacionados con la ordern
  if (items) {
    for (const item of items) {
      await prisma.orderItem.update({
        where: { id: item.id },
        data: { quantity: item.quantity }
      })
    }
  }

  return updatedOrder
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
