<template lang="">
  <header class="header">
    <div class="navigate">
      <img src="~@/assets/image/Logo-img.png" alt="" />
      <NavigationMenu />
    </div>
    <div class="login">
      <HeaderSearch v-model="searchQuery" :posts = "searchPosts" />
      <base-button>Login</base-button>
    </div>
  </header>

</template>

<script>
import NavigationMenu from "../NavigationMenu.vue";
import HeaderSearch from "./HeaderSearch.vue";

import { mapState } from "vuex";

export default {
  components: {
    NavigationMenu,
    HeaderSearch,
  },

  data() {
    return {
      searchQuery: "",
    };
  },
  computed: {
    ...mapState({
      posts: (state) => state.posts.posts,
    }),

    searchPosts() {
      return this.posts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin: 0 auto;
  padding: 31px 25px;
  display: flex;
  justify-content: space-between;
  max-width: $app-width;
  padding: 0 16px;
}

.navigate {
  display: flex;
  align-items: center;
}

.login {
  display: flex;
  align-items: center;
  position: relative;
}

.icon {
  margin-right: 21px;
}
</style>
