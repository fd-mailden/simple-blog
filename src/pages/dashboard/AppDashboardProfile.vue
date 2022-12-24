<script setup>
import BaseInput from "@/components/UI/BaseInput.vue";
import BaseButton from "@/components/UI/BaseButton.vue";
import DashboardUpload from "@/components/dashboard/DashboardUpload.vue";
</script>

<template>
  <form class="profile" @submit.prevent>
    <div class="profile__top">
      <DashboardUpload />
      <div class="input-section">
        <BaseInput margin placeholder="Name" />
        <BaseInput margin placeholder="Last Name" />
        <BaseInput margin placeholder="nickname" />
        <BaseInput type="emial" margin placeholder="Email address" />
        <BaseInput margin placeholder="LinkedIn" />
        <BaseInput margin placeholder="Instagram" />
        <BaseInput margin placeholder="Twitter" />
      </div>
    </div>
    <textarea placeholder="About" class="profile__textarea"></textarea>
    <base-button type="submit"> Update</base-button>
  </form>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/app/dashboard/_dashboard-profile.scss";
</style>
