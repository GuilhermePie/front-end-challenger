<template>
    <footer class="footer">
        <img src="../assets/images/logo-barato-coletivo-rem.png" alt="Logo do barato coletivo" class="img">
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .img{
        height: 50px;
        cursor: pointer;
    }

    .footer{
        bottom: 0;
        background-color: #5a016f;
        padding: 0px 45px;
        display: flex;
        align-items: center;
    }

    @media only screen and (max-width: 600px) {
        .footer{
            padding: 0px 10px;
        }
    }
</style>