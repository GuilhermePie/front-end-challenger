<template>
    <nav_bar/>
    <main>
        <div class="form">
            <h2>PAGAMENTO</h2>
            <input type="text" placeholder="Cartão">
            <input type="text" placeholder="Nome impresso">
            <div class="sub-form">
                <input type="text" class="sub-input" placeholder="Validade">
                <input type="text" class="sub-input" placeholder="Codigo de segurança" minlength="3" maxlength="3">
            </div>
            <button class="btn" @click="checkUserToken()">PAGAR AGORA!</button>
        </div>
        <div class="resumo-compra">
            <h2>RESUMO DE COMPRA</h2>
            <p>1x {{title}}</p>
            <p>R$ {{price}}</p>
            <hr>
            <p>TOTAL: R$ {{price}}</p>
        </div>
    </main>
    <footer_bar/>
</template>

<script>
    import nav_bar from '../components/header.vue'
    import footer_bar from '../components/footer.vue'
    import axios from 'axios'

    export default {
        data(){

            const priceItem = localStorage.getItem('price')
            const titleItem = localStorage.getItem('title')

            return{
                price:priceItem,
                title:titleItem
            }
        },

        methods:{
            async checkUserToken(){
                const token = localStorage.getItem('token')

                if(!token){
                    return this.$swal('Usuário não logado','Para realizar a compra, faça o login','error');
                }

                var response = await axios.get('http://localhost:3000/user-token',{headers:{ Authorization: `Bearer ${token}`}
                })

                if(response.data){
                    return this.$swal('Sucesso','Compra realizada com sucesso','success'); 
                }
            }
        },

        components:{
            nav_bar,
            footer_bar
        }
    }
</script>

<style scoped>    
    main{
        display: grid;
        justify-items:center;
        align-content: center;
        justify-content: center;
        gap: 30px;
        grid-template-columns: repeat(auto-fill, minmax(300px,500px));
        height: 86.6vh;
    }

    .btn{
        border: 0;
        background-color:#5a016f;
        color:white;
        padding: 15px 20px;
        width: 100%;
        margin-top: 50px;
        cursor: pointer;
    }
    .form{
        display: flex;
        flex-direction: column;
        width: 80%;
    }

    .sub-form{
        display: flex;
        justify-content: space-between;
    }

    .sub-input{
        width: 42%;
    }

    input{
        margin-top: 20px;
        padding: 8px;
    }

    .resumo-compra{
        width: 80%;
    }
</style>