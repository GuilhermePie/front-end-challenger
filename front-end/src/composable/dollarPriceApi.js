import axios from 'axios'

export async function dollarPriceApi(){
        const dollar = await axios.get("http://localhost:3000/dollar")

        return dollar
}
