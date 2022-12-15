<template>
  <HeaderComponent />
  <main class="main-container">
    <slot/>
  </main>
  <footer></footer>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent.vue";

export default {
  name: "DefaultLayout",
  components: {
    HeaderComponent,
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
