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
    import {productsCategoryApi} from '../composable/productsCategoryApi.js'

    export default {
        data(){
            return {
                arrays_groceries:[],
                arrays_kitchen_accessories:[],
                arrays_home_decoration:[]
            }
        },


        async mounted(){
            // buscando produtos por categoria
            // productsCategoryApi(url = string, body = obj)
            // Categoria "Groceries"
            this.arrays_groceries = await productsCategoryApi('http://localhost:3000/dummyjson/category',{productCategory: 'groceries'})

            // Categoria "kitchen-accessories"
            this.arrays_kitchen_accessories = await productsCategoryApi('http://localhost:3000/dummyjson/category',{productCategory: 'kitchen-accessories'})

            // Categoria "home-decoration"
            this.arrays_home_decoration = await productsCategoryApi('http://localhost:3000/dummyjson/category',{productCategory: 'home-decoration'})
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