<template>
        <nav_bar />
    <main>
        <div class="box-list">
            <h3>GROCERIES</h3>
            <div class="products-list">
                <card v-for="arr in arrays_groceries" :title="arr.title" :price="arr.price" :link="arr.thumbnail" :id="arr.id"/>
            </div>
            
        </div>  

        <div class="box-list">
            <h3>KITCHEN ACCESSORIES</h3>
            <div class="products-list">
                <card v-for="arr in arrays_kitchen_accessories" :title="arr.title" :price="arr.price" :link="arr.thumbnail" :id="arr.id"/>
            </div>
        </div>

        <div class="box-list">
            <h3>HOME DECORATION</h3>
            <div class="products-list">
                <card v-for="arr in arrays_home_decoration" :title="arr.title" :price="arr.price" :link="arr.thumbnail" :id="arr.id"/>
            </div>
        </div>
    </main>
        <footer_bar />
</template>

<script>
    import card from '../components/card.vue'
    import nav_bar from '../components/header.vue'
    import footer_bar from '../components/footer.vue'
    import axios from 'axios'

    export default {
        data(){
            return {
                arrays_groceries:[],
                arrays_kitchen_accessories:[],
                arrays_home_decoration:[]
            }
        },

        async mounted(){
            // const token = localStorage.getItem('token')
            // if(token){
            //    const response = await axios.get('http://localhost:3000/list-user',{
            //     headers:{ Authorization: `Bearer ${token}`}
            // }) 
            // }
            // buscando produtos por categoria
            // Categoria "Groceries"
            await axios.post('http://localhost:3000/api-type', {api_products: 'groceries', other_api: ''}).then(response => {
                if(response.data.products_result.products.length === 0){
                    console.log('Categoria não encontrada')
                }else{
                    this.arrays_groceries = response.data.products_result.products
                }
            }).catch(error => {
                console.error(error);
            })

            // Categoria "kitchen-accessories"
            await axios.post('http://localhost:3000/api-type', {api_products: 'kitchen-accessories'}).then(response => {
                if(response.data.products_result.products.length === 0){
                    console.log('Categoria não encontrada')
                }else{
                    this.arrays_kitchen_accessories = response.data.products_result.products
                }
            }).catch(error => {
                console.error(error);
            })

            // Categoria "home-decoration"
            await axios.post('http://localhost:3000/api-type', {api_products: 'home-decoration'}).then(response => {
                if(response.data.products_result.products.length === 0){
                    console.log('Categoria não encontrada ')
                }else{
                    this.arrays_home_decoration = response.data.products_result.products
                }
                
            }).catch(error => {
                console.error(error);
            })

            //Outra Api
            // await axios.post('http://localhost:3000/api-type', {other_api: 'oi'}).then(response => {
            //     console.log(response)
            // }).catch(error => {
            //     console.error(error);
            // })
        },

        components:{
            card,
            nav_bar,
            footer_bar
        },
    }
</script>

<style scoped>
    main{
        margin: 0px 40px;
    }
    .box-list{
        padding: 20px 20px;
    }

    .products-list{
        display: flex;
        overflow: auto;
        gap:20px;
        padding: 20px 5px;
        scrollbar-width: thin; 
    }

    @media only screen and (max-width: 600px) {
        main{
            margin: 0px;
        }
    }
</style>