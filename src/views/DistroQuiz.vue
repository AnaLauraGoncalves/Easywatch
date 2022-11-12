<template>
  <div class="DistroQuiz">
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
  margin-top: 10%;
}
</style>

