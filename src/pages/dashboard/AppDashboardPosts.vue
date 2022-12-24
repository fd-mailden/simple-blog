<template>
  <section class="posts">
    <article class="post" v-for="post in posts" :key="post.id">
      <figure class="post__img" v-if="post.image">
        <img :src="post.image" alt="img" />
        <router-link to="/" class="post__link">
          <base-icon component-name="EditIcon" />
        </router-link>
      </figure>

      <div class="post__content">
        <h2 class="post__title">{{ post.title }}</h2>
        <p class="post__text">
          {{ post.text }}
        </p>
      </div>
    </article>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import BaseIcon from "@/components/UI/BaseIcon.vue";

export default {
  components: { BaseIcon },
  computed: {
    ...mapGetters({
      posts: "auth/getUserPosts",
    }),
  },
};
</script>

<style lang="scss" scoped>
.posts {
  padding: 0 15px;
  display: flex;
  flex-wrap: wrap;

}

.post {
  display: flex;
  flex-direction: column;
  max-width: 50%;
  padding: 10px;
  margin-bottom: 30px;

  &__img {
    position: relative;
    z-index: 0;
    display: inline-flex;
    transition: all 0.3s ease;
    margin-bottom: 10px;
    padding-top: 150/300 * 100%;

    img {
      position: absolute;
      z-index: -1;
      left: 0;
      top: 0;
    }

    &:after {
      position: absolute;
      transition: all 0.3s ease;

      content: " ";
    }

    &:hover {
      &:after {
        position: absolute;
        content: " ";
        z-index: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(239, 239, 239, 0.65);
      }
      .post__link{
        opacity: 1;
      }
    }
  }

  &__link {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
  }

  &__text {
    @include max-fields(5);
  }
}
</style>
