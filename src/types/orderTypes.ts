import { Order, OrderItem } from '@prisma/client'

export type OrderWithItems = Order & { items: OrderItem[] }

export type QueryType = {
    offset: number,
    limit: number,
    status: string,
    dateStart: string,
    dateEnd:string
}
