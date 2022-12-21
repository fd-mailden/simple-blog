<template>
  <section class="line-top">
    <article class="line-top__inner">
      <h1 class="line-top__title">Dashboard</h1>
      <button class="line-top__button">Customize</button>
    </article>
  </section>
  <section class="user-views">
    <article class="cards">
      <DashboardInfoCard value="214" name="Total Posts" icon="EditIcon" />
      <DashboardInfoCard value="130K" name="Total Views" icon="EyeIcon" />
      <DashboardInfoCard
        value="The Most Awesome Article Man Has Ever Written"
        name="Most Viewed Article"
        large
      />
    </article>
    <article class="user-views__chart">
      <h2 class="user-views__title">Total Views</h2>
      <DashboardChart />
    </article>
  </section>
</template>

<script>
import DashboardChart from "@/components/dashboard/DashboardChart.vue";
import DashboardInfoCard from "@/components/dashboard/DashboardInfoCard.vue";

export default {
  components: { DashboardInfoCard, DashboardChart },
};
</script>

<style lang="scss" scoped>
.line-top {
  padding: 20px 42px;
  background: #fafafa;
  margin-bottom: 43px;

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__title {
    font-family: "Libre Baskerville";
    font-weight: 400;
    font-size: 26px;
    line-height: 32px;
    color: $main-black;
  }

  &__button {
    background-color: transparent;
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 16px;
    color: $main-black;
    border: 2px solid #1c1c1c;
    border-radius: 5px;
    padding: 9px 15px;
  }
}

.cards {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 39px;
}

.user-views {
  padding: 0 42px;

  &__title {
    margin-bottom: 26px;
    font-family: "Libre Baskerville";
    font-weight: 700;
    font-size: 26px;
    color: $border-color;
  }
}
</style>
