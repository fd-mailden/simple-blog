<template>
  <header class="dashboard-header">
    <img
      src="~@/assets/image/avatar.jpg"
      alt="avatar"
      class="dashboard-header__avatar"
    />
    <button class="dashboard-header__button">
      <base-icon
        component-name="NotificationIcon"
        class="dashboard-header__icon"
      />
    </button>
    <button class="dashboard-header__button">
      <base-icon component-name="SearchIcon" class="dashboard-header__icon" />
    </button>
  </header>
</template>

<script>
import BaseIcon from "@/components/UI/BaseIcon.vue";

export default {
  components: { BaseIcon },
};
</script>

<style lang="scss" scoped>
.dashboard-header {
  position: fixed;
  top: 0;
  right: 0;
  width: 85vw;
  height: 50px;
  background-color: $main-white;
  display: flex;
  flex-direction: row-reverse;
  padding: 25px 30px;

  &__avatar {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    margin-left: 30px;
  }

  &__button {
    margin-left: 30px;
    border: none;
    background: transparent;
    height: 60px;

  }
}
</style>
