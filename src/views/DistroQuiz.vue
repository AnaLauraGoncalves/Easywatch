<template>
  <div class="DistroQuiz container">
    <DistroQuizVue :distroList="distroList" />
  </div>
</template>

<script>
import DistroQuizVue from "@/components/DistroQuizVue.vue";
import Distros from "@/assets/distros.json";

export default {
  name: "DistroQuiz",
  data:{
    distroList: Distros,
  },
  components: {
    DistroQuizVue,
  },
};
</script>

<style scoped>
.DistroQuiz {
  margin-top: 2rem;
}
</style>
