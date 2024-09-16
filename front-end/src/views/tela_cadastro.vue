<template>
    <div class="container">
        <form class="form" @submit.prevent="cadUser()">
            <h2>Sign Up</h2>
            <div class="form-infos">
                <div class="box-form-itens">
                    <div class="form-itens">
                        <font-awesome-icon :icon="['fas', 'user']" />
                        <input type="text" id="username" placeholder="Username" class="input-item" autocomplete="off" v-model="state.username" >
                    </div>
                <span class="error" v-if="v$.username.$error">{{ v$.username.$errors[0].$message }}</span>
                </div>
                <div class="box-form-itens">
                    <div class="form-itens">
                        <font-awesome-icon :icon="['fas', 'user']" />
                        <input type="email" id="email" placeholder="email" class="input-item" autocomplete="off" v-model="state.email" >
                    </div>
                <span class="error" v-if="v$.email.$error">{{ v$.email.$errors[0].$message }}</span>
                </div>
                <div class="box-form-itens">
                   <div class="form-itens">
                        <font-awesome-icon :icon="['fas', 'lock']" />
                        <input type="password" id="password" placeholder="password" class="input-item" autocomplete="off" v-model="state.password" >
                    </div> 
                    <span class="error" v-if="v$.password.$error">{{ v$.password.$errors[0].$message }}</span> 
                </div>
                
            </div>
            <input type="submit" value="Sign Up" class="form-btn">
            <div class="redirect">
                <a @click="signIp()" href=""><p>Back</p>
                </a>
            </div>
            <!-- <img src="../assets/city.png" alt="cidade" class="city-image"> -->
        </form>
    </div>
    
</template>

<script>
    import { useVuelidate } from '@vuelidate/core'
    import { required, minLength } from '@vuelidate/validators'
    import { reactive, computed } from 'vue'
    import axios from 'axios'

    export default {
        setup(){
            const state = reactive({
                username:null,
                password:null,
                email:null
            })

            const rules = computed(()=>{
                return {
                    username: { required, minLength:minLength(3) },
                    password: { required, minLength:minLength(3) },
                    email: { required, minLength:minLength(11) },
                }
            })

            const v$ = useVuelidate(rules,state)

            return {
                state,
                v$
            }
        },

        methods: {
            async cadUser(){
                this.v$.$validate()

                if(!this.v$.$error){
                    try{
                    await axios.post('http://localhost:3000/signUp', {
                        email:this.state.email,
                        name:this.state.username,
                        password:this.state.password
                    })

                    this.$router.push('/tela_login')
                    this.$swal('Sucesso','Usuário cadastrado com sucesso!','success');

                    }catch(err){
                        console.log(err)
                        if(err.response.status === 500){
                            return this.$swal('!!! :(','Algo deu errado!','error');
                        }
                    }
                }
               
            },

            signIp(){
                this.$router.push('/tela_login')
            },
        }
    }
</script>

<style>
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
        background-color: #caf6f5;
    }

    .form-btn{
        z-index: 2;
        font-weight: bold;
        font-size: medium;
        border-radius: 25px;
        color:white;
        background-color: #4fc2f8;
        border: none;
        padding: 15px;
        width: 100%;
        min-width: 200px;
        cursor:pointer;
    }

    .input-item{
        z-index: 1;
        background-color: #efefed;
        border: 0px;
        padding: 8px;
    }

    .form-infos{
       z-index: 1;
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

    .error{
        color: rgb(223, 57, 57);
        font-size: 14px;
    }

    .box-form-itens{
        text-align: start;
    }

    .form{
        -webkit-box-shadow: 0px 0px 23px 5px rgba(0,0,0,0.2);
        -moz-box-shadow: 0px 0px 23px 5px rgba(0,0,0,0.2);
        box-shadow: 0px 0px 23px 5px rgba(0,0,0,0.2);

        position: relative;
        display: flex;
        flex-direction: column;
        /*justify-content: center; */
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