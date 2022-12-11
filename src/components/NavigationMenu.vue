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

<template lang="">
  <nav class="nav">
    <router-link :to="ROUTER.MAIN.path" class="nav__link">{{
      ROUTER.MAIN.name
    }}</router-link>
    <router-link :to="ROUTER.TAGS.path" class="nav__link">{{
      ROUTER.TAGS.name
    }}</router-link>
    <router-link :to="ROUTER.ABOUT.path" class="nav__link">{{
      ROUTER.ABOUT.name
    }}</router-link>
  </nav>
</template>

<style lang="scss" scoped>
.nav {
  padding: 25px;

  &__link {
    margin: 0 31px;
    font-family: "Libre Baskerville";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: $main-black;
  }
}
.router-link-active {
  font-weight: 700;
}
</style>
