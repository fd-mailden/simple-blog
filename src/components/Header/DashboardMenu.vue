<template>
  <nav class="dashboard-nav">
    <router-link
      v-for="navItem in navList"
      :key="navItem.path"
      :to="navItem.path"
      class="dashboard-nav__link"
    >
      <base-icon :component-name="navItem.icon" />
      <p class="dashboard-nav__text">{{ navItem.name }}</p>
    </router-link>
  </nav>
</template>

<script>
import { DASHBOARD_ROUTS } from "@/settings/dashboard-routs";

export default {
  data() {
    return {
      navList: [
        {
          name: DASHBOARD_ROUTS.DASHBOARD_MAIN.name,
          icon: "DashboardIcon",
          path: DASHBOARD_ROUTS.DASHBOARD_MAIN.path,
        },
        {
          name: DASHBOARD_ROUTS.PROFILE.name,
          icon: "ProfileIcon",
          path: DASHBOARD_ROUTS.PROFILE.path,
        },
        {
          name: DASHBOARD_ROUTS.WRITE_POST.name,
          icon: "EditPostsIcon",
          path: DASHBOARD_ROUTS.WRITE_POST.path,
        },
        {
          name: "All Posts",
          icon: "PostsIcon",
          path: DASHBOARD_ROUTS.DASHBOARD_MAIN.path,
        },
        {
          name: "Resources",
          icon: "ResourcesIcon",
          path: DASHBOARD_ROUTS.DASHBOARD_MAIN.path,
        },
        {
          name: "Settings",
          icon: "SettingsIcon",
          path: DASHBOARD_ROUTS.SETTINGS.path,
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

    &:hover {
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

.router-link-active {
  background-color: $light-gray;
}
</style>
