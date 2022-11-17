<template lang="">
    <section class="banner">
        <img v-bind:src="post_item?.image" alt="bg" class = 'banner__background'>
        <article class = "post" v-bind:class = "{'right-style' :card_style}" >
            <CardFields :post = 'post_item'/>
        </article>
    </section>
</template>

<script>
import CardFields from './CardFields.vue'
export default {
    components: { CardFields },

    props: {
        post_item: {
            type: Object,
            required: true,
        },
        card_style: {
            type: String
        }

    },
    data() {
        return {

        }
    },
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
.right-style{
    position: absolute;
    right: 86px;
    top: 54px;

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