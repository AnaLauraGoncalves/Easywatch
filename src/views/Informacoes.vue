<template>
  <div class="conteiner" v-if="distro">
    <div class="conteiner-top">
      <h1>{{ distro.name }}</h1>
      <br><br>
    </div>

    <div class="conteiner-center">
      <img v-if="this.imageUrl" :src="this.imageUrl" alt="imagem distro" />
      <div class="text-info">
        <p><span class="negrito">Baseada em:</span>{{ distro.based_ons }}</p>
        <p><span class="negrito">Arquitetura:</span></p>
        <p>
          <span class="negrito">Ambiente Desktop:</span>
          {{ distro.desktop_environments }}
        </p>
        <p><span class="negrito">Popularidade:</span>{{ distro.popularity}}</p>
        <br>
      </div>
    </div>
    <hr />
    <br>
    <div class="conteiner-bottom">
      <p>{{ distro.about }}</p>
    </div>
  </div>
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
}

img {
  width: 500px;
  height: 150px;
  left: auto;
  margin-top: 10px;
}
.info-links {
  display: flex;
  margin-left: auto;
  flex-direction: row;
}

img {
  display: flex;
  flex-direction: row;
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

hr {
  color: aliceblue;
  size: 20px;
}
</style>
