<template>
  <header class="dashboard-header">
    <img src="~@/assets/image/Logo-img.png" alt="" class="sidebar__logo" />
  </header>
  <section class="sidebar">
    <router-link :to="ROUTER.MAIN.path">
      <img src="~@/assets/image/Logo-img.png" alt="" class="sidebar__logo" />
    </router-link>
    <DashboardMenu />
  </section>

  <main class="dashboard">
    <slot />
  </main>
</template>

<script>
import DashboardMenu from "@/components/Header/DashboardMenu.vue";
import { ROUTER } from "@/router/router";

export default {
  components: { DashboardMenu },
  data() {
    return {
      ROUTER,
    };
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 15vw;
  height: 100vh;
  background-color: $mian-dark;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &__logo {
    margin: 31px auto 51px;
  }
}

.dashboard-header {
  position: fixed;
  top: 0;
  right: 0;
  width: 85vw;
  height: 110px;
  background-color: $main-white;
  display: flex;
  flex-direction: row-reverse;
}

.dashboard {
  margin-top: 110px;
  width: 85vw;
}
</style>
