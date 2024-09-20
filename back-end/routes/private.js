import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.get('/user-token', async (req,res)=>{
    try{
        res.status(200).json(true)
    }catch(err){
        res.status(500).json({message:err});
    }
})

export default router