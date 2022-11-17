<template lang="">
    <section class="banner">
        <img src='@/assets/image/ArticleImage.png' alt="" class = 'banner__background'>
        <article class = 'post'>
            <CardFields/>
        </article>
        
    </section>
</template>
<script>
import CardFields from './CardFields.vue'
export default {
    components: { CardFields }
}
</script>
<style lang="scss" scoped>
.banner {
    margin-top: 40px;
    position: relative;
    z-index: 0;
    height: 592px;

    &__background {
        z-index: -1;
        position: absolute;
        top: 0;
        left: 0;
    }

}

.post {
    margin-left: 45px;
    max-width: 509px;
    background-color: $main-white;
    padding: 76px 40px 96px;
    font-family: 'Open Sans';
    font-weight: 400;

}
</style>