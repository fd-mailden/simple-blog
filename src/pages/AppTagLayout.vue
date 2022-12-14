<template>
  <section class="wrapper">
    <SearchInput v-model="tagSearch" @update:model-value="setTagSearch" />
    <article v-if="getTagSearchedPost.length">
      <EditorsPicksCard
        v-for="post in getTagSearchedPost"
        :key="post.id"
        :post="post"
      />
    </article>
    <p v-else class = "not-found">Not Found</p>

  </section>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
import EditorsPicksCard from "@/components/EditorsPicksCard.vue";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  components: {
    SearchInput,
    EditorsPicksCard,
  },
  data() {
    return {
      searchQuery: this.$route.params.id,
    };
  },
  methods: {
    ...mapMutations({
      setTagSearch: "posts/setTagSearch",
    }),
  },
  computed: {
    ...mapState({
      tagSearch: (state) => state.posts.tagSearch,
    }),
    ...mapGetters({
      getTagSearchedPost: "posts/getTagSearchedPost",
    }),
  },
  watch: {
    "$route.params.id": {
      handler: function (search) {
        this.setTagSearch(search);
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  margin: 193px auto;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.not-found{
  margin: 50px auto;

}
</style>
