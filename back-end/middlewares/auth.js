import jwt from 'jsonwebtoken'
import prismaModel from '../apps/models/prismaModel.js'

const JWT_SECRET = process.env.JWT_SECRET
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET

const auth = async (req , res, next) => {
    const token = req.headers.authorization
    const userEmail = req.body.userEmail
    const user = await prismaModel.findUnique(userEmail)

    if(!token){
        return res.status(402).json({message:'token não existe'})
    }

    try{
        jwt.verify(token.replace('Bearer ', ''), JWT_SECRET, (err,decoded) =>{
            if(err){
                jwt.verify(user.token, JWT_REFRESH_SECRET, (err,decoded) =>{
                    if(err){
                        return res.status(404).json('Token inválido')
                    }

                    next()
                })
            }
        
            next()
        })
    }catch(err){
        return res.status(403).json({message:err})
    }
}

export default auth