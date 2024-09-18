<template>
    <header class="navbar">
        <img src="../assets/images/logo-barato-coletivo-rem.png" alt="Logo do barato coletivo" class="img" @click="voltar()">
        <button class="btn" @click="signIn()">Login</button>
        <!-- <font-awesome-icon :icon="['fas', 'user']" class="user-icon"/> -->
    </header>
</template>

<script>
    export default {
        methods:{
            voltar(){
                this.$router.push({ path: '/' })
            },

            signIn(){
                this.$router.push({ path: '/tela_login' })
            }
        }
    }
</script>

<style scoped>
    .btn{
        border: 2px solid white;
        border-radius: 20px;
        padding: 10px 25px;
        background-color: rgba(0, 0, 0, 0);
        color: white;
        cursor: pointer;
    }

    .img{
        height: 80px;
        cursor: pointer;
    }

    .navbar{
        background-color: #5a016f;
        padding: 0px 40px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .user-icon{
        color: #ffffff;
        border: 2px solid white;
        border-radius: 50%;
        padding: 10px 11px;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
        .navbar{
            padding: 0px 5px;
        }
    }
</style>