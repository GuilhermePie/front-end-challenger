<template>
    <nav_bar/>
    <main>
        <div class="form">
            <h2>PAGAMENTO</h2>
            <input type="text" placeholder="Cartão">
            <input type="text" placeholder="Nome impresso">
            <div class="sub-form">
                <input type="text" placeholder="Validade">
                <input type="text" placeholder="Codigo de segurança">
            </div>
            <button class="btn">PAGAR AGORA!</button>
        </div>
        <div class="resumo-compra">
            <h2>RESUMO DE COMPRA</h2>
            <p>1x item</p>
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

    export default {
        data(){
            const priceItem = localStorage.getItem('price')
            return{
                price:priceItem
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
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;
        height: 82.4vh;
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
        width: 400px;
        padding: 30px;
    }

    .sub-form{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    input{
        margin-top: 20px;
        padding: 8px;
    }
</style>