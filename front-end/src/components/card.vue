<template>
    <div class="card__box">
        <div >
            <img :src=link alt="" class="img__box">
        </div>
        <div class="infos__prod">
            <h3>{{ title }}</h3>
            <p>R$ {{ price }}</p>
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
                console.log(id)
            }
        }
    }
</script>

<style scoped>
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

    .img__box{
        width: 100%;
        height: 200px;
    }

    .infos__prod{
        text-align: center;
    }

    .card__box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid black;
        width: 250px;
        border-radius: 5px;
        margin-top: 30px;
        padding: 5px;
    }
</style>