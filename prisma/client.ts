import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

prisma.$connect()
  .then(() => {
    console.log('Conexión exitosa a la base de datos')
    // Aquí puedes continuar con la configuración de tu aplicación Express
  })
  .catch((error) => {
    console.error('Error al conectar a la base de datos:', error)
    // Aquí puedes manejar el error de conexión
  })
