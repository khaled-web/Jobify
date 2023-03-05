//express
import express from 'express'
const app = express()
//env
import dotenv from 'dotenv'
dotenv.config()
//connectDB
import connectDB from './db/connect.js'
//routers
import authRoutes from './routes/authRoutes.js'
import jobRoutes from './routes/jobRoutes.js'
//middleware
import errorHandlerMiddleware from './middleware/error-handler.js'
import notFoundMiddleWear from './middleware/not-found.js'

//routes
app.get('/', (req, res) => {
 // throw new Error('error')....errorHandlerMiddleware
 res.send('Welcome!')
})
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/job', jobRoutes)

//route not found-middleWear
app.use(notFoundMiddleWear)
//code error-middleWear
app.use(errorHandlerMiddleware)
//data.json
app.use(express.json())

const port = process.env.PORT || 4000
const start = async () => {
 try {
  await connectDB(process.env.MONGO_URL)
  app.listen(port, () => {
   console.log(`server is listening on port ${port}...`)
  })
 } catch (error) {
  console.log(error)
 }
}

start()