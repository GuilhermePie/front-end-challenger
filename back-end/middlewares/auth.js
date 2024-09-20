// import {verifyToken} from '../services/jwt.js'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req , res, next) =>{
    const token = req.headers.authorization

    if(!token){
        return res.status(401).json({message:'Usuário negado'})
    }

    try{
        const decoded = jwt.verify(token.replace('Bearer ', ''), JWT_SECRET)
        if(!decoded){
            res.status(403).json({message:'Acesso proibido'})
        }
    }catch(err){
        res.status(401).json({message:'Token JWT inválido'})
    }

    next()
}

export default auth