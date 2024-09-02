<template>
    <nav_bar />
    <main>
        <card />
    </main>
    
</template>

<script>
    import card from '../components/card.vue'
    import nav_bar from '../components/header.vue'

    export default {
        components:{
            card,
            nav_bar
        }
    }
</script>

<style scoped>
    main{
        padding: 30px 100px;
    }
</style>