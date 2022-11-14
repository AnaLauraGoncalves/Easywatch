<template>
  <div class="container" id="distro">
    <div class="column-1">
      <SearchBar :distroList="distros" @emit-distros="getDistros" />
      <Search :suggestions="distros" @emit-programs="getDistros" />
    </div>
    <div class="column-2">
      <ListView :distroList="distros" :selectDistro="selectDistro" />
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
    getDistros(selectedDistros) {
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
@media (max-width: 465px) {
  #distro {
    margin-top: 0;
  }
  #distro .column-1 {
    min-width: 338px;
    width: 100%;
    margin-bottom: 1rem;
  }
  #distro .column-2 {
    padding: 0;
  }
  #distro .column-2 .cards #programs-wrapper.programs-wrapper {
    width: 80%;
    position: fixed;
    display: block;
    padding: 0;
    margin: 0px;
  }
  #distro .column-2 > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    flex-direction: column;
  }
  #distro .column-2 .cards #programs-wrapper.programs-wrapper .program-card {
    display: flex;
    width: 100%;
    min-height: 48px;
    min-width: unset;
    border-radius: unset;
  }

  #distro .cards {
    display: unset;
  }
  #distro .bar .body {
    display: block;
  }
  #distro .bar .body .label {
    margin-bottom: 1rem;
  }
  #distro .buttons button {
    width: 100px;
  }
  #distro .mini-container {
    width: 338px;
    margin-left: 1.5%;
  }
  #distro .mini-container .item-simples {
    padding: 1rem 0.6rem;
  }
}

#distro.container {
  margin-top: calc(4rem + 70px);
  width: 100%;
}

.column-1 {
  background-color: #253237;
  min-width: 500px;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 10px;
  position: relative;
}

.column-2 {
  min-width: 500px;
  width: 70%;
  margin: 0 auto;
  padding: 0;
  border-radius: 10px;
}

.column-2 + .column-2 {
  margin-bottom: 2rem;
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
  color: black;
  font-size: x-large;
}

.hits-item {
  margin-right: 5%;
  margin-left: 5%;
  text-align: start;
}

li {
  list-style: none;
}
</style>
