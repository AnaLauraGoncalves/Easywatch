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

  methods: {
    openDistro(distro) {
      this.$router.push({
        name: "info",
        params: { distroname: distro },
        path: "/Info/" + distro,
      });
    },
  },

  computed: {
    distros() {
      if (this.selectDistro.length <= 1) {
        return this.distroList.slice(0, 3);
      } else {
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
          <div
            style="
              display: flex;
              justify-content: flex-start;
              align-items: center;
              margin-bottom: 10px;
              margin-right: 5%;
              margin-left: 5%;
              grid-gap: 0 10px;
            "
          >
            <img
              style="height: 32px; object-fit: contain"
              v-if="distro.slug"
              v-bind:src="`https://api.allorigins.win/raw?url=https://distrowatch.com/images/yvzhuwbpy/${distro.slug}.png`"
              :alt="distro?.name"
            />
            <h2 class="nome-item" style="margin: 0; padding: 0">
              {{ distro.name }}
            </h2>
          </div>
          <p class="hits-item">
            <strong>Based on:</strong> {{ distro.based_ons }}
          </p>
          <p class="hits-item">
            <strong>Desktop:</strong> {{ distro.desktop_environments }}
          </p>
          <p class="hits-item">
            <strong>Popularity:</strong> {{ distro.popularity }}
          </p>
          <p class="hits-item"><strong>About: </strong>{{ distro.about }}</p>
        </div>
      </div>
    </li>
    <div style="width: 100%; display: flex; justify-content: center">
      <button 
      style="
        background-color: transparent;
        border-color: rgba(254, 202, 5, 1);
        border-radius: 10px;
        color: rgba(254, 202, 5, 1);
        padding: 0.5em 1.5em;
        margin: 2rem 0 0;
      "
      @click="aux = !aux">Ver mais</button>
  </div>
  </div>
  <div v-if="aux">
    <li v-for="distro in this.distroList" :key="distro.id" class="item-margem">
      <div class="mini-container">
        <div class="item-simples" @click="openDistro(distro.name)">
          <div
            style="
              display: flex;
              justify-content: flex-start;
              align-items: center;
              margin-bottom: 10px;
              margin-right: 5%;
              margin-left: 5%;
              grid-gap: 0 10px;
            "
          >
            <img
              style="height: 32px; object-fit: contain"
              v-if="distro.slug"
              v-bind:src="`https://api.allorigins.win/raw?url=https://distrowatch.com/images/yvzhuwbpy/${distro.slug}.png`"
              :alt="distro?.name"
            />
            <h2 class="nome-item" style="margin: 0; padding: 0">
              {{ distro.name }}
            </h2>
          </div>
          <p class="hits-item">
            <strong>Based on:</strong> {{ distro.based_ons }}
          </p>
          <p class="hits-item">
            <strong>Desktop:</strong> {{ distro.desktop_environments }}
          </p>
          <p class="hits-item">
            <strong>Popularity:</strong> {{ distro.popularity }}
          </p>
          <p class="hits-item"><strong>About: </strong>{{ distro.about }}</p>
        </div>
      </div>
    </li>
      <div style="width: 100%; display: flex; justify-content: center">
      <button 
      style="
        background-color: transparent;
        border-color: rgba(254, 202, 5, 1);
        border-radius: 10px;
        color: rgba(254, 202, 5, 1);
        padding: 0.5em 1.5em;
        margin: 2rem 0 0;
      "
      @click="aux = !aux">Ver menos</button>
  </div>
  </div>

</template>

<style scoped>
.mini-container {
  background-color: #ddd;
  border-radius: 10px;
  overflow-x: hidden;
  height: fit-content;
  padding: 0;
  margin: 0;
  margin-bottom: 1rem;
}
.mini-container::-webkit-scrollbar {
  width: 0px;
}

.nome-item {
  font-weight: bold;
  text-align: start;
  color: black;
  font-size: x-large;
}

.item-simples {
  padding: 2rem;
}
.hits-item {
  text-align: start;
}
p.hits-item {
  color: black;
}
li {
  list-style: none;
}


</style>
