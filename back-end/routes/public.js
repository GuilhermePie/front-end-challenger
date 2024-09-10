import express from 'express'

const router = express.Router()

//Groceries
router.post('/type-product', async (req,res)=>{
    try{
        const data = await fetch(`https://dummyjson.com/products/category/${req.body.type}`)
        .then(response => response.json())
        .catch(err => console.log(err));

        res.status(201).json(data)

    } catch (err){
        res.status(500).json({message:err});
    }
});

export default router;