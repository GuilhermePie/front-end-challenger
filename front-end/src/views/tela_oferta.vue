<template>
    <nav_bar />
    <main>
        <div class="box-img">
            <img :src=arrays.thumbnail alt="" class="img">
            <div class="sub-box-img">
                <img :src=arrays.thumbnail alt="" class="sub-img">
                <img :src=arrays.thumbnail alt="" class="sub-img">
                <img :src=arrays.thumbnail alt="" class="sub-img">
            </div>
        </div>
        <div class="infos">
            <h2>{{ arrays.title }}</h2>
            <p>{{ arrays.description }}</p>
            <span class="price"><strong>R$ {{ arrays.price }}</strong></span>
            <button class="btn" @click="checkout()">COMPRAR</button>
        </div>
    </main>
    <footer_bar />
</template>

<script>
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
            const id = localStorage.getItem('id')
             await axios.get(`https://dummyjson.com/products/${id}`).then(response => {
                console.log(response.data)
                this.arrays = response.data
                localStorage.setItem('title',this.arrays.title)
                localStorage.setItem('price',this.arrays.price)
            }).catch(error => {
                console.error(error);
            })
        },

        methods:{
            checkout(){
                this.$router.push({ path: '/tela_checkout' })
            }
        },

        components:{
            nav_bar,
            footer_bar,
        }
    }
</script>
<style scoped>
    h2{
        margin: 0;
    }

    .price{
        margin-bottom: 20px;
        font-size: 24px;
        color: #5a016f;
    }

    .img{
        border: 1px solid black;
        width: 100%;
        height: 300px;
    }

    .sub-img{
        width: 100%;
        border: 1px solid black;
        height: 100px;
    }

    .sub-box-img{
        width: 100%;
        gap: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    main{
        padding: 20px 0px;
        min-height: 85vh;
        height: 100%;
        width: 80%;
        margin: auto;
        display: grid;
        gap: 30px;
        justify-items:center;
        align-items: center;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, minmax(300px,500px));
    }

    .box-img{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        width: 100%;
    }

    .infos{
        width: 80%;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .btn{
        border: 0;
        color:white;
        background-color: #5a016f;
        padding: 10px 20px;
        width: 100%;
        cursor: pointer;
    }

</style>