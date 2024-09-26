import axios from 'axios'

async function productsCategoryApi(url,body){
    try{
        var axiosApi = await axios.post(url, body)
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