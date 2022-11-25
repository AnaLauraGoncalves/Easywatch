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
import { slotFlagsText } from "@vue/shared";
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
            axis: 'y',
            label: "Distribution",
            data: [],
            fill: false,
            backgroundColor: [],
            borderColor: [],
            borderWidth: 1,
          },
        ],
      },
      chartOptions: {
        responsive: false,
        maintainAspectRatio: true,
        indexAxis: 'y',
        scales: {
          y: {
            beginAtZero: true,
            drawBorder: false,
            grid:{
              display: false,
            }
          },
          x: {
            drawBorder: false,
            grid:{
              display: false
            }
          }
        },
        animation: {
          duration: 3000
        },
        
        plugins: {
          legend: {
            display: slotFlagsText,
            right: 0,
            labels: {
              color: "white",
              font: 20
            },
          },
          tooltip: {
            labels:{
              color: "white",
              font: 20
            },
            enabled: true,
            intersect: true,
            callbacks: {
              label: function (context) {
                return context.dataset.label + ": " + context.formattedValue;
              },
            },
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
  max-height: 90rem;
}
</style>
