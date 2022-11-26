<template>
  <div class="programs-wrapper cards" id="programs-wrapper">
    <div
      class="program-card"
      v-for="program in programsList"
      :key="program.name"
    >
      <div v-if="suggestions?.icon" class="program-card__icon">
        <img :src="suggestions.icon" alt="program icon" />
      </div>
      <div class="program-card__content">
        <div class="program-card__content__title">
        <h3 class="program-card__title">{{ program.name }}</h3>   
        <div class="likes">     
          {{program.like}}
        </div>
      </div>
        <p class="program-card__description">
          {{ program.description }}
        </p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page-Card",
  
  props: {
    suggestions: Array,
    programs: Array,
  },
  methods: {
    suggestionIsFull() {
      return this.suggestions[this.suggestions.length - 1];
    },
  },
  computed: {
    programsList() {
      if (
        this.suggestions.length == 0 ||
        this.suggestions.length == this.suggestionIsFull
      ) {
        return this.programs;
      } else {
        return this.suggestions;
      }
    },
  },
};
</script>

<style>
.cards .programs-wrapper {
  margin-bottom: 5%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
}

.program-card {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: fit-content;
  cursor: pointer;
  padding: 0.5rem;
}
.program-card__title {
  color: rgb(0, 0, 0);
  margin: 15px auto 15px auto;
  text-transform: lowercase;
  text-transform: capitalize;
  width: 100%;
  margin-top: 0;
  padding-top: 0;
}
.program-card__code {
  color: rgb(0, 0, 0);
  margin: 15px auto 0 auto;
}
</style>
