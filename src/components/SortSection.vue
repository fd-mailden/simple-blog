<template lang="">
    <section class="sort-section">
        <article class = "posts">
            <div class="post-wrapper">
                <img v-bind:src="post_item.image" alt="image" class = "post-image">
                <div class="post">
                    <CardFields :post = "post_item" :size = "'sm'"/>
                </div>
            </div>
            <div class="post-wrapper">
                <img v-bind:src="post_item.image" alt="image" class = "post-image">
                <div class="post">
                    <CardFields :post = "post_item" :size = "'sm'"/>
                </div>
            </div>
            <div class="post-wrapper">
                <img v-bind:src="post_item.image" alt="image" class = "post-image">
                <div class="post">
                    <CardFields :post = "post_item" :size = "'sm'"/>
                </div>
            </div>
        </article>
        <article>
            <TagsList/>
        </article>
        
    </section>
</template>
<script>
import CardFields from '@/components/CardFields.vue'
import ArticleImage from '@/assets/image/ArticleImage.png'
import TagsList from '@/components/TagsList'
export default {
    components: { CardFields , TagsList},
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
.sort-section {
    margin: 107px auto;
    width: 100%;
    max-height: 1122px;
    display: flex;
    justify-content: center;
    align-items: flex-start;    

}

.post-wrapper {
    max-width: 812px;
    margin-bottom: 66px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
}

.post-image {
    max-width: 273px;
    height: 177px;

}

.post {
    margin-left: 37px;
    text-align: start;
    max-width: 538px;
}
</style>