import express from 'express'

const router = express.Router()

//Type of products
router.post('/api-type', async (req,res)=>{
    try{
        var other_result = 'Api não utilizada'
        var products_result = 'Api não utilizada'

        if(req.body.api_products){
            products_result = await fetch(`https://dummyjson.com/products/category/${req.body.api_products}`)
            .then(response => response.json())
            .catch(err => console.log(err));
        }

        if(req.body.other_api){
            other_result = await fetch(`https://dummyjson.com/products/category/home-decoration`)
            .then(response => response.json())
            .catch(err => console.log(err)); 
        }
        
        const result = {products_result,other_result}

        res.status(201).json(result)

    } catch (err){
        res.status(500).json(err);
    }
});

export default router;