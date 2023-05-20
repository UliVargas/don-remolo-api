import dotenv from 'dotenv'
dotenv.config()

export const env = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  SALT_ROUNDS: process.env.SALT_ROUNDS
}
