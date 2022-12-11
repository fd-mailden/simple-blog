<template>
  <header class="header">
    <router-link :to="ROUTER.MAIN.path">
      <img src="~@/assets/image/Logo-img.png" alt="" />
    </router-link>
  </header>
</template>

<script>
import { ROUTER } from "@/settings/vue-routs";

export default {
  data() {
    return {
      ROUTER,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin: 0 auto;
  padding: 31px 45px 31px 25px;
  display: flex;
  justify-content: space-between;
  max-width: $app-width;
  padding: 11px 16px;
}
</style>
