<template>
    <div class="card__box" @click="getId(id)">
        <div>
            <img :src=link alt="" class="img__box">
        </div>
        <div class="infos__prod">
            <h3>{{ title }}</h3>
            <p class="price"><strong>R$ {{ price }}</strong></p>
        </div>
    </div>
</template>

<script>
    export default {
        props:{
            title:String,
            price:Number,
            link:String,
            id:Number
        },

        methods:{
            getId(id){
                localStorage.setItem('id',id)
                this.$router.push({ path: '/tela_oferta' })
            }
        }
    }
</script>

<style scoped>
    .price{
        font-size: 18px;
        color: #5a016f;
        margin: 5px 0px;
    }

    h3{
      margin: 0;  
    }

    .img__box{
        width: 100%;
        height: 150px;
    }

    .infos__prod{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        width: 160px;
    }

    .card__box{
        width: 160px !important;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-radius: 5px;
        box-shadow: 0px 0px 8px -2px rgba(0,0,0,0.75);
    }
</style>