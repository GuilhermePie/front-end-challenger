import {verifyToken} from '../services/jwt.js'

const auth = (req , res, next) =>{
    const token = req.headers.authorization

    if(!token){
        res.status(401).json({message:'Usuário negado'})
    }

    try{
        const decoded = verifyToken(token.replace('Bearer ', ''))
        if(!decoded){
            res.status(403).json({message:'Acesso proibido'})

        }
    }catch(err){
        res.status(401).json({message:'Token JWT inválido'})

    }

    next()
}

export default auth