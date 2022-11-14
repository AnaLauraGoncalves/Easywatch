<template>
  <Bar
    v-bind:chart-data="chartData"
    v-bind:chart-options="chartOptions"
    v-model:propName="chartData"
  />
</template>
<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "DistroResult",
  components: { Bar },
  props: {
    distroList: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            label: "Distribution",
            data: [],
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
          },
        ],
      },
      chartOptions: {
        responsive: false,
        maintainAspectRatio: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
  // methods: {},
  mounted() {
    this.chartData = {
      labels: this.distroList.map((distroScore) => distroScore.distroName),
      datasets: [
        {
          label: "Afinidade",
          backgroundColor: "#FECA05",
          data: this.distroList.map((distroScore) => distroScore.score),
        },
      ],
    };
  },
};
</script>
<style>
#result canvas {
  max-height: 20rem;
}
</style>
