// import {verifyToken} from '../services/jwt.js'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req , res, next) =>{
    const token = req.headers.authorization

    if(!token){
        return res.status(402).json({message:'token não existe'})
    }

    try{
        jwt.verify(token.replace('Bearer ', ''), JWT_SECRET, (err,decoded) =>{
            if(err){
                return res.status(401).json({message:"Token inválido"})
            }

            req.userId = decoded.id
            next()
        })
    }catch(err){
        return res.status(403).json({message:err})
    }
}

export default auth