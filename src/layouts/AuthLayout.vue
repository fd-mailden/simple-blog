<template>
  <AuthHeader />
  <main>
    <slot />
  </main>
</template>

<script>
import AuthHeader from "@/components/Header/AuthHeader.vue";

export default {
  components: { AuthHeader },
};
</script>

<style lang="scss" scoped></style>
