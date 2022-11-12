<script setup>
import JumbutreonVue from "@/components/JumbutreonVue.vue";
import Distros from "@/assets/allDistro.json";
import RankingPage from "@/components/RankingPage.vue";
import DistroPage from "@/components/DistroPage.vue";
import { createMemoryHistory } from "vue-router";
</script>

<script>
export default {
  name: "LandingPage",
  components: {
    JumbutreonVue,
    RankingPage,
    DistroPage,
  },
  data() {
    return {
      igor: Distros,
    };
  },

  mounted() {
    console.log(createMemoryHistory());
  },

  computed: {
    distros() {
      return this.igor.slice(0, 6);
    },
  },
};
</script>

<template>
  <main>
    <JumbutreonVue :distro_search="igor" />
    <DistroPage />
    <br /><br /><br />
    <RankingPage />
    <br><br>
    <!--<div class="Cards">
    <div v-for="card in distros" :key="card">
  <Cards :distro='card'/>
  </div>
</div>-->
  </main>
</template>

<style scoped>
.Cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 10%;
  margin-inline-start: 10%;
  margin-inline-end: 10%;
  gap: 36px;
  justify-content: space-between;
}
</style>
