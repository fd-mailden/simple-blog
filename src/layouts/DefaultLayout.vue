<template>
  <component :is="header" />
  <main class="main-container">
    <slot />
  </main>
  <footer></footer>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent.vue";
import AuthHeader from "@/components/Header/AuthHeader.vue";

export default {
  name: "DefaultLayout",
  components: {
    HeaderComponent,
    AuthHeader,
  },
  computed: {
    header() {
      return !this.$store.state.auth.isAuth ? "HeaderComponent" : "AuthHeader";
    },
  },
};
</script>

<style lang="scss" scoped>
.main-container {
  max-width: 1332px;
  margin: 0 auto;
  padding: 0 16px;
}
</style>
