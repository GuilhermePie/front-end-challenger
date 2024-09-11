import express from 'express'
import publicRoute from './routes/public.js'
import cors from 'cors'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use('/',publicRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})