<template>
  <div class="perguntas">
    <div class="corpo">
      <div id="question" class="titleSpecific">
        <h3>
          {{ counter < 10 ? questionQuiz[counter]?.title : "Results" }}
        </h3>
      </div>
      <div id="answer" v-if="counter <= 9">
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
        <span class="empty" v-if="EmptyAnswer">Select an option*</span>
      </div>
      <div id="result" v-if="counter === 10">
        <DistroResult
          :distroList="distrosResultado"
          v-model:propName="distrosResultado"
        />
       <!-- <div class="card">
          <div class="card-body" >
            <h4 class="card-title">Distribuição recomendada</h4>
            <h5 class="card-name">{{ distrosResultado[0]?.distroName }}</h5>
            <p class="card-text">
              
            </p>
            </div>
        </div>-->
      </div>
      <div id="botao">
        <button v-if="counter > 0 && counter < 10" id="back" @click="back">
          Return
        </button>
        <button v-if="counter >= 0 && counter < 9" id="submit" @click="next">
          {{ questionQuiz[counter]?.button }}
        </button>
        <button v-if="counter == 9" id="submit" @click="analyzeData">
          {{ questionQuiz[counter]?.button }}
        </button>
        <button v-if="counter == 10" id="submit" @click="next">Restart</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import DistroResult from "./DistroResult.vue";
export default {
  name: "DistroQuizVue",

  props: {
    distros: [],
  },
  data() {
    return {
      EmptyAnswer: false,
      questionQuiz: [
        {
          title: "Find out which Linux distribution is best for you!",
          img: true,
          button: "Start",
        },
        {
          title: "1. What is your current operating system?",
          img: false,
          button: "Next",
          options: [
            {
              base: "windows",
              name: "os",
              text: "Windows",
              button: "Next",
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
              base: "other",
              name: "os",
              text: "Other",
            },
          ],
        },
        {
        title: "2. What is your level of computer knowledge?",
          img: false,
          button: "Next",
          options: [
            {
              base: "advanced",
              name: "advanced",
              text: "I have advanced knowledge",
            },
            {
              base: "intermediate",
              name: "advanced",
              text: "I have an intermediate level of knowledge",
            },
            {
              base: "beginner",
              name: "advanced",
              text: "I don't have much knowledge about this",
            },
          ],
        },
        {
          title:
            "3. Is your computer older or newer? (As of 2010)",
          img: false,
          button: "Next",
          options: [
            {
              base: "old",
              name: "age",
              text: "Older (Before 2010)",
            },
            {
              base: "new",
              name: "age",
              text: "Younger (As of 2010)",
            },
            {
              base: "dontknow",
              name: "age",
              text: "I don't know",
            },
          ],
        },
        {
          title: "4. How many settings do you want to modify during installation? ",
          img: false,
          button: "Next",
          options: [
            {
              base: "basic",
              name: "installation",
              text: "I prefer that the system already has all the predefined settings",
            },
            {
              base: "intermediate",
              name: "installation",
              text: "I want to configure the installation using the graphical interface",
            },
            {
              base: "avanced",
              name: "installation",
              text: "I want to be able to configure as much as possible the installation via terminal",
            },
          ],
        },
                {
          title:
            "5. Do you have a preference on which base your new linux should be?",
          img: false,
          button: "Next",
          options: [
            {
              base: "debian",
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
              base: "other",
              name: "base",
              text: "Other",
            },
            {
              base: "dontknow",
              name: "base",
              text: "I don't know",
            },
          ],
        },
        {
          title: "6. Some distributions use services to improve the user experience that may affect your privacy. Would you like to have these services?",
          img: false,
          button: "Next",
          options: [
            {
              base: "yes",
              name: "systemd",
              text: "A good user experience is the most important to me",
            },
            {
              base: "no",
              name: "systemd",
              text: "Having more privacy is more important to me.",
            },
            {
              base: "dontcare",
              name: "systemd",
              text: "I don't care",
            },
          ],
        },
        {
          title:
            "7. Do you want a system with a graphical interface? (it's the space where the user can interact with the program. This can include display screens, a mouse, keyboards, and the appearance of a desktop. Without this, everything must be done via command lines via a terminal)",
          img: false,
          button: "Next",
          options: [
            {
              base: "yes",
              name: "gui",
              text: "Yes, I want to have a graphical interface",
            },
            {
              base: "no",
              name: "gui",
              text: "No, I don't want to have graphics",
            },
            {
              base: "dontcare",
              name: "gui",
              text: "I don't care",
            },
          ],
        },
        {
          title: "8. How customizable would you like your graphical interface to be?",
          img: false,
          button: "Next",
          options: [
            {
              base: "customizable",
              name: "desktop",
              text: "I would like a fully customizable graphical interface",
            },
            {
              base: "notcustomizable",
              name: "desktop",
              text: "I don't care much about the type of graphical interface",
            },
            {
              base: "notgui",
              name: "desktop",
              text: "I don't want to have a graphical interface",
            },
          ],
        },
        {
          title: "9. Do you prefer an operating system with faster updates or a more stable system with less frequent updates?",
          img: false,
          button: "Results",
          options: [
            {
              base: "yes",
              name: "updates",
              text: "Yes, I want constant updates",
            },
            {
              base: "no",
              name: "updates",
              text: "No, I want more stability",
            },
            {
              base: "dontcare",
              name: "updates",
              text: "I don't care",
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
        installation: null,
        age: null,
      },
    };
  },
  components: {
    DistroResult,
  },
  computed:{
    description(){
        for(distro in distros){
            if(distro.name == distrosResultado[0]?.distroName ){
                return distro.about
            }
            return "error"
        }
      }
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
        "https://api.allorigins.win/raw?url=https://pastebin.com/raw/iSjk4Qbb";

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
          score += parseFloat(defaultValues.based_on);
        } //ok

        if (this.userAnswers.systemd == "yes" && dist.systemd == true) {
          score += parseFloat(defaultValues.systemd);
        } else if (this.userAnswers.systemd == "no" && dist.systemd == false) {
          score += parseFloat(defaultValues.systemd);
        } else if (
          this.userAnswers.systemd == "dontknow" && dist.systemd == true) {
          score += parseFloat(defaultValues.systemd) * 0.5;
        } //ok
        
        if (this.userAnswers.installation == "basic" && dist.installer == true) {
          score += parseFloat(defaultValues.installer);
        } else if (this.userAnswers.installation == "avanced" && dist.installer == false) {
          score += parseFloat(defaultValues.installer);
        } else if (
          this.userAnswers.installation == "intermediate" && dist.installer == true) {
          score += parseFloat(defaultValues.installer) * 0.5;
        } //ok

        if (this.userAnswers.gui == "no" && dist.windowmanager == "no") {
          score += parseFloat(defaultValues.windowmanager);
        } else if (this.userAnswers.gui == "yes" && dist.windowmanager == "no") {
          score -= parseFloat(defaultValues.windowmanager); //perde pontos
        } 

        if (this.userAnswers.desktop == "customizable" && dist.windowmanager == "customizable") {
          score += parseFloat(defaultValues.windowmanager) * 0.5;
        }else if (
          this.userAnswers.desktop == "dontcare" && dist.windowmanager == "customizable") {
          score += parseFloat(defaultValues.windowmanager) * 0.5 * 0.5;
        }else if (
          this.userAnswers.desktop == "notgui" && !dist.windowmanager == "no") {
          score -= parseFloat(defaultValues.windowmanager) * 0.5 * 0.5;
        }

        if (this.userAnswers.advanced == "beginner") {
          score += parseFloat(defaultValues.user_friendly) * parseFloat(dist.user_friendly);
        } else if (this.userAnswers.advanced == "intermediate") {
          score += parseFloat(defaultValues.user_friendly) * parseFloat(dist.user_friendly) * 0.5;
        } 

        if (this.userAnswers.updates == "yes" && dist.rolling_release == true) {
          score += parseFloat(defaultValues.rolling_release);
        } else if (this.userAnswers.updates == "no" && dist.rolling_release == false) {
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
  font-size: 4vh;
  font-weight: 900;
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
  margin-top: 5%;
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
