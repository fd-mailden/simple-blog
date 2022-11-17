<template >
    <div class="card">
        <img class="card__image" src='@/assets/image/ArticleImage.png' />
        <div class="post">
            <CardFields />
        </div>
    </div>

</template>
<script>
import CardFields from './CardFields.vue';
export default {
    components: { CardFields }
}
</script>
<style lang="scss" scoped>
.card {
    margin: 50px auto;
    max-width: 856px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    &__image {
        width: 371px;
        height: 298px;
        object-fit: cover;
    }
}

.post {
    max-width: 430px;
    text-align: start;
}
</style>