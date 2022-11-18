<template lang="">
    <ul class = "tags-list">
            <li v-for="tag in tags" :key= "tag" class = "tag" >#{{tag}}</li>
    </ul>
</template>
<script>
import { TAGS } from '@/consts/tags'
export default {
    data() {
        return {
            tags: TAGS,
        }
    }
}
</script>
<style lang="scss" scoped>
.tags-list {
    margin-top: 60px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
   
}

.tag {
    padding: 6px 18px;
    border: 1px solid #000000;
    border-radius: 50px;
    margin: 12px 15px;
}
</style>