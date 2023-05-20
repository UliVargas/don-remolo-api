import { Request, Response, NextFunction } from 'express'

export const ContextHandler = (req: Request, res: Response, next: NextFunction) => {
  // Guarda la función original `res.json()` para utilizarla más adelante
  const originalJson = res.json

  // Sobrescribe la función `res.json()` para transformar la respuesta antes de enviarla
  res.json = function (data: any): Response<any, Record<string, any>> {
    // Realiza la transformación que deseas aplicar a la respuesta
    const isErrorResponse = res.statusCode >= 400

    // Realiza la transformación solo si no es una respuesta de error
    if (!isErrorResponse) {
      // Realiza la transformación que deseas aplicar a la respuesta
      const transformedData = transformData(data)

      // Llama a la función `res.json()` original con la respuesta transformada
      return originalJson.call(this, transformedData)
    }

    // Llama a la función `res.json()` original sin aplicar transformación en caso de respuesta de error
    return originalJson.call(this, data)
  }

  next()
}

// Ejemplo de función de transformación de datos
const transformData = (data: any): any => {
  // Aplica aquí la transformación deseada a `data`
  return {
    raw: data
  }
}
