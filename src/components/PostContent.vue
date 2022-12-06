<template>
  <img :src="post.image" alt="" class="banner" v-if="post" />
  <section v-if="post" class="post">
    <h1 class="post__title">{{ post.title }}</h1>
    <ul class="list">
      <p class="post__author">{{ post.artist }}</p>
      <li class="post__date">{{ post.date }}</li>
    </ul>

    <ul class="tags">
      <li class="tags__item" v-for="tag in post.tags" :key="tag">#{{ tag }} </li>
    </ul>
    <p class="post__content">{{ post.text }}</p>
  </section>
  <AuthorAbout :author="author" />
</template>

<script>
import { mapActions, mapState } from "vuex";
import AuthorAbout from "./AuthorAbout.vue";

export default {
  components: { AuthorAbout },

  created() {
    this.getPostInfo(this.postId);
  },
  props: {
    postId: {
      type: Number,
    },
  },

  computed: {
    ...mapState({
      post: (state) => state.posts.currentPost,
      author: (state) => state.posts.currentAuthor,
    }),
  },
  methods: {
    ...mapActions({
      getPostInfo: "posts/getPostInfo",
    }),
  },
  watch: {
    postId() {
      this.getPostInfo(this.postId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/app/single-post/post-content";
</style>
