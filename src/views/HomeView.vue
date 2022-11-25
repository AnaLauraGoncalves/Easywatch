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
      dist: Distros,
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
    <div class="cropped-image-ellipse">
      <img src="https://images.unsplash.com/photo-1616927366799-d4cab1b7e545?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=100"
      alt="landingPage" />
    </div>
    <JumbutreonVue :distro_search="dist" />
    <DistroPage />
    <RankingPage />
  </main>
</template>

<style scoped>
.cropped-image-ellipse{
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 1;
  right: 0;
  clip-path: ellipse(100% 100% at right center);
}

@media (max-width: 768px) {
  .cropped-image-ellipse{
    padding-top: 10%;
  }
  .cropped-image-ellipse img{
    width: 50%;
    float: right;
  }

  @media (max-width: 465px) {
    .cropped-image-ellipse img{
      display: none;
    }
  }
}

</style>
