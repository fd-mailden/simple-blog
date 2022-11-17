<template >
    <div class="card">
        <img class="card__image" v-bind:src="post_item.image" />
        <div class="post">
            <CardFields :post="post_item"/>
        </div>
    </div>

</template>
<script>
import CardFields from './CardFields.vue';
import ArticleImage from '@/assets/image/ArticleImage.png'
export default {
    components: { CardFields },
    data() {
    return {
      post_item: {
        image: ArticleImage,
        post_type: 'FEATURED ARTICLE',
        title: 'World’s Most Dangerous Technology Ever Made.',
        artist: 'Ralph Hawkins',
        date: 'May 7, 2019 (10 mins read)',
        text: 'Proident aliquip velit qui commodo officia qui consectetur dolor ullamco aliquip elit incididunt. Ea minim ex consectetur excepteur. Ex laborum nostrud mollit sint consectetur Lorem amet aliqua do enim. Commodo duis dolor anim excepteur. In aliquip mollit nulla consequat velit magna.'

      },
    }
  }
    
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