<template lang="">
  <section class="sort-section">
    <article class="posts">
      <EditorsPicksCard
        v-for="postItem in posts"
        :key="postItem"
        :post="postItem"
      />
    </article>
    <TagsList />
  </section>
</template>
<script>
import TagsList from "@/components/TagsList";
import EditorsPicksCard from "@/components/EditorsPicksCard.vue";

export default {
  components: { TagsList, EditorsPicksCard },
  props: {
    posts: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.sort-section {
  margin: 107px auto;
  max-width: 1122px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.posts {
  max-width: 856px;
  margin-right: 30px;
}
</style>
