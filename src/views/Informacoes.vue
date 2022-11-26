<template>
  <div class="conteiner" v-if="distro">
    <div class="conteiner-top">
      <h1>{{ distro.name }}</h1>
      <br />
      <br />
    </div>
    <div class="conteiner-center">
      <div class="text-info">
        <p><span class="negrito">Baseada em:</span>{{ distro.based_ons }}</p>
        <p><span class="negrito">Arquitetura:</span></p>
        <p>
          <span class="negrito">Ambiente Desktop:</span>
          {{ distro.desktop_environments }}
        </p>
        <p><span class="negrito">Popularidade:</span>{{ distro.popularity }}</p>
        <br />
      </div>
      <div class="img">
      <img
        v-if="distro.slug"
        
        v-bind:src="`https://api.allorigins.win/raw?url=https://distrowatch.com/images/yvzhuwbpy/${distro.slug}.png`"
        :alt="distro?.name"
      />
      </div>
    </div>
    <div class="conteiner-bottom">
      <p>{{ distro.about }}</p>
    </div>
  </div>
  <div class="box-1"></div>
  <div class="box-2"></div>
</template>

<script>
import Distros from "@/assets/allDistro.json";
import axios from "axios";

export default {
  name: "informacoesPage",

  data() {
    return {
      distro: null,
      distros: Distros,
      imageUrl: null,
    };
  },
  methods: {
    async goToDistro() {
      const distroname = this.$route.params.distroname;
      for (const distribution of this.distros) {
        if (distribution.name == distroname) {
          this.distro = distribution;
        }
      }

      const options = {
        method: "GET",
        url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
        params: {
          q: this.distro.name + " linux logo",
          pageNumber: "1",
          pageSize: "1",
          autoCorrect: "false",
          safeSearch: "false",
        },
        headers: {
          "X-RapidAPI-Key":
            "2434d3aec6mshbe1de7a1a818a9dp18c174jsn2b9d0b8f84ee",
          "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
        },
      };
      const response = await axios.request(options);
      this.passImage(response);
    },
    passImage(response) {
      for (const image of response.data.value) {
        console.log(image.url);
        this.imageUrl = image.url;
      }
    },
  },
  beforeMount() {
    this.goToDistro();
  },
};
</script>

<style scoped>
.conteiner {
  margin-top: 5%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 10%;
  position: relative;
  z-index: 1;
}

.conteiner-top {
  display: flex;
  justify-content: center;
  align-items: center;
}

.conteiner-center {
  display: flex;
  width: 100%;
  flex-direction: row;
}

.conteiner-bottom {
  display: flex;
  flex-direction: column;
  margin-bottom: auto;
  background-color: #f3f3f3;
}

img {
  width: 200px;
  height: 170px;
  object-fit: cover;
  border-radius: 12px;
  margin-left: 50px;
  margin-right: 9rem;
  margin-bottom: 2rem;
}
.info-links {
  display: flex;
  margin-left: auto;
  flex-direction: row;
}

img {
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
}

#esquerda {
  margin-right: 20px;
}

h3 {
  font-size: large;
  color: aliceblue;
}

h1 {
  color: #feca05;
  font-weight: 900;
  margin-bottom: 2rem;
}

.text-info {
  margin-right: auto;
  margin-left: 2%;
  margin-top: 10px;
}
h4 {
  color: rgb(240, 248, 255);
}
.negrito {
  font-weight: bold;
}
p {
  color: aliceblue;
  font-size: 18px;
}

.conteiner-bottom p {
  color: black;
  margin: 2rem;
}


.box-1{
  position: absolute;
  width: 10rem;
  height: 25rem;
  background-color: #feca05;
  z-index: 0.5;
  bottom: 0;
}

.box-2{
  position: absolute;
  width:10rem;
  height: 25rem;
  background-color: #feca05;
  z-index: 0.5;
  bottom: 10%;
  right: 0;
}
</style>
