import { Request, Response } from 'express'

export const ContextHandler = (req: Request, res: Response) => {
  const { body, statusCode } = res.req
  res.status(statusCode || 200).json({
    raw: body
  })
}
