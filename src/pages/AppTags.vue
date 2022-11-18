<template lang="">
    <article class = "container">
        <SearchInput/>
        <TagsCollection/>
    </article>

</template>
<script>
import SearchInput from '@/components/SearchInput.vue'
import TagsCollection from '@/components/TagsCollection.vue'
export default {
    components: { SearchInput, TagsCollection }
    
}
</script>
<style lang="scss" scoped>
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 194px;

}
    
</style>