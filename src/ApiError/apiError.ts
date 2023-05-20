
interface params {
  errorCode?: string,
  statusCode?: number,
  message?: string,
  title?: string,
  status?: number
}

export default class ApiError extends Error {
  errorCode: string
  statusCode: number
  image: string
  title: string
  additionalData: unknown
  constructor ({
    errorCode = 'NO_FURTHER_INFORMATION',
    statusCode,
    message,
    title = 'NO_FURTHER_INFORMATION',
    status
  }: params) {
    super(message)
    this.errorCode = errorCode
    this.statusCode = statusCode || status || 500
    this.title = title
    if (!this.message) this.message = 'NO_FURTHER_INFORMATION'
  }
}
