import cors from 'cors'
import express from 'express'
import { handleEvent } from './middleware/handleEvent'
import { protectedRoute } from './middleware/protectedEvent'

const app = express()
app.use(express.json())
app.use(cors())

app.post('/events', protectedRoute, handleEvent)

app.listen(4000, () => {
  console.log('Listening at port 4000')
})
