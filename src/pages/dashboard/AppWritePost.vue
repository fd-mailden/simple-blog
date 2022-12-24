<script setup>
import DashboardUpload from "@/components/dashboard/DashboardUpload.vue";
import BaseInput from "@/components/UI/BaseInput.vue";
import BaseTextarea from "@/components/UI/BaseTextarea.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import TagsSelect from "@/components/TagsSelect.vue";
import { useTagsMethods } from "@/hooks/useTagsMethods";

const {
  currentTags,
  methods: { setTags, deleteTag },
} = useTagsMethods([]);
</script>
<template>
  <form @submit.prevent class="post">
    <DashboardUpload size="avatar--large" />
    <div class="post-content">
      <TagsSelect
        :delete-tag="deleteTag"
        :set-tag="setTags"
        :currentTags="currentTags"
      />
      <BaseInput placeholder="Title" />
      <BaseTextarea placeholder="Text" resize />
    </div>
    <base-button> Save</base-button>
  </form>
</template>

<style lang="scss" scoped>
.post {
  display: block;
  text-align: center;
  padding: 20px;
  margin-bottom: 120px;
}

.post-content {
  margin: 50px auto 0;
  max-width: 991px;
}
</style>
