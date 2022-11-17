<template>
  <HeaderComponent />
  <main class="container">
    <router-view />
  </main>

</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
export default {
  components: { HeaderComponent, },

}
</script>

<style lang="scss">

</style>
