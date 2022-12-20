<template>
  <div class="popup">
    <div class="popup__section">
      <h4 class="popup__author">{{ name }}</h4>
      <p class="popup__nickname">@{{ nickname }}</p>
    </div>

    <p class="line"></p>
    <nav class="popup__section">
      <router-link
        class="popup__link"
        v-for="rout in DASHBOARD_ROUTS"
        :key="rout.path"
        :to="rout.path"
        >{{ rout.name }}
      </router-link>
    </nav>
  </div>
</template>

<script>
import { DASHBOARD_ROUTS } from "@/settings/dashboard-routs";

export default {
  props: {
    name: {
      type: String,
      default: "-------",
    },
    nickname: {
      type: String,
      default: "-------",
    },
  },
  data() {
    return {
      DASHBOARD_ROUTS,
    };
  },
};
</script>

<style lang="scss" scoped>
.popup {
  border-radius: 15px;
  display: block;
  background-color: $main-white;
  color: $border-color;
  border: 1px solid #f3f3f3;

  &__section {
    padding: 17px 22px;
    display: flex;
    flex-direction: column;
  }

  &__authr {
    font-family: "Open Sans";
    font-weight: 700;
    font-size: 16px;
  }

  &__nickname {
    font-weight: 400;
    font-size: 14px;
    line-height: 19px;
    margin: 4px 0 7px;
    color: rgba(28, 28, 28, 0.8);
  }

  &__link {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: $border-color;
    margin-bottom: 5px;
  }
}

.line {
  width: 100%;
  height: 1px;
  background-color: rgba(28, 28, 28, 0.1);
  margin: 7px 0;
}
</style>
