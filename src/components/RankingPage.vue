<template>
  <div class="bigThree">
    <div class="item silver" @click="openDistro(ranks[1].name)">
      <div>
        <!--<img v-if="images[1]" :src="images[1]" alt="imagem distro 2">-->
      </div>
      <div>
        <h1 style="color: black">{{ ranks[1].name }}</h1>
        <img v-if="images[1]" :src="images[1]" alt="imagem distro 2" />
        <!-- <p>{{ranks[1].about}}</p>-->
      </div>
      <div>
        <h2>{{ ranks[1].rankPosition }}º</h2>
        <h3>{{ ranks[1].hits }} acessos por dia</h3>
      </div>
    </div>
    <div class="item gold" @click="openDistro(ranks[0].name)">
      <div>
        <h1 style="color: black">{{ ranks[0].name }}</h1>
        <img v-if="images[0]" :src="images[0]" alt="imagem distro 1" />
        <!-- <p>{{ranks[0].about}}</p>-->
      </div>
      <div>
        <h2>{{ ranks[0].rankPosition }}º</h2>
        <h3>{{ ranks[0].hits }} acessos por dia</h3>
      </div>
    </div>
    <div class="item copper" @click="openDistro(ranks[2].name)">
      <div>
        <h1 style="color: black">{{ ranks[2].name }}</h1>
        <div>
          <img v-if="images[2]" :src="images[2]" alt="imagem distro 3" />
        </div>
        <!--<p>{{ranks[2].about}}</p>-->
      </div>
      <div>
        <h2>{{ ranks[2].rankPosition }}º</h2>
        <h3>{{ ranks[2].hits }} acessos por dia</h3>
      </div>
    </div>
  </div>
  <h1 class="title">Ranking Completo</h1>
  <div v-if="aux">
    <ul class="lista">
      <li v-for="rank in ranks" :key="rank.id" class="item-margem">
        <div class="item-simples" @click="openDistro(rank.name)">
          <h1 class="nome-item">{{ rank.name }}</h1>
          <h2 class="posicao-item">{{ rank.rankPosition }}º</h2>
          <h3 class="hits-item">{{ rank.hits }} acessos por dia</h3>
        </div>
      </li>
    </ul>
  </div>
  <ul class="lista">
    <div v-if="!aux">
      <li v-for="rank in ranks.slice(3, 10)" :key="rank.id" class="item-margem">
        <div class="item-simples" @click="openDistro(rank.name)">
          <h1 class="nome-item">{{ rank.name }}</h1>
          <h2 class="posicao-item">{{ rank.rankPosition }}º</h2>
          <h3 class="hits-item">{{ rank.hits }} acessos por dia</h3>
        </div>
      </li>
    </div>
  </ul>
  <br />
  <div
    style="
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    <button @click="aux = !aux">Carregar mais</button>
  </div>
</template>
<script>
import Ranks from "@/assets/100DistroRanking.json";
import axios from "axios";
export default {
  name: "RankingPage",
  components: {},
  data() {
    return {
      ranks: Ranks,
      images: [],
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
    async getImage(id) {
      let distroName = "";
      switch (id) {
        case 1:
          distroName = this.ranks[0].name;
          break;
        case 2:
          distroName = this.ranks[1].name;
          break;
        case 3:
          distroName = this.ranks[2].name;
          break;
      }

      const options = {
        method: "GET",
        url: "https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI",
        params: {
          q: distroName + " linux logo",
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
      for (const image of response.data.value) {
        return image.url;
      }
    },
  },
  mounted() {
    setTimeout(async () => {
      for (let i = 0; i < 3; i++) {
        this.images[i] = await this.getImage(i + 1);
      }
    }, 1500);
  },
};
</script>
<style scoped>
@media (max-width: 465px) {
  div.bigThree {
    margin: 0;
    padding: 0;
  }

  div.bigThree .item div {
    margin-top: unset;
  }
  div.bigThree h1 {
    transform: rotate(270deg);
  }
  ul.lista .item-simples {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 110px 30px 115px;
    justify-content: space-between;
    align-items: center;
  }
  ul.lista .item-simples .posicao-item {
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
  }
  ul.lista .item-simples h1.nome-item {
    text-align: start;
  }
  ul.lista .item-simples .nome-item,
  ul.lista .item-simples .posicao-item,
  ul.lista .item-simples .hits-item {
    width: 100%;
    text-align: center;
    font-size: 16px;
  }
}
.bigThree {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1em;
  padding: 2em;
  margin-bottom: 7.2rem;
}

.gold:hover,
.silver:hover,
.copper:hover {
  opacity: 0.8;
  transform: 0.2s;
}
.item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  background-color: #1a1a1a;
  color: white;
  padding: 1em;
  width: 99%;
  cursor: pointer;
  gap: 1em;
}

.gold {
  display: flex;
  flex-direction: column;
  background-color: #ffd700;
  color: black;
  width: 33%;
  margin-top: 1em;
}

.silver {
  display: flex;
  flex-direction: column;
  background-color: #c0c0c0;
  color: black;
  width: 33%;
  margin-top: 10em;
}

.copper {
  display: flex;
  flex-direction: column;
  background-color: #cd7f32;
  color: black;
  width: 33%;
  margin-top: 20em;
}

.item img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.item div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
}

.item div h2 {
  font-size: 2em;
}

.item div h3 {
  font-size: 1em;
}
.linha {
  border: 1px solid white;
  margin: 0 2em;
}

.title {
  text-align: center;
  margin: 1em;
  color: white;
}
.lista {
  color: white;
  list-style: none;
  padding: 1em;
}

.item-margem {
  border-bottom: #ffffff50 1px solid;
  border-top: #ffffff50 1px solid;
  cursor: pointer;
  /* margin: 0.5em; */
}

.item-simples {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 1em;
  width: 100%;
}

.item-simples h1,
.item-simples h2,
.item-simples h3 {
  margin-bottom: 0;
}
.nome-item {
  font-size: 1.5em;
  width: 50%;
}

.posicao-item {
  font-size: 1.5em;
  width: 40%;
}

.hits-item {
  font-size: 1em;
  width: 10%;
}

button {
  background-color: transparent;
  border-color: rgba(254, 202, 5, 1);
  border-radius: 10px;
  color: rgba(254, 202, 5, 1);
  padding: 1em 2.5em;
  font-size: 1em;
}

h1,
.nome-item {
  color: white;
}
</style>
