<template>
  <nav class="dashboard-nav">
      <a v-for="navItem in navList" :key="navItem" class="dashboard-nav__link">
        <base-icon :component-name="navItem.icon" />
        <p class="dashboard-nav__text">{{ navItem.name }}</p>
      </a>
  </nav>
</template>

<script>
import BaseIcon from "@/components/UI/BaseIcon.vue";

export default {
  components: { BaseIcon },
  data() {
    return {
      navList: [
        {
          name: "Dashboard",
          icon: "DashboardIcon",
        },
        {
          name: "Profile",
          icon: "ProfileIcon",
        },
        {
          name: "Write a Post",
          icon: "EditPostsIcon",
        },
        {
          name: "All Posts",
          icon: "PostsIcon",
        },
        {
          name: "Resources",
          icon: "ResourcesIcon",
        },
        {
          name: "Settings",
          icon: "SettingsIcon",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.dashboard-nav {
  display: block;
  width: 100%;

  &__link {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 20px 30px;
    transition: all 0.3s ease-out;
    &:hover{
      background-color: $light-gray;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: $main-white;
    margin-left: 15px;
  }
}
</style>
