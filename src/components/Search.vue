<template>
  <div id="search" class="search-container">
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
     <!-- <div class="programs-wrapper" id="programs-wrapper" v-show="clicked">
        <div
          class="program-card"
          v-for="(program, index) in filterdPrograms"
          :key="index"
        >
          <a
            class="program_select"
            v-on:click="
              searchSuggestion = program.name;
              emitSelected(searchSuggestion);
              emitSubmit();
            "
          >
            <div class="program-card__icon">
              <img
                style="height: 32px; object-fit: contain"
                v-if="program.slug"
                v-bind:src="`https://api.allorigins.win/raw?url=https://distrowatch.com/images/yvzhuwbpy/${program.slug}.png`"
                :alt="program?.name"
              />
            </div>
            <h2
              class="program-card__title"
              style="margin-bottom: 0; padding-bottom: 0; color: black"
            >
              {{ program.name }}
            </h2>
          </a>
        </div>
      </div>-->
    </div>
  </div>
</template>
<script>
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
  mounted() {},
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

.programs-wrapper {
  z-index: 1;
  height: 300px;
  overflow-x: hidden;
  position: absolute;
  background-color: #f3f3f3;
  left: 0;
  right: 0;
  margin: 0px 2rem;
}

#search a.program_select {
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
