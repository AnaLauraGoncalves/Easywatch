<script>

    export default {
        name: "ListView",

        props: {
            distroList: Array,
            selectDistro: Array,
        },

    data() {
    return {
        aux: false,
    };
  },

  methods:{

    openDistro(distro) {
      this.$router.push({ name: "info", params: { distroname: distro }, path: "/info/" + distro });
    },
  },

  computed: {
    distros() {
      if(this.selectDistro.length <= 1){
        return this.distroList.slice(0, 3);
      }
      else{
        return this.selectDistro;
      }
    },
  },
};
</script>

<template>
<div v-if="!aux">
        <li v-for="distro in distros" :key="distro.id" class="item-margem">
          <div class="mini-container">
            <div class="item-simples" @click="openDistro(distro.name)">
              <h2 class="nome-item">{{ distro.name }}</h2>
              <br />
              <p class="hits-item">
                <strong>Based on:</strong> {{ distro.based_ons }}
              </p>
              <p class="hits-item">
                <strong>Desktop:</strong> {{ distro.desktop_environments }}
              </p>
              <p class="hits-item">
                <strong>Popularity:</strong> {{ distro.popularity }}
              </p>
              <p class="hits-item">
                <strong>About: </strong>{{ distro.about }}
              </p>
            </div>
          </div>
        </li>
      </div>
      <div v-if="aux">
        <li v-for="distro in distros" :key="distro.id" class="item-margem">
          <div class="mini-container">
            <div class="item-simples" @click="openDistro(distro.name)">
              <h2 class="nome-item">{{ distro.name }}</h2>
              <br />
              <p class="hits-item">
                <strong>Based on:</strong> {{ distro.based_ons }}
              </p>
              <p class="hits-item">
                <strong>Desktop:</strong> {{ distro.desktop_environments }}
              </p>
              <p class="hits-item">
                <strong>Popularity:</strong> {{ distro.popularity }}
              </p>
              <p class="hits-item">
                <strong>About: </strong>{{ distro.about }}
              </p>
            </div>
          </div>
        </li>
      </div>
      <div style="width: 100%; display: flex; justify-content: center;">
        <button @click="aux = !aux">Ver mais</button> <!--Arrumar isso-->
      </div>

   </template>

<style scoped>
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
button {
  background-color: transparent;
  border-color: rgba(254, 202, 5, 1);
  border-radius: 10px;
  color: rgba(254, 202, 5, 1);
  padding: 0.5em 1.5em;
}
li{
  list-style: none;
}
</style>