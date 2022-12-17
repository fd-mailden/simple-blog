<template>
  <DashboardHeader/>
  <section class="sidebar">
    <router-link v-if="router" :to="router.MAIN.path">
      <img src="~@/assets/image/Logo-img.png" alt="" class="sidebar__logo" />
    </router-link>
    <DashboardMenu />
  </section>

  <main class="dashboard">
    <slot />
  </main>
</template>

<script>
import { ROUTER } from "@/settings/vue-routs";
import DashboardMenu from "@/components/Header/DashboardMenu.vue";
import DashboardHeader from "@/components/Header/DashboardHeader.vue";

export default {
  components: {DashboardHeader, DashboardMenu },

  data() {
    return {
      router: ROUTER,
    };
  },
  name: "DashboardLayout",
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  width: 15vw;
  height: 100vh;
  background-color: $main-dark;


  &__logo {
    margin: 31px 30px;
    height: 57px;
    width: 178px;

  }
}



.dashboard {
  margin-top: 110px;
  margin-left: 15vw;
  padding: 30px;
}
</style>
