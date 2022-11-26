<template>
  <div class="DistroQuiz container">
    <DistroQuizVue :distros="distros"/>
  </div>
</template>

<script>
import DistroQuizVue from "@/components/DistroQuizVue.vue";
import Distros from "@/assets/allDistro.json";

export default {
  name: "DistroQuiz",
  components: {
    DistroQuizVue,
    Distros
  },
  data() {
    return {
      distros: Distros
    };
  }
};
</script>

<style scoped>
.DistroQuiz {
  margin-top: 2rem;
}
</style>
