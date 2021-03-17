import 'module-alias/register'
import * as dotenv from 'dotenv'
import App from '@/app'

dotenv.config()

const port = Number(process.env.PORT)

const app = new App()

app
  .start()
  .then(express => express.listen(port))
  .catch(err => {
    console.log('An error has occurred when connecting to the database', err)
  })
