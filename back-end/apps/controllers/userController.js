import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import sha256 from 'crypto-js/sha256.js'
import prismaModel from '../models/prismaModel.js'

const JWT_SECRET = process.env.JWT_SECRET

class userController{

    async cadastro (req,res) {
        try{
            const user = req.body
    
            // criptografando senha
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(user.password, salt)
    
        const createUser = await prismaModel.createUser(user,hashPassword)
    
        res.status(201).json(createUser)
    
        } catch (err){
            res.status(500).json({message:err});
        }
    }

    async login(req,res) {
    try{
        const userInfo = req.body

        //busca ususario no gravatar
        const email = userInfo.email.toLowerCase()
        const hashedEmail = sha256( email );
        const gravatarUrl = await fetch(`https://www.gravatar.com/avatar/${hashedEmail}?d=404`)
        .then(response => {
            if(response.status === 200){
                return response.url
            }else{
                return 'false'
            }
        })
        .catch(err => err.message); 

        //Busca user no banco de dadosclea 
        const user = await prismaModel.findUnique(userInfo.email)

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

        return res.status(201).json({token,gravatarUrl})
    } catch(err){
        res.status(500).json({message:err});
    }
}

}

export default new userController()