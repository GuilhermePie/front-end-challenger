import express from 'express'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const router = express.Router()

router.post('/user-token', async (req,res)=>{
    const userEmail = req.body.userEmail
    const newtoken = jwt.sign({email:userEmail}, JWT_SECRET, {expiresIn:'1m'})
    return res.status(200).json(newtoken)
})

export default router