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
            // GROCERIES
             await axios.get('https://dummyjson.com/products/category/groceries').then(response => {
                this.arrays_groceries = response.data.products
            }).catch(error => {
                console.error(error);
            })

            // KICHEN ACCESSORIES
            await axios.get('https://dummyjson.com/products/category/kitchen-accessories').then(response => {
                this.arrays_kitchen_accessories = response.data.products
            }).catch(error => {
                console.error(error);
            })

            // HOME DECORATION
            await axios.get('https://dummyjson.com/products/category/home-decoration').then(response => {
                this.arrays_home_decoration = response.data.products
            }).catch(error => {
                console.error(error);
            })

            await axios.get('https://dummyjson.com/products/category-list').then(response => {
            }).catch(error => {
                console.error(error);
            })
        },

        components:{
            card,
            nav_bar,
            footer_bar
        },
    }
</script>

<style scoped>
    .box-list{
        padding: 20px 40px;
    }

    .products-list{
        display: flex;
        overflow: auto;
        gap:30px;
        padding: 0px 30px
    }

    /* main{
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(250px,1fr));
        width: 90%;
        margin: 30px auto;
    } */

</style>