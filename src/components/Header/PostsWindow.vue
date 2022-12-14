<template lang="">
  <div
    class="window"
    :class="{ 'window--active': isActive }"
    v-if="posts.length > 0"
  >
    <div
      class="post"
      v-for="post in posts"
      :key="post.id"
      @click="$emit('navigate', post.id)"
    >
      <img :src="post.image" class="post__image" alt="post-image" />
      <div class="post__info">
        <h4 class="post__title">{{ post.title }}</h4>
        <p class="post__author">{{ post.artist }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    posts: {
      type: Array,
    },
    isActive: {
      type: Boolean,
    },
  },
};
</script>
<style lang="scss" scoped>
.window {
  width: 100%;
  max-width: 363px;
  max-height: 600px;
  overflow-y: scroll;
  padding: 10px;
  background-color: $main-white;
  opacity: 0;

  &--active {
    opacity: 1;
  }
}

.post {
  display: flex;
  align-items: center;
  max-height: 200px;

  &__image {
    width: 150px;
  }

  &__info {
    padding: 15px;
  }

  &__title {
    font-size: 16px;
    font-weight: 20;
    color: $main-black;
    @include max-fields(1);
  }

  &__author {
    font-size: 14px;
    color: $main-gray;
    @include max-fields(1);
  }
}
</style>
