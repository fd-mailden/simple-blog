<template lang="">
  <ul class="tags-list" v-if="tags.length">
    <li v-for="tag in tags" :key="tag.id" class="tag">
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

export default {
  props: {
    tags: {
      type: Array,
    },
  },
  data() {
    return {
      ROUTER,
    };
  },
};
</script>
<style lang="scss" scoped>
.tags-list {
  margin-top: 60px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.tag {
  padding: 6px 18px;
  border: 1px solid #000000;
  border-radius: 50px;
  margin: 12px 15px;
}
</style>
