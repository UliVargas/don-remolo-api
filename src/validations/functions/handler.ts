import Debug from 'debug'
const debug = Debug('app:Api:Middleware:Validation')

/**
 *
 * @param {object} schema Esquema joi para ser validado
 * @param {object} data Datos a validar en el esquema
 */

export default async <T>(schema: any, data: T) => {
  if (!schema) {
    debug('A schema is needed for this function to work')
    throw new Error('Failed at input data validation process')
  }
  try {
    await schema.validateAsync(data, { abortyEarly: false })
  } catch (error: any) {
    debug('Validation process failed, sending a 400 status to client')
    error.status = 400
    throw error
  }
}
