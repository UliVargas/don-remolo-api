export default {
  MISSING_DATA: {
    status: 400,
    message: 'Faltan datos'
  },
  USER_ALREADY_EXISTS: {
    status: 409,
    message: 'El usuario ya existe'
  },
  USER_DOES_NOT_EXIST: {
    status: 404,
    message: 'El usuario no existe'
  },
  CITY_DOES_NOT_EXIST: {
    status: 404,
    message: 'La ciudad no existe'
  },
  CITY_ALREADY_EXISTS: {
    status: 409,
    message: 'La ciudad ya existe'
  },
  PAYLOAD_VALIDATION_FAILED: {
    status: 400
  },
  NO_PERMISSIONS: {
    status: 403,
    message: 'No tienes los permisos necesarios'
  },
  ACCOUNT_DONT_EXIST: {
    status: 404,
    message: 'La cuenta no existe'
  },
  ACCOUNT_ALREADY_EXISTS: {
    status: 409,
    message: 'La cuenta ya existe'
  },
  INCORRECT_DATA: {
    status: 400,
    message: 'Datos incorrectos'
  },
  MATERIAL_ALREADY_EXISTS: {
    status: 409,
    message: 'El material ya existe'
  },
  AUTHENTICATION_IS_REQUIRED: {
    status: 401,
    message: 'Se requiere autenticacion'
  },
  EXISTING_ASSOCIATION: {
    status: 409,
    message: 'Ya hay un usuario asociado a esta cuenta'
  }
}
