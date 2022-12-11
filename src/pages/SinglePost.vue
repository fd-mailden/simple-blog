<template>
  <PostComponent  :postId="$route.params.id" />
  <!-- <PostComponent :key="$route.params.id" :postId="$route.params.id" /> -->
</template>

<script>
import PostComponent from "@/components/PostContent.vue";
export default {
  components: {
    PostComponent,
  },

};
</script>

<style lang="scss" scoped>
</style>
