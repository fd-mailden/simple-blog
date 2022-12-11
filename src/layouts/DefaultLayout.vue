<template>
  <HeaderComponent />
  <main class="container">
    <slot></slot>
  </main>
  <footer></footer>
</template>

<script>
import HeaderComponent from "@/components/Header/HeaderComponent.vue";

export default {
  name: 'DefaultLayout',
  components: {
    HeaderComponent,
  },
};
</script>

<style lang="scss" scoped></style>
