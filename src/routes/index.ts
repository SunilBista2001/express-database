import { Prisma } from '@prisma/client'
import userRouter from './user.routes'
import { Router } from 'express'

const router = Router()

router.use('/users', userRouter)
