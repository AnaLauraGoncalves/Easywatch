<template>
  <div class="DistroQuiz container">
    <DistroQuizVue />
  </div>
</template>

<script>
import DistroQuizVue from "@/components/DistroQuizVue.vue";

export default {
  name: "DistroQuiz",
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
