<template>
  <LineChart :chartData="testData" class="chart"/>
</template>

<script>
import { defineComponent } from "vue";
import { LineChart } from "vue-chart-3";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: "DashboardChart",
  components: { LineChart },
  setup() {
    const testData = {
      labels: [
        "JAN",
        "FEB",
        "MAR",
        "APR",
        "MAY",
        "JUN",
        "JUL",
        "AUG",
        "SEP",
        "OCT",
      ],
      datasets: [
        {
          data: [
            70000, 80000, 90000, 120000, 150000, 70000, 80000, 90000, 120000,
            150000,
          ],
          backgroundColor: "#fff",
          borderColor: "#000",
        },
      ],
    };

    return { testData };
  },
});
</script>
<style lang="scss" scoped>
.chart{
  height: 300px;
}
</style>
