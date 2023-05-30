import { Order, OrderItem } from '@prisma/client'

export type OrderWithItems= Order & { items: OrderItem[] };
