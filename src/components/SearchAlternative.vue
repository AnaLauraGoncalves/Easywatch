<template>
  <div class="search-container">
    <div class="search-wrapper">
      <div class="search-bar">
        <form onsubmit="event.preventDefault();" role="search">
          <input
            v-model="searchSuggestion"
            type="search"
            class="search-input"
            :placeholder="
              searchSuggestion.length ? searchSuggestion : 'Start typing...'
            "
            v-on:keyup="emitFilterdPrograms(filterdPrograms)"
            v-on:click="clicked = !clicked"
          />
        </form>
      </div>
      <div class="programs-wrapper" id="programs-wrapper" v-show="clicked">
        <div
          class="program-card"
          v-for="(program, index) in filterdPrograms"
          :key="index"
        >
          <a
            class="program_select"
            :style="suggestions.icon ? 'display: grid;' : 'display: block'"
            v-on:click="
              searchSuggestion = program.name;
              emitSelected(searchSuggestion);
              emitSubmit();
            "
          >
            <div v-if="suggestions.icon" class="program-card__icon">
              <img
                style="height: 32px; object-fit: contain"
                v-bind:src="suggestions.icon"
                alt="program icon"
              />
            </div>
            <h2
              class="program-card__title"
              style="margin-bottom: 0; padding-bottom: 0; color: black; font-size: 25px;"
            >
              {{ program.name }}
            </h2>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: "search-vue",

  props: {
    suggestions: Array,
  },

  watch: {
    searchSuggestion() {
      this.filterdPrograms = this.suggestions.filter((program) => {
        return program.name
          .toLowerCase()
          .includes(this.searchSuggestion.toLowerCase());
      });
    },
  },

  methods: {
    emitFilterdPrograms(filterdPrograms) {
      this.$emit("emit-programs", filterdPrograms);
    },

    emitSelected(searchSuggestion) {
      this.$emit("emit-seleced", searchSuggestion);
    },
    emitSubmit() {
      this.$emit("emit-submit");
    },
  },

  data() {
    return {
      search: "",
      filterdPrograms: [],
      searchSuggestion: "",
      clicked: false,
    };
  },

  created() {
    this.filterdPrograms = this.suggestions;
  },
  mounted() {console.log('suggestions',this.suggestions)},
};
</script>

<style>
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.search-wrapper {
  width: 100%;
  margin: 0 auto;
}

.search-bar {
  text-align: center;
}

.search-bar form {
  width: 100%;
}

.search-bar input {
  width: 100%;
  border-radius: 10px;
  color: #080d1f;
  display: inline-block;
  background-color: #ddd;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  transition: background 0.5s;
}
.search-bar input:hover {
  background: rgb(255, 255, 255);
}

.search-bar input:focus,
.search-bar input:focus-visible {
  outline: none;
}

.programs-wrapper::-webkit-scrollbar,
.search-bar input::-webkit-scrollbar {
  width: 8px; /* width of the entire scrollbar */
}

.programs-wrapper::-webkit-scrollbar,
.search-bar input::-webkit-scrollbar-track {
  background: #1d2f3b; /* color of the tracking area */
}

.programs-wrapper::-webkit-scrollbar,
.search-bar input::-webkit-scrollbar-thumb {
  background: #feca05; /* color of the tracking area */
  border-radius: 10px;
}

.column-2 .cards #programs-wrapper.programs-wrapper {
  background-color: #ddd;
}
.column-2 .cards #programs-wrapper.programs-wrapper .program-card {
  width: 100%;
  height: 100%;
  padding: 1rem;
  min-width: 100px;
  min-height: 100px;
  border-radius: 10px;
  background-color: white;
}
.column-2 .cards #programs-wrapper.programs-wrapper .program-card h3 {
  padding: 0;
  margin: 0;
  font-size: 16px;
}

.cards #programs-wrapper.programs-wrapper {
  width: 100%;
  display: grid;
  overflow-x: hidden;
  grid-gap: 1rem;
  position: unset;
  padding: 1.6rem;
  margin-bottom: 4rem;
  border-radius: 10px;
  height: fit-content;
  justify-content: center;
  background-color: #ddd;
  grid-template-columns: auto auto auto;
}

#alternative .program_select {
  width: 100%;
  display: grid;
  cursor: pointer;
  align-items: center;
  justify-content: flex-start;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
  text-decoration: none;
  color: #080d1f;
  border-bottom: 2px solid #ddd;
}

a.program_select {
  display: grid;
  cursor: pointer;
  align-items: center;
  justify-content: flex-start;
  grid-template-columns: 1fr 3fr;
  grid-gap: 10px;
  width: 100%;
  text-decoration: none;
  color: #080d1f;
  border-bottom: 2px solid #ddd;
}

a.program_select:hover {
  text-decoration: none;
  color: #080d1f;
}

.program-card__icon {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  margin-right: 10px;
}
</style>
