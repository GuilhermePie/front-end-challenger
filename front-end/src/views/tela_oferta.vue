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
            <button class="btn">COMPRAR</button>
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
            }).catch(error => {
                console.error(error);
            })
        },

        components:{
            nav_bar,
            footer_bar
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
    }

    .img{
        border: 1px solid black;
        width: 100%;
        height: 300px;
    }

    .sub-img{
        border: 1px solid black;
        height: 100px;
    }

    .sub-box-img{
        gap: 10px;
        display: flex;
        flex-direction: row;
    }

    main{
        padding: 20px 0px;
        min-height: 85vh;
        height: 100%;
        display: grid;
        gap: 20px;
        justify-items:center;
        align-items: center;
        justify-content: center;
        grid-template-columns: repeat(auto-fill, minmax(400px,500px));
    }

    .box-img{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
    }

    .infos{
        width: 60%;
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .btn{
        border: 1px solid black;
        border-radius: 5px;
        background-color: rgb(214, 214, 214);
        padding: 10px 20px;
        width: 100%;
        cursor: pointer;
    }

    .btn:hover{
        background-color: white;
        border: 1px solid blue;

    }
</style>