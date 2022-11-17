<template>
  <HeaderComponent />
  <main class="container">
    <ArtBanner />
    <EditorsPicks />
    <ArtBanner />

  </main>

</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import ArtBanner from '@/components/ArtBanner.vue';
import EditorsPicks from './components/EditorsPicks.vue';
export default {
  components: { HeaderComponent, ArtBanner, EditorsPicks }

}
</script>

<style lang="scss">
.container {
  max-width: $app-width;
  margin: 0 auto;
  padding: 0 16px;
}
</style>
