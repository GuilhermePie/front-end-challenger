class productsController{
    async searchCategory(req,res) {
        try{
            const response = await fetch(`https:/dummyjson.com/products/category/${req.body.productCategory}`)
            .then(response => response.json())
            .catch(err => err.message);
    
            res.status(201).json(response)
        } catch (err){
            res.status(500).json(err);
        }
    }
}

export default new productsController()