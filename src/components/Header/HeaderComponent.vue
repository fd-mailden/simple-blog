<template lang="">
  <header class="header">
    <div class="navigate">
      <router-link :to="ROUTER.MAIN.path">
        <img src="~@/assets/image/Logo-img.png" alt="" />
      </router-link>
      <NavigationMenu />
    </div>
    <div class="login">
      <HeaderSearch v-model="query" :posts="searchedPost" />
      <base-button @click="$router.push(ROUTER.LOGIN.path)">Login</base-button>
    </div>
  </header>
</template>

<script>
import NavigationMenu from "../NavigationMenu.vue";
import HeaderSearch from "./HeaderSearch.vue";
import { useDebouncedRef } from "@/hooks/useDebouncedRef";
import { watch } from "vue";
import { mapState, useStore } from "vuex";
import { ROUTER } from "@/settings/vue-routs";

export default {
  components: {
    NavigationMenu,
    HeaderSearch,
  },
  data() {
    return {
      ROUTER,
    };
  },
  methods: {},
  computed: {
    ...mapState({
      searchedPost: (state) => state.posts.searchedPost,
    }),
  },
  setup() {
    const store = useStore();
    const query = useDebouncedRef("", 500);
    watch(query, (newQuery) => {
      store.dispatch("posts/searchingPosts", newQuery);
    });
    return { query };
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
