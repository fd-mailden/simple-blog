<template>
  <section class="author">
    <AuthorAbout :author="author" v-if="author" />
  </section>
  <section class="profile-banner">
    <ArtBanner :post_item="posts[0]" :card_style="true" />
  </section>
  <section class="profile-posts">
    <EditorsPicksCard
      v-for="postItem in posts"
      :key="postItem"
      :post="postItem"
    />
  </section>
</template>

<script>
import AuthorAbout from "@/components/AuthorAbout.vue";
import EditorsPicksCard from "@/components/EditorsPicksCard.vue";
import ArtBanner from "@/components/ArtBanner";
import { mapActions } from "vuex";


export default {
  components: {
    AuthorAbout,
    EditorsPicksCard,
    ArtBanner,
  },
  data() {
    return {
      author: null,
      posts: [],
    };
  },
  methods: {
    ...mapActions({
      profileData: "posts/profileData",
    }),
  },

  watch: {
    "$route.params.id": {
      handler: function (authorNick) {
        this.profileData(authorNick).then(({ author, posts }) => {
          this.author = author;
          this.posts = posts;
        });
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.author {
  margin-top: 150px;
}

.profile-banner {
  margin: 130px auto 66px;
}

.profile-posts {
  max-width: 812px;
  margin: 0 auto;
}
</style>
