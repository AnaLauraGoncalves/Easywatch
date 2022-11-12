<template>
  <div class="container">
    <Cards />
    <Informacoes />
    <ul v-for="distro in distros" v-bind:key="distro">
      <ListItem :distro="distro" />
      <!-- <component v-bind:is="list-item" v-bind:item="item"></component> -->
    </ul>
  </div>
</template>

<script>
import Cards from "./Cards.vue";
import Informacoes from "@/views/Informacoes.vue";

export default {
  name: "MyList",
  props: {
    distro: Array,
  },
  components: {
    Cards,
    Informacoes,
  },
};
</script>

<style>
ul {
  list-style: none;
  padding: 0;
  margin: 30px;
}
</style>
