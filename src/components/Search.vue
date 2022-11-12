<script>

export default {
  name: "search-vue",

  props: {
          suggestions: Array,
        },

  watch:{
    searchSuggestion(){
      this.filterdPrograms = this.suggestions.filter((program) => {
        return program.name.toLowerCase().includes(this.searchSuggestion.toLowerCase());
      });
    /* this.filterdPrograms = this.suggestions.filter((program) => 
     program.name.toLowerCase().includes(this.searchSuggestion.toLowerCase())
     );*/
    }
  },

  methods:{
    emitFilterdPrograms(filterdPrograms){
      this.$emit('emit-programs', filterdPrograms);
    },

    emitSelected(searchSuggestion){
      this.$emit('emit-seleced', searchSuggestion);
    },
    emitSubmit(){
      this.$emit('emit-submit');
    }
    
  },

  data() {
    return {
      search: "",
      filterdPrograms: [],
      searchSuggestion: '',
      clicked: false,
    };
  },

  created() {
      this.filterdPrograms = this.suggestions;
  },

 /* data() {
    return {
      search: '',
    };
  },


  props: {
            suggestions: Array,
        },

  methods: {
    emitClick(search){
      this.$emit('emit-search', search);
    },

  },

  computed: {

    suggestions() {
      return this.suggestions.filter(program => {
        return program.name.toLowerCase().includes(this.search.toLowerCase())
      })
    },
   /* distroList() {
      for (const distro of this.distros) {
        if (distro.name == this.params.name) {
          return distro;
        }
      }
      return [];
    },
  },*/
};
</script>

<template>

  <div class="search-container">
    <div class="search-wrapper">
      <div class="search-bar">
        <!--id="search"
        @input="emitFilterdPrograms(filterdPrograms)"-->
        <form onsubmit="event.preventDefault();" role="search">
        <input
        v-model="searchSuggestion"
        type="search"
        class="search-input"
        placeholder="Start typing..."
        :placeholder="searchSuggestion"
        v-on:keyup="emitFilterdPrograms(filterdPrograms)"
        v-on:click="clicked=!clicked"
        />
        <!--<button type="submit" style="color:white;">Go</button>-->
      </form>
      </div>
      <div class="programs-wrapper" id="programs-wrapper" v-show="clicked" >
        <div class="program-card" v-for="program in filterdPrograms" :key="program">
          <a style="display:block; overflow: hidden;"
          v-on:click="searchSuggestion = program.name; emitSelected(searchSuggestion); emitSubmit();">
          <h2 class="program-card__title">{{program.name}}</h2>
          <div class="program-card__icon">
            <img :src="suggestions.icon" alt="program icon" />
          </div>
          <!--<p class="program-card__code">{{program.name}}</p>-->
          </a>
        </div>
      </div>
    </div>
  </div>
    
    <!--<div id="app">
  <div class="search-wrapper">
    <input type="text" v-model="search" placeholder="Search title.."/>
  </div>
  <div class="wrapper">
    <div class="suggestions" v-for="program in suggestions">
      <a v-bind:href="program.name" target="_blank">-->
       <!-- <a :key="program.id" :value="program.name" @click="search = program.name, emitClick(search)">
          {{ program.name }}
        </a>
    </div>
  </div>
  <p>{{search}}</p>
</div>


<div class="programs-wapper" id="programs-wapper">
        <div class="program-card" v-for="program in filterdPrograms" :key="program.name">
          <h2 class="program-card__code">{{program.name}}</h2>
          <div class="program-card__icon">
            <img :src="suggestions.icon" alt="program icon" />
          </div>
          <p class="program-card__title">{{program.name}}</p>
        </div>
      </div>
      
https://www.youtube.com/watch?v=-KI23GLNZuE-->
</template>

<style>

.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
	width: 100%;
}
.search-wrapper {
	margin: auto;
  
}
.search-bar {
	text-align: center;
}
.search-bar input {
	padding: 0.7rem;
  width: 100vh;
  height: 10vh;
  background: rgba(255, 255, 255, 0.808);
  border-radius: 10px;
  border: none;
  transition: background 0.5s;
}
.search-bar input:hover, 
.search-bar input:focus {
  padding: 0.7rem;
  width: 100vh;
  height: 10vh;
  background: rgb(255, 255, 255);
  border-radius: 10px;
  outline: none;
}
.programs-wrapper{
  background-color: aliceblue;
}

</style>
