<template>
  <section v-if="author" class = "author-wrapper">
    <h2 class="about">ABOUT THE AUTHOR</h2>
    <article class="author">
      <img :src="author.avatar" alt="" class="author__image" />
      <div class="author__info">
        <h2 class="author__name">{{ author.name }}</h2>
        <a class="author__nick">@{{ author.nickname }}</a>
        <p class="author__description">{{ author.description }}</p>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/app/single-post/_author.scss";
</style>
