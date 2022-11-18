<template lang="">
    <nav class="nav">
        <router-link to="/" class = 'nav__link'>Home</router-link>
        <router-link to="/tags" class = 'nav__link'>Tags</router-link>
        <router-link to="/about" class = 'nav__link'>About</router-link>
    </nav>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.nav {
    padding: 25px;

    &__link {
        margin: 0 31px;
        font-family: 'Libre Baskerville';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        color: $main-black;

    }
}
</style>