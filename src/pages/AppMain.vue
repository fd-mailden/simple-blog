<template>
  <ArtBanner :post_item="getLastPosts[2]" />
  <EditorsPicks :posts="getLastPosts" />
  <ArtBanner :post_item="getLastPosts[1]" :card_style="true" />
  <SortSection :posts="getLastPosts" />
</template>

<script>
import ArtBanner from "@/components/ArtBanner.vue";
import EditorsPicks from "@/components/EditorsPicks.vue";
import SortSection from "@/components/SortSection.vue";
import { mapGetters } from "vuex";

export default {
  components: { ArtBanner, EditorsPicks, SortSection },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getLastPosts: "posts/getLastPosts",
    }),
  },
};
</script>

<style lang="scss">
.container {
  max-width: $app-width;
  margin: 0 auto;
  padding: 0 16px;
}
</style>
