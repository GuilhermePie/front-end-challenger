<template>
        <nav_bar />
    <main>
        <card v-for="arr in arrays" :title="arr.title" :price="arr.price" :link="arr.thumbnail" :id="arr.id"/>
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
                arrays:[]
            }
        },

        async mounted(){
             await axios.get('https://dummyjson.com/products').then(response => {
                console.log(response.data.products)
                this.arrays = response.data.products
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
    main{
        display: grid;
        justify-items: center;
        grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
        margin-bottom: 30px;
    }
</style>