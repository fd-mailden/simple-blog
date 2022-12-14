<template lang="">
  <ul class="list">
    <p class="list__title">tags.</p>
    <li class="list__item" v-for="tag in TAGS" :key="tag">
      <router-link
        :to="ROUTER.TAG.generate(tag.id)"
        class="list__link"
        href=""
        >{{ tag.name }}</router-link
      >
    </li>
  </ul>
</template>
<script>
import { ROUTER } from "@/settings/vue-routs";
import { TAGS } from "@/consts/tags";

export default {
  data() {
    return {
      ROUTER,
      TAGS,
    };
  },
};
</script>
<style lang="scss" scoped>
.list {
  font-family: "Open Sans";
  color: $main-black;

  &__title {
    font-weight: 700;
    font-size: 20px;
    color: $border-color;
    margin-bottom: 15px;
  }

  &__item {
    margin-bottom: 15px;
    font-weight: 400;
    font-size: 16px;
  }
}
</style>
