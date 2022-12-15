<template>
  <LoginHeader />
  <main class="container">
    <slot/>
  </main>
  <footer></footer>
</template>

<script>
import LoginHeader from "@/components/Header/LoginHeader.vue";
export default {
  name: "LoginLayout",
  components: { LoginHeader },
};
</script>

<style lang="scss" scoped></style>
