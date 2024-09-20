import axios from 'axios'

export async function productsCategoryApi(url,body){
    try{
        var axiosApi = await axios.post(url, body)
        .then(response => {
            if(response.data.categoryResult.products.length === 0){
                console.log('Categoria não encontrada')
            }else{
                return response.data.categoryResult.products
            }
            
        })
        .catch(error => {
            console.error(error);
        })

    }catch (error){
        console.log(error)
    }

    return axiosApi
}