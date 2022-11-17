<template lang="">
            <p class="post__type">FEATURED ARTICLE</p>
            <h2 class="post__title">World’s Most Dangerous Technology Ever Made.</h2>
            <ul class="post__info">
                <p class="post__artist">Ralph Hawkins</p>
                <li class="post__date">May 7, 2019 (10 mins read)</li>
            </ul>
            <div class="post__text">
                Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.
            </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.post {

    &__type {
        font-size: 20px;
        color: $main-gray;
        @include max-fields(1);
    }

    &__title {
        font-family: 'Libre Baskerville';
        font-style: normal;
        font-weight: 700;
        font-size: 33px;
        line-height: 41px;
        color: $main-black;
        @include max-fields(2);

    }

    &__info {
        padding: 0;
        margin: 12px 0 14px;
        display: flex;
        list-style: disc;
    }

    &__artist {
        font-size: 16px;
        line-height: 22px;
        color: $main-gray;
    }

    &__date {
        margin-left: 30px;
        font-size: 16px;
        color: $main-gray;
    }

    &__text {
        font-size: 16px;
        color: $main-black;
        @include max-fields(6);

    }
}
</style>