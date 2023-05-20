import app from './app'
import { env } from './config/env'

const PORT = env.PORT ?? 5000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
