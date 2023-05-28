import { Router } from 'express'

const router = Router()

router.use('/', (req, res) => {
    res.send({ id: 'id' })
})

export default router
