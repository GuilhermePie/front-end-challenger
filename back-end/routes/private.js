import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
const router = express.Router()

router.get('/list-user', async (req,res)=>{
    try{
        const users = await prisma.user.findMany()

        res.status(200).json({message:'Usuários listados com sucesso', users})

    }catch(err){
        res.status(500).json({message:err});
    }
})

export default router