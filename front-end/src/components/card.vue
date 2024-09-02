<template>
    <div class="container">
        <div class="img__box">
            <img src="" alt="">
        </div>
        <div class="infos__prod">
            <h3>PRODUTO</h3>
            <p>20.99$</p>
            <button>COMPRAR</button>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .img__box{
        background-color: black;
        width: 100%;
        height: 150px;
    }

    .infos__prod{
        text-align: center;
    }

    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid black;
        width: 200px;
        border-radius: 5px;
    }
</style>