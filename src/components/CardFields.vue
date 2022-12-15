<template lang="">
  <p class="post__type">{{ post?.tag }}</p>
  <h2
    class="post__title"
    :class="{
      sm: size === 'sm',
    }"
  >
    {{ post?.title }}
  </h2>
  <ul
    class="post__info"
    :class="{
      'sm-info': size === 'sm',
    }"
  >
    <router-link
      :to="ROUTER.PROFILE.generate(post?.artistNickName)"
      class="post__artist"
      >{{ post?.artist }}</router-link
    >
    <li class="post__date">{{ post?.date }}</li>
  </ul>
  <p
    class="post__text"
    :class="{
      sm: size === 'sm',
    }"
  >
    {{ post?.text }}
  </p>
</template>
<script>
import { ROUTER } from "@/settings/vue-routs";

export default {
  props: {
    post: {
      type: Object,
    },
    size: {
      type: String,
    },
  },
  data() {
    return {
      ROUTER,
    };
  },
};
</script>
<style lang="scss" scoped>
.sm {
  -webkit-line-clamp: 2 !important;
  -webkit-box-orient: vertical;
  line-clamp: 2 !important;
  box-orient: vertical;
}

.sm-info {
  margin: 3px 0 11px !important;
}

.post {
  &__type {
    font-size: 20px;
    color: $main-gray;
    text-transform: uppercase;
    @include max-fields(1);
  }

  &__title {
    font-family: "Libre Baskerville";
    font-style: normal;
    font-weight: 700;
    font-size: 33px;
    line-height: 41px;
    color: $main-black;
    @include max-fields(2);
  }

  &__info {
    padding: 0;
    margin: 12px 0 14px;
    display: flex;
    list-style: disc;
  }

  &__artist {
    font-size: 16px;
    line-height: 22px;
    color: $main-gray;
  }

  &__date {
    margin-left: 30px;
    font-size: 16px;
    color: $main-gray;
  }

  &__text {
    font-size: 16px;
    color: $main-black;
    @include max-fields(6);
  }
}
</style>
