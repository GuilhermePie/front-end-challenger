<template>
    <div class="card__box">
        <div>
            <img :src=link alt="" class="img__box">
        </div>
        <div class="infos__prod">
            <h3>{{ title }}</h3>
            <p class="price"><strong>R$ {{ price }}</strong></p>
            <button class="btn" @click="getId(id)">COMPRAR</button>
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
    }

    h3{
      margin: 0;  
    }

    .btn{
        border: 0;
        background-color:#5a016f;
        color:white;
        padding: 15px 20px;
        width: 100%;
        cursor: pointer;
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
        width: 200px;
    }

    .card__box{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 10px;
        box-shadow: 0px 0px 15px 7px rgba(0,0,0,0.22);
    }
</style>