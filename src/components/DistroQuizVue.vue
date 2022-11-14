<template>
  <div class="perguntas">
    <div class="corpo">
      <div id="question" class="titleSpecific">
        <h3>
          {{ counter < 8 ? questionQuiz[counter]?.title : "Resultado" }}
        </h3>
      </div>
      <div id="answer" v-if="counter <= 7">
        <div v-if="questionQuiz[counter]?.img === true">
          <img
            id="img"
            alt="imagem"
            src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Tux_Mono.svg"
          />
        </div>
        <div
          v-else
          v-for="(option, index) in questionQuiz[counter]?.options"
          :key="index"
        >
          <input
            type="radio"
            :id="option?.base"
            :name="option?.name"
            :value="option?.base"
            @click="cleanEmpty"
          />
          <label :for="option?.base">{{ option?.text }}</label>
        </div>
        <span class="empty" v-if="EmptyAnswer">Selecione uma opção*</span>
      </div>
      <div id="result" v-if="counter === 8">
        <DistroResult
          :distroList="distrosResultado"
          v-model:propName="distrosResultado"
        />
      </div>
      <div id="botao">
        <button v-if="counter > 0 && counter < 8" id="back" @click="back">
          Voltar
        </button>
        <button v-if="counter >= 0 && counter < 7" id="submit" @click="next">
          {{ questionQuiz[counter]?.button }}
        </button>
        <button v-if="counter == 7" id="submit" @click="analyzeData">
          {{ questionQuiz[counter]?.button }}
        </button>
        <button v-if="counter == 8" id="submit" @click="next">Reiniciar</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DistroResult from "./DistroResult.vue";
export default {
  name: "DistroQuizVue",
  data() {
    return {
      EmptyAnswer: false,
      questionQuiz: [
        {
          title: "Questionário sobre distribuições Linux:",
          img: true,
          button: "Começar",
        },
        {
          title: "1. Qual o seu sistema operacional atual?",
          img: false,
          button: "Próximo",
          options: [
            {
              base: "windows",
              name: "os",
              text: "Windows",
              button: "Próximo",
            },
            {
              base: "mac",
              name: "os",
              text: "MacOs",
            },
            {
              base: "linux",
              name: "os",
              text: "Linux",
            },
            {
              base: "outher",
              name: "os",
              text: "Outro",
            },
          ],
        },
        {
          title:
            "2. Você tem preferência sobre qual base deveria ser o seu novo linux?",
          img: false,
          button: "Próximo",
          options: [
            {
              base: "debiam",
              name: "base",
              text: "Debian",
            },
            {
              base: "redhat",
              name: "base",
              text: "Red Hat",
            },
            {
              base: "arch",
              name: "base",
              text: "Arch",
            },
            {
              base: "outher",
              name: "base",
              text: "Outro",
            },
          ],
        },
        {
          title: "3. Você tem preferência a respeito do SystemD?",
          img: false,
          button: "Próximo",
          options: [
            {
              base: "gnome",
              name: "desktop",
              text: "Gnome",
            },
            {
              base: "kde",
              name: "desktop",
              text: "KDE",
            },
            {
              base: "xfce",
              name: "desktop",
              text: "Xfce",
            },
            {
              base: "outher",
              name: "desktop",
              text: "Outro",
            },
          ],
        },
        {
          title: "4. Você tem preferência a respeito do SystemD?",
          img: false,
          button: "Próximo",
          options: [
            {
              base: "yes",
              name: "systemd",
              text: "Sim, desejo ter SystemD",
            },
            {
              base: "no",
              name: "systemd",
              text: "Não, não quero ter",
            },
            {
              base: "dontcare",
              name: "systemd",
              text: "Não me importo",
            },
            {
              base: "dontknow",
              name: "systemd",
              text: "Não sei o que é SystemD",
            },
          ],
        },
        {
          title:
            "5. Você deseja um sistema com interface gráfica (como Windows ou Mac, por exemplo)?",
          img: false,
          button: "Próximo",
          options: [
            {
              base: "yes",
              name: "gui",
              text: "Sim, desejo ter interface gráfica",
            },
            {
              base: "no",
              name: "gui",
              text: "Não, não quero ter gráfica",
            },
            {
              base: "dontcare",
              name: "gui",
              text: "Não me importo",
            },
          ],
        },
        {
          title: "6. Você é um usuário avançado de computadores?",
          img: false,
          button: "Próximo",
          options: [
            {
              base: "yes",
              name: "advanced",
              text: "Sim, sou um usuário avançado",
            },
            {
              base: "no",
              name: "advanced",
              text: "Não, não sou um usuário avançado",
            },
            {
              base: "mid",
              name: "advanced",
              text: "Intermediario",
            },
          ],
        },
        {
          title: "7. Você deseja atualizações constantes ou mais estabilidade?",
          img: false,
          button: "Ver resultados",
          options: [
            {
              base: "yes",
              name: "updates",
              text: "Sim, desejo atualizações constantes",
            },
            {
              base: "no",
              name: "updates",
              text: "Não, desejo mais estabilidade",
            },
            {
              base: "dontcare",
              name: "updates",
              text: "Não me importo",
            },
          ],
        },
      ],
      counter: 0,
      distrosResultado: [
        {
          distroName: "",
          score: 0,
        },
      ],
      userAnswers: {
        os: null,
        base: null,
        desktop: null,
        systemd: null,
        gui: null,
        advanced: null,
        updates: null,
      },
    };
  },
  components: {
    DistroResult,
  },
  methods: {
    cleanEmpty() {
      this.EmptyAnswer = false;
    },
    back() {
      if (this.counter > 0) {
        this.cleanEmpty();
        document.querySelector("[type=radio]:checked").checked = false;
        this.counter -= 1;
      }
    },
    next() {
      let img = document.getElementsByTagName("img").length;
      let checked = document.querySelectorAll("[type=radio]:checked").length;

      if (checked === 0 && img === 0 && this.counter <= 7) {
        this.EmptyAnswer = true;
      } else if (img >= 1) {
        this.counter += 1;
      } else if (checked > 0) {
        let answer = document.querySelector("[type=radio]:checked").name;
        let value = document.querySelector("[type=radio]:checked").value;
        this.storeAnswers(answer, value);
        this.cleanEmpty();
        document.querySelector("[type=radio]:checked").checked = false;
        this.counter += 1;
      } else if (this.counter > 7) {
        this.counter = 0;
      }
    },
    window() {
      this.counter = 0;
    },
    initialize() {},
    storeAnswers(answer, value) {
      for (var property in this.userAnswers) {
        if (property === answer) {
          this.userAnswers[property] = value;
        }
      }
      sessionStorage.setItem("userAnswers", JSON.stringify(this.userAnswers));
    },

    async analyzeData() {
      const requestURL =
        "https://api.allorigins.win/raw?url=https://pastebin.com/raw/wG6f0ynp";

      let dados = [];
      await axios
        .get(requestURL)
        .then((response) => (dados = response?.data))
        .catch((error) => console.log("error ->", error));

      const defaultValues = dados?.defaultValues;
      const distros = dados?.distros;

      let distroScore = {
        distroName: "",
        score: 0,
      };

      let distrosScores = []; //salva as notas e nomes

      for (const dist of distros) {
        let score = 0;
        if (this.userAnswers.base == dist.based_on) {
          score += parseFloat(defaultValues.based_on); //peso da questão
        }
        if (this.userAnswers.systemd == "yes" && dist.systemd == true) {
          score += parseFloat(defaultValues.systemd);
        } else if (this.userAnswers.systemd == "no" && dist.systemd == false) {
          score += parseFloat(defaultValues.systemd);
        } else if (
          this.userAnswers.systemd == "dontknow" &&
          dist.systemd == true
        ) {
          score += parseFloat(defaultValues.systemd) * 0.5;
        }
        if (this.userAnswers.gui == "no" && dist.windowmanager == "no") {
          score += parseFloat(defaultValues.windowmanager);
        } else if (
          this.userAnswers.gui == "yes" &&
          dist.windowmanager == "no"
        ) {
          score -= parseFloat(defaultValues.windowmanager); //perde pontos
        }
        if (this.userAnswers.desktop == dist.windowmanager) {
          score += parseFloat(defaultValues.windowmanager);
        }
        if (this.userAnswers.advanced == "no") {
          score +=
            parseFloat(defaultValues.user_friendly) *
            parseFloat(dist.user_friendly);
        } else if (this.userAnswers.advanced == "mid") {
          score +=
            parseFloat(defaultValues.user_friendly) *
            parseFloat(dist.user_friendly) *
            0.5;
        }
        if (this.userAnswers.updates == "yes" && dist.rolling_release == true) {
          score += parseFloat(defaultValues.rolling_release);
        } else if (
          this.userAnswers.updates == "no" &&
          dist.rolling_release == false
        ) {
          score += parseFloat(defaultValues.rolling_release);
        }

        distroScore.distroName = dist.name;
        distroScore.score = score;
        distrosScores.push(distroScore);
        distroScore = {};
      }

      distrosScores.sort((a, b) => (a.score < b.score ? 1 : -1));
      this.result(distrosScores);
      this.counter += 1;
    },
    result(distrosScores) {
      this.distrosResultado = distrosScores;
    },
  },
  mounted() {
    let chartjs = document.createElement("script");
    chartjs.setAttribute(
      "src",
      "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js"
    );
    document.head.appendChild(chartjs);
    this.window();
  },
};
</script>

<style>
@media (max-width: 465px) {
  div.perguntas {
    min-width: 338px;
    width: 100%;
    margin-bottom: 1rem;
  }
  .corpo #answer div {
    width: 318px;
  }
}
.corpo {
  padding: 0 12px;
}

#app div.DistroQuiz {
  margin-top: calc(4rem + 70px);
  width: 100%;
}

.perguntas {
  background-color: #253237;
  min-width: 500px;
  width: 70%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 4rem;
}

#question h3 {
  font-family: "Poppins", sans-serif;
  color: white;
  font-size: 3vh;
}

#question h3:hover {
  background-color: transparent;
}

#answer {
  display: grid;
  grid-template-columns: auto;
  grid-gap: 1rem;
  width: fit-content;
  margin: 0 auto;
  justify-content: center;
  padding: 1rem 0;
}

#answer input[type="radio"] {
  opacity: 0;
  position: fixed;
  width: 0;
}

#answer div {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45vw;
}

#answer label {
  color: #080d1f;
  display: inline-block;
  background-color: #ddd;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
}

#answer label:hover {
  background-color: #5c6b73;
  color: white;
}

#answer input[type="radio"]:focus + label {
  border: none;
}

#answer input[type="radio"]:checked + label {
  background-color: #5c6b73;
  color: white;
}

#back {
  background-color: rgba(254, 202, 5, 1);
  border: none;
  color: #000;
  font-size: large;
  border-radius: 10px;
  margin-left: 5%;
  margin-bottom: 5%;
  height: 50px;
  width: 150px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-right: 1rem;
}

#back:hover {
  background-color: hsl(47, 100%, 45%);
  color: #080d1f;
  text-decoration: none;
}

#submit {
  background-color: rgba(254, 202, 5, 1);
  border: none;
  color: #000;
  font-size: large;
  border-radius: 10px;
  margin-left: 5%;
  margin-bottom: 5%;
  height: 50px;
  width: 150px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
}

#submit:hover {
  background-color: hsl(47, 100%, 45%);
  color: #080d1f;
  text-decoration: none;
}

#botao {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10%;
}

#img {
  width: 35%;
  margin: 0 auto;
  object-fit: cover;
}

.empty {
  color: #fe2712;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  text-align: center;
}

#result {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 65%;
  max-height: 65% !important;
}
</style>
