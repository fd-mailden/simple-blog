<template>

    <ArtBanner :post_item="post_item" />
    <EditorsPicks />
    <ArtBanner :post_item="post_item" :card_style="true" />
    <SortSection />



</template>
  
<script>
import ArtBanner from '@/components/ArtBanner.vue';
import EditorsPicks from '@/components/EditorsPicks.vue';
import SortSection from '@/components/SortSection.vue'
import ArticleImage from '@/assets/image/ArticleImage.png'
export default {
    components: { ArtBanner, EditorsPicks, SortSection },
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
  
<style lang="scss">
.container {
    max-width: $app-width;
    margin: 0 auto;
    padding: 0 16px;
}
</style>
  