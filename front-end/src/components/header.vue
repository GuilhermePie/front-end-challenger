<template>
    <header class="navbar">
        <img src="../assets/images/logo-barato-coletivo-rem.png" alt="Logo do barato coletivo" class="img" @click="voltar()">
    </header>
</template>

<script>
    export default {
        methods:{
            voltar(){
                this.$router.push({ path: '/' })
            }
        }
    }
</script>

<style scoped>
    .img{
        height: 80px;
        cursor: pointer;
    }

    .navbar{
        background-color: #5a016f;
        padding: 0px 40px;
        display: flex;
        align-items: center;
    }

    @media only screen and (max-width: 600px) {
        .navbar{
            padding: 0px 5px;
        }
    }
</style>