<template>
    <header class="navbar">
        <img src="../assets/images/logo-barato-coletivo-rem.png" alt="Logo do barato coletivo" class="img" @click="voltar()">
        <button class="btn" @click="signIn()" v-if="!token_exist">Login</button>
        <div class="user-box" v-if="token_exist">
            <button class="btn" @click="logOut()" >Log Out</button>  
            <img :src=this.userUrl alt="" class="user-icon">
        </div>
    </header>
</template>

<script>
    export default {
        data(){
            return{
                token_exist: localStorage.getItem('token'),
                userUrl:localStorage.getItem('userUrl')
            }
        },

        methods:{
            voltar(){
                this.$router.push({ path: '/' })
            },

            signIn(){
                this.$router.push({ path: '/tela_login' })
            },

            logOut(){
                this.$router.push({ path: '/tela_login' })
                const token = localStorage.removeItem('token')
            }
        }
    }
</script>

<style scoped>
    .user-box{
        display: flex;
        gap: 10px;
    }

    .btn{
        font-weight: bold;
        border: 2px solid white;
        border-radius: 20px;
        padding: 10px 25px;
        background-color: rgba(0, 0, 0, 0);
        color: white;
        cursor: pointer;
    }

    .btn:hover{
        background-color: white;
        color:black;
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
        width: 35px;
        height: 35px;
        color: #ffffff;
        border: 2px solid white;
        border-radius: 50%;
        cursor: pointer;
    }

    .user-icon:hover{
        background-color: white;
        color: black;
    }

    @media only screen and (max-width: 600px) {
        .navbar{
            padding: 0px 5px;
        }
    }
</style>