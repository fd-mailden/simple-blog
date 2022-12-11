<template>
  <div class="card">
    <img class="card__image" :src="post.image" />
    <div class="post">
      <CardFields :post="post" v-if = "post"/>
    </div>
  </div>
</template>
<script>
import CardFields from "./CardFields.vue";
export default {
  components: { CardFields },
  props: {
    post: {
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  margin: 50px auto;
  max-width: 856px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  &__image {
    width: 371px;
    height: 298px;
    object-fit: cover;
  }
}

.post {
  max-width: 430px;
  text-align: start;
}
</style>
