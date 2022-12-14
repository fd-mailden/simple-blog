<template lang="">
  <section class="editors">
    <h1 class="editors__title">Editor’s Picks</h1>
    <article class="post-list" v-if="posts">
      <EditorsPicksCard v-for="postItem in posts" :key="postItem" :post="postItem" />
    </article>
  </section>
</template>
<script>
import EditorsPicksCard from "./EditorsPicksCard.vue";
export default {
  components: { EditorsPicksCard },
  props: {
    posts: {
      type: Array,
    },
  },
};
</script>
<style lang="scss" scoped>
.editors {
  margin-top: 50px;
  text-align: center;

  &__title {
    color: $border-color;
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 42px;
    line-height: 57px;
    position: relative;

    &::before {
      position: absolute;
      bottom: -15px;
      margin-left: 30px;
      content: "";
      height: 5px;
      width: 190px;
      background-color: $border-color;
    }
  }
}
.post-list {
  margin: 60px auto;
  max-width: 856px;

}
</style>
