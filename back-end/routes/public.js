import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const prisma = new PrismaClient()

const router = express.Router()

const JWT_SECRET = process.env.JWT_SECRET

router.post('/api-type', async (req,res)=>{
    try{
        var other_result = 'Api não utilizada'
        var categoryResult = 'Api não utilizada'

        if(req.body.productCategory){
            categoryResult = await fetch(`https:/dummyjson.com/products/category/${req.body.productCategory}`)
            .then(response => response.json())
            .catch(err => err.message);
        }

        if(req.body.other_api){
            other_result = await fetch(`https://dummyjson.com/products/category/home-decoration`)
            .then(response => response.json())
            .catch(err => err.message); 
        }
        
        const result = {categoryResult,other_result}

        res.status(201).json(result)

    } catch (err){
        res.status(500).json(err);
    }
});

//Cadastro
router.post('/signUp', async (req,res)=>{
    try{
        const user = req.body

        // criptografando senha
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(user.password, salt)

    const userDB = await prisma.user.create({
        data:{
            email:user.email,
            name:user.name,
            password: hashPassword,
        }
    })

    res.status(201).json(userDB)

    } catch (err){
        res.status(500).json({message:err});
    }
});

//Login
router.post('/signIn', async(req,res)=>{
    try{
        const userInfo = req.body

        //Busca user no banco de dados
        const user = await prisma.user.findUnique({
            where: {email:userInfo.email}
        })

        //Verifica se user existe
        if(!user){
            return res.status(404).json({message:'Usuário não encontrado'});
        }

        //Verifica se a senha é a mesma
        const isMatch = await bcrypt.compare(userInfo.password, user.password)

        if(!isMatch){
            return res.status(400).json({message:'Senha inválida'});
        }


        const token = jwt.sign({id:user.id}, JWT_SECRET, {expiresIn:'1m'})

        return res.status(201).json(token)
    } catch(err){
        res.status(500).json({message:err});
    }
})

export default router;