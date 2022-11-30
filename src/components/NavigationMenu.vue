
<script>
import {ROUTER, } from '@/settings/vue-routs'
export default {
    components: [ROUTER, ],
    created(){
        console.log(ROUTER)
    }
}
</script>

<template lang="">
    <nav class="nav">
        <router-link to="/" class = 'nav__link' >Home</router-link>
        <router-link to="/tags" class = 'nav__link'>Tags</router-link>
        <router-link to="/about" class = 'nav__link'>About</router-link>
    </nav>
</template>


<style lang="scss" scoped>
.nav {
    padding: 25px;

    &__link {
        margin: 0 31px;
        font-family: 'Libre Baskerville';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: $main-black;
    
    }
}
.router-link-active{
    font-weight: 700;
    
}
</style>