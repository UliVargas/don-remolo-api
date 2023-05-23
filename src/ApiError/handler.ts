import Debug from 'debug'
import { Response } from 'express'
import errors from '.'
import ApiError from './apiError'

const debug = Debug('app:ErrorHandler')

const formatError = (error): ApiError => {
  let errToSend: ApiError = null
  let errorInErrors = errors[error.errorCode]

  if (errorInErrors) {
    errorInErrors = {
      message: error.message,
      ...errorInErrors,
      errorCode: error.errorCode
    }
    errToSend = new ApiError(errorInErrors)
  } else if (error instanceof ApiError) {
    errToSend = error
  } else {
    errToSend = new ApiError(error)
  }
  return errToSend
}

/* eslint-disable */
export default (error, req, res: Response, next) => {
  debug(error)
  const { message, statusCode, ...rest } = formatError(error)

  res.status(statusCode || 500).send({
    ...rest,
    message
  })
}