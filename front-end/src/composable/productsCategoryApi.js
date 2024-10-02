import axios from 'axios'

async function productsCategoryApi(category){
    try{
        var axiosApi = await axios.post('http://localhost:3000/dummyjson/category', {productCategory:category})
        .then(response => {
            if(response.data.products.length === 0){
                console.log('Categoria não encontrada')
            }else{
                return response.data.products
            }
        })
        .catch(error => error)

    }catch (err){
        console.log(err)
    }

    return axiosApi
}

async function productById(url,productId) {
    try{
        var productIdInfos = await axios.post(url,productId)
        .then(response => response.data)
        .catch(error => error)
    }catch (err){
        console.log(err)
    }

    return productIdInfos
}

export { productsCategoryApi , productById }