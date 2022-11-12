<template>
  <div class="container">
    <div class="column-1">
    <SearchBar :distroList = "distros"
     @emit-distros="getDistros" />
     <Search :suggestions = "distros"
     @emit-programs="getDistros" />
    </div>
    <div class="column-2">
      <ListView :distroList = "distros" :selectDistro="selectDistro" />
    </div>
  </div>
</template>

<script>
import Ranks from "@/assets/100DistroRanking.json";
import Search from "@/components/Search.vue";
import SearchBar from "@/components/SearchBar.vue";
import ListView from "@/components/ListView.vue";
import Distros from "@/assets/allDistro.json";

export default {
  name: "ViewDistros",
  components: {
    Search,
    SearchBar,
    ListView,
  },

  data() {
    return {
      ranks: Ranks,
      distros: Distros,
      aux: false,
      selectDistro: Array,
    };
  },

  mounted() {
    console.log(import.meta.url);
  },

  methods: {
    getDistros(selectedDistros){
      this.selectDistro = selectedDistros;    
  },
},

  computed: {
    distroList() {
      return this.distros.slice(0, 6);
    },
  },
};
</script>

<style>
.container {
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.column-1 {
  background-color: #feca05;
  width: 35%;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
}

.column-2 {
  background-color: transparent;
  width: 65%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
}

.mini-container {
  background-color: aliceblue;
  border-radius: 12px;
  margin-left: 1em;
  margin-right: 1em;
  margin-bottom: 3em;
  margin-top: auto;
  padding: 5%;
  overflow: scroll;
  height: 25em;
}

.nome-item {
  font-weight: bold;
  margin-right: 5%;
  margin-left: 5%;
  text-align: start;
  color:black;
  font-size: x-large;
}

.hits-item {
  margin-right: 5%;
  margin-left: 5%;
  text-align: start;
}

li{
  list-style: none;
}
</style>
