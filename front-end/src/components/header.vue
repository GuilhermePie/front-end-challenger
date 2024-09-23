<template>
    <header class="navbar">
        <img src="../assets/images/logo-barato-coletivo-rem.png" alt="Logo do barato coletivo" class="img" @click="voltar()">
        <button class="btn" @click="signIn()" v-if="!token_exist">Login</button>
        <div class="user-box" v-if="token_exist">
            <button class="btn" @click="logOut()" >Log Out</button>  
            <img v-if="!this.userStatus" :src=this.userUrl alt="avatar de usuario" class="user-icon">
            <div v-if="this.userStatus" class="user-frist-letter">{{ this.userLetter }}</div>
        </div>
    </header>
</template>

<script>
    export default {
        data(){
            return{
                token_exist: localStorage.getItem('token'),
                userUrl:'',
                userStatus:false,
                userLetter:'',
            }
        },

        async mounted(){
            const LocalstorageUserUrl = localStorage.getItem('userUrl')

            if(LocalstorageUserUrl != 'false'){
                this.userUrl = LocalstorageUserUrl
            }else{
                this.userStatus = true
                const UserEmail = localStorage.getItem('userEmail')
                const fristLetter = UserEmail.charAt(0).toUpperCase()
                this.userLetter = fristLetter
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
    .user-frist-letter{
        font-size: 25px;
        padding: 2px 14px;
        color: #ffffff;
        border: 2px solid white;
        border-radius: 50%;
        cursor: pointer;
    }

    .user-frist-letter:hover{
        background-color: white;
        color: black;
    }

    .user-box{
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        width: 40%;
        min-width: 200px;
        margin-right: 15px;
    }

    .btn{
        font-weight: bold;
        border: 2px solid white;
        border-radius: 20px;
        margin: 5px 0px;
        padding: 5px 25px;
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
        width: 300px;
        min-width: 150px;
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
        width: 45px;
        height: 45px;
        color: #ffffff;
        border: 2px solid white;
        border-radius: 50%;
        cursor: pointer;
    }

    @media only screen and (max-width: 600px) {
        .navbar{
            padding: 0px 5px;
        }

        .user-frist-letter{
            padding: 2px 10px;
            font-size: 18px;
        }

        .user-box{
            min-width: 0px;
        }

        .btn{
            display: none;
        }
    }
</style>