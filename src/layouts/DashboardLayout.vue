<template>
  <div class="dashboard">
    <section class="sidebar">
      <router-link v-if="router" :to="router.MAIN.path">
        <img src="~@/assets/image/Logo-img.png" alt="" class="sidebar__logo" />
      </router-link>
      <DashboardMenu />
    </section>
    <main class="dashboard__main">
      <DashboardHeader />
      <div class="dashboard__slot">
        <slot />
      </div>
    </main>
  </div>
</template>

<script>
import { ROUTER } from "@/settings/vue-routs";
import DashboardMenu from "@/components/Header/DashboardMenu.vue";
import DashboardHeader from "@/components/Header/DashboardHeader.vue";

export default {
  components: { DashboardHeader, DashboardMenu },

  data() {
    return {
      router: ROUTER,
    };
  },
  name: "DashboardLayout",
};
</script>

<style lang="scss" scoped>
.dashboard {
  display: flex;
  height: 100vh;
  align-items: flex-start;
  overflow-x: hidden;
  overflow-y: hidden;

  &__main {
    position: relative;
    margin-top: 120px;
    overflow-x: hidden;
    overflow-y: scroll;
    max-height: 100vh;
    width: 85%;

  }
  &__slot{
    overflow-y: scroll;
    height: 86vh;
    padding-bottom: 100px;

  }
}

.sidebar {
  width: 15%;
  height: 100vh;
  background-color: $main-dark;

  &__logo {
    margin: 31px 30px;
    height: 57px;
    width: 178px;
  }
}
</style>
