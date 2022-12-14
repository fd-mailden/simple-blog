<template lang="">
  <article class="container">
    <SearchInput v-model="searchQuery" />
    <TagsCollection :tags="searchTags" />
  </article>
</template>
<script>
import SearchInput from "@/components/SearchInput.vue";
import TagsCollection from "@/components/TagsCollection.vue";
import { TAGS } from "@/consts/tags";

export default {
  components: { SearchInput, TagsCollection },
  data() {
    return {
      searchQuery: "",
      TAGS,
    };
  },
  computed: {
    searchTags() {
      return this.TAGS.filter((tag) =>
        tag.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 194px;
}
</style>
