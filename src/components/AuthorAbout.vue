<template>
  <article class="author">
    <img :src="author.avatar" alt="" class="author__image" />
    <div class="author__info">
      <h2 class="author__name">{{ author.name }}</h2>
      <router-link
        :to="ROUTER.PROFILE.generate(author.nickname)"
        class="author__nick"
        >@{{ author.nickname }}
      </router-link>
      <p class="author__description">{{ author.description }}</p>
    </div>
  </article>
</template>

<script>
import { ROUTER } from "@/settings/vue-routs";

export default {
  data() {
    return {
      ROUTER,
    };
  },
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
