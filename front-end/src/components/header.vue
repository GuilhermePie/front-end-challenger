<template>
    <header class="navbar">
        <p class="title__nav" @click="voltar()">BARATO COLETIVO</p>
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
    .title__nav{
        cursor: pointer;
        color:white;
        margin: 0;
    }

    .navbar{
        background-color: #5a016f;
        height: 60px;
        padding: 0px 40px;
        display: flex;
        align-items: center;
    }
</style>