import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.get('/user-token', async (req,res)=>{
    res.status(200).json(true)
})

export default router