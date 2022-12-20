<template>
  <header class="auth-header">
    <div class="auth-navigate">
      <router-link :to="ROUTER.MAIN.path">
        <img src="~@/assets/image/Logo-img.png" alt="" />
      </router-link>
      <NavigationMenu />
    </div>
    <div class="author-section">
      <HeaderSearch v-model="query" :posts="searchedPost" />

      <button class="header-button">
        <base-icon component-name="BellIcon" />
      </button>

      <popper :show="isOpen">
        <button
          v-on:click="setOpen"
          v-click-outsides="hiddenWindow"
          class="header-button"
        >
          <img
            src="~@/assets/image/avatar.jpg"
            alt="avatar"
            class="author-section__avatar"
          />
        </button>

        <template #content>
          <NavPopupMenu />
        </template>
      </popper>
    </div>
  </header>
</template>

<script>
import { ROUTER } from "@/settings/vue-routs";
import NavigationMenu from "@/components/navigation/NavigationMenu.vue";
import { mapState, useStore } from "vuex";
import { useDebouncedRef } from "@/hooks/useDebouncedRef";
import { watch } from "vue";
import HeaderSearch from "@/components/Header/HeaderSearch.vue";
import BaseIcon from "@/components/UI/BaseIcon.vue";
import NavPopupMenu from "@/components/navigation/NavPopupMenu.vue";

export default {
  components: { NavPopupMenu, BaseIcon, NavigationMenu, HeaderSearch },
  data() {
    return {
      ROUTER,
      isOpen: false,
    };
  },
  computed: {
    ...mapState({
      searchedPost: (state) => state.posts.searchedPost,
    }),
  },
  methods: {
    setOpen() {
      this.isOpen = !this.isOpen;
    },
    hiddenWindow() {
      this.isOpen = false;
    },
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
.auth-header {
  margin: 0 auto;
  padding: 31px 25px;
  display: flex;
  justify-content: space-between;
  max-width: $app-width;
  padding: 0 16px;
}

.auth-navigate {
  display: flex;
  align-items: center;
}

.icon {
  margin-right: 21px;
}

.author-section {
  display: flex;
  align-items: center;

  &__avatar {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-left: 30px;
  }
}

.header-button {
  background-color: transparent;
  border: none;
  position: relative;
}
</style>
