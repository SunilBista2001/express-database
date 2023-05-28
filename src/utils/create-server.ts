import { config } from 'dotenv'
import cors from 'cors'
import express from 'express'
// import crypto from 'crypto'
import userRouter from '../routes/user.routes'
// import routes from '../routes/index'

config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors())

// app.use("/api",routes)
app.get('/user', userRouter)

export default app
