<template> 
    <div class="container">
        <form class="form" @submit.prevent="validate()">
            <h2>Sign in</h2>
            <div class="form-infos">
                <div class="form-itens">
                    <font-awesome-icon :icon="['fas', 'envelope']" />
                    <input type="email" placeholder="Email" class="input-item"  v-model="formValues.email" required >
                </div>
                <div class="form-itens">
                    <font-awesome-icon :icon="['fas', 'lock']" />
                    <input type="password" placeholder="password" class="input-item" autocomplete="off" v-model="formValues.password" required> 
                </div> 
            </div>
            <input type="submit" value="Login" class="form-btn">
            <div class="redirect">
               <a @click="signUp()">Sign Up</a> <p> here</p>
            </div>
        </form>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        data(){
            return{
                formValues:{
                    email:null,
                    password:null
                } 
            }
        },

        methods: {
            async validate(){
                try{
                const { data:token } = await axios.post('http://localhost:3000/signIn', {
                        email:this.formValues.email,
                        password:this.formValues.password
                })
                
                localStorage.setItem('token', token)
                
                return this.$router.push({ path: '/' })
                
                }catch(err){
                    console.log(err.response.status)
                    if(err.response.status === 404){
                        return this.$swal('Error','Nenhum usuário foi encontrado :(','error');
                    }

                    if(err.response.status === 400){
                        return this.$swal('Error','Senha inválida','error');
                    }
                }
            },

            signUp(){
                this.$router.push('/tela_cadastro')
            },
        }
    }
</script>

<style scoped>
    .city-image{
        width: 100%;
        position: absolute;
        bottom:0px;
        border-bottom-left-radius: 25px;
        border-bottom-right-radius: 25px;
    }

    .redirect{
        z-index: 1;
        display: flex;
        align-items: center;
        gap: 5px;
    }

    a{
        cursor: pointer;
        text-decoration: none;
    }


    a:hover{
        color: rgb(28, 124, 168);
    }

    input:focus {
        outline: 0;
    }

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;
        /* background-color: #caf6f5;*/
        background-color: #5a016f;

    }

    .form-btn{
        z-index: 1;
        font-weight: bold;
        font-size: medium;
        border-radius: 25px;
        color:white;
        /* background-color: #4fc2f8; */
        background-color: #5a016f;
        border: none;
        padding: 15px;
        width: 100%;
        min-width: 200px;
        cursor:pointer;
    }

    .input-item{
        background-color: #efefed;
        border: 0px;
        padding: 8px;
    }

    .form-infos{
       display: flex;
       flex-direction: column;
       margin: 40px 0px;
       gap:30px;
       width: 100%;
    }

    .form-itens{
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid black;
    }

    .form{
        -webkit-box-shadow: 0px 0px 23px 5px rgba(255, 255, 255, 0.2);
        -moz-box-shadow: 0px 0px 23px 5px rgba(255, 255, 255, 0.2);
        box-shadow: 0px 0px 23px 5px rgba(255, 255, 255, 0.2);

        position: relative;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        align-items: center;
        text-align: center;
        width: 100%;
        max-width: 300px;
        min-width: 200px;
        height: 400px;
        background-color: #efefed;
        border-radius: 10px;
        padding:30px 60px;
        margin: 30px;
    }

    h2{
        margin: 0px;
        font-size: 2.2em;
        line-height: 1.1;
    }
</style>