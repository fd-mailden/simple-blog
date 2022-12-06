<template>
  <PostComponent  :postId="$route.params.id" />
  <!-- <PostComponent :key="$route.params.id" :postId="$route.params.id" /> -->
</template>

<script>
import PostComponent from "@/components/PostContent.vue";
export default {
  components: {
    PostComponent,
  },
  data() {
    return {
      id: this.$route.params.id,
      authorData: {},
    };
  },

  mounted() {

  },
  computed: {
   
  },
  watch: {
    id(){
      console.log('page'+this.id);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
