<template>
  <div class="corpo">
    <div class="central">
      <div class="perguntas">
        <div id="question"></div>
        <div id="answer" v-if="counter <= 8"></div>
        <div id="result" v-if="counter == 9">
          <DistroResult :distroList="distrosResultado" />
        </div>
        <div id="botao">
          <button v-if="counter == 0" id="submit" @click="initialize">
            Começar
          </button>
          <button v-if="counter == 1" id="submit" @click="q2">Próximo</button>
          <button v-if="counter == 2" id="submit" @click="q3">Próximo</button>
          <button v-if="counter == 3" id="submit" @click="q4">Próximo</button>
          <button v-if="counter == 4" id="submit" @click="q5">Próximo</button>
          <button v-if="counter == 5" id="submit" @click="q6">Próximo</button>
          <button v-if="counter == 6" id="submit" @click="q7">Próximo</button>
          <button v-if="counter == 7" id="submit" @click="analyzeData">
            Ver resultados
          </button>
          <button v-if="counter >= 8" id="submit" @click="window">
            Reiniciar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DistroResult from "./DistroResult.vue";
export default {
  name: "DistroQuizVue",
  data() {
    return {
      counter: 0,
      distrosResultado: [
        {
          distroName: "",
          score: 0,
        },
      ],
    };
  },
  components: {
    DistroResult,
  },
  methods: {
    window() {
      this.counter = 0;
      document.getElementById("question").innerHTML = ` 
    <a>
    Questionário sobre distribuições Linux:
    </a>`;
      document.getElementById("answer").innerHTML = `
    <img id="img" src="https://upload.wikimedia.org/wikipedia/commons/3/3a/Tux_Mono.svg" alt="imagem"><br>`;
    },
    initialize() {
      //objeto que salva as respostas do usuario
      let userAnswers = {
        os: null,
        base: null,
        desktop: null,
        systemd: null,
        gui: null,
        advanced: null,
        updates: null,
      };

      //salva no cache do navegador em JSON
      sessionStorage.setItem("userAnswers", JSON.stringify(userAnswers));
      this.q1();
    },
    q1() {
      this.counter = 1;
      document.getElementById("question").innerHTML = `
    <a>
    1. Qual o seu sistema operacional atual?
    </a>`;
      document.getElementById("answer").innerHTML = `
    <div><input type="radio" id="windows" name="os" value="windows">
    <label for="windows">Windows</label></div><br>
    <div><input type="radio" id="mac" name="os" value="mac">
    <label for="mac">MacOS</label></div><br>
    <div><input type="radio" id="linux" name="os" value="linux">
    <label for="linux">Linux</label></div><br>
    <div><input type="radio" id="other" name="os" value="other">
    <label for="other">Outro</label></div><br>`;
    },

    q2() {
      let userAnswers = JSON.parse(sessionStorage.getItem("userAnswers")); //recebe o objeto da 1 questão
      if (document.getElementById("windows").checked) {
        userAnswers.os = "windows";
      } else if (document.getElementById("mac").checked) {
        userAnswers.os = "mac";
      } else if (document.getElementById("linux").checked) {
        userAnswers.os = "linux";
      } else if (document.getElementById("other").checked) {
        userAnswers.os = "other";
      } else {
        alert("Selecione uma opção");
        return;
      }

      sessionStorage.setItem("userAnswers", JSON.stringify(userAnswers)); //salva no cache de novo

      this.counter = 2;
      document.getElementById("question").innerHTML = `
    <a>
    2. Você tem preferência sobre qual base deveria ser o seu novo linux?
    </a>`;
      document.getElementById("answer").innerHTML = `
    <div><input type="radio" id="debian" name="base" value="debian">
    <label for="debian">Debian</label></div><br>
    <div><input type="radio" id="redhat" name="base" value="redhat">
    <label for="redhat">Red Hat</label></div><br>
    <div><input type="radio" id="arch" name="base" value="arch">
    <label for="arch">Arch</label></div><br>
    <div><input type="radio" id="other" name="base" value="other">
    <label for="other">Outro</label></div><br>`;
    },

    q3() {
      let userAnswers = JSON.parse(sessionStorage.getItem("userAnswers"));
      if (document.getElementById("debian").checked) {
        userAnswers.base = "debian";
      } else if (document.getElementById("redhat").checked) {
        userAnswers.base = "redhat";
      } else if (document.getElementById("arch").checked) {
        userAnswers.base = "arch";
      } else if (document.getElementById("other").checked) {
        userAnswers.base = "other";
      } else {
        alert("Selecione uma opção");
        return;
      }

      sessionStorage.setItem("userAnswers", JSON.stringify(userAnswers));

      this.counter = 3;
      document.getElementById("question").innerHTML = `
    <a>
    3. Você tem preferência sobre qual ambiente de trabalho deveria ser o seu novo linux?
    </a>`;
      document.getElementById("answer").innerHTML = `
    <div><input type="radio" id="gnome" name="desktop" value="gnome">
    <label for="gnome">Gnome</label></div><br>
    <div><input type="radio" id="kde" name="desktop" value="kde">
    <label for="kde">KDE</label></div><br>
    <div><input type="radio" id="xfce" name="desktop" value="xfce">
    <label for="xfce">Xfce</label></div><br>
    <div><input type="radio" id="other" name="desktop" value="other">
    <label for="other">Outro</label></div><br>`;
    },
    q4() {
      let userAnswers = JSON.parse(sessionStorage.getItem("userAnswers"));
      if (document.getElementById("gnome").checked) {
        userAnswers.desktop = "gnome";
      } else if (document.getElementById("kde").checked) {
        userAnswers.desktop = "kde";
      } else if (document.getElementById("xfce").checked) {
        userAnswers.desktop = "xfce";
      } else if (document.getElementById("other").checked) {
        userAnswers.desktop = "other";
      } else {
        alert("Selecione uma opção");
        return;
      }

      sessionStorage.setItem("userAnswers", JSON.stringify(userAnswers));

      this.counter = 4;
      document.getElementById("question").innerHTML = `
    <a>
    4. Você tem preferência a respeito do SystemD?
    </a>`;
      document.getElementById("answer").innerHTML = `
    <div><input type="radio" id="yes" name="systemd" value="yes">
    <label for="yes">Sim, desejo ter SystemD</label></div><br>
    <div><input type="radio" id="no" name="systemd" value="no">
    <label for="no">Não, não quero ter SystemD</label></div><br>
    <div><input type="radio" id="dontcare" name="systemd" value="dontcare">
    <label for="dontcare">Não me importo</label></div><br>
    <div><input type="radio" id="dontknow" name="systemd" value="dontknow">
    <label for="dontknow">Não sei o que é SystemD</label></div><br>`;
    },
    q5() {
      let userAnswers = JSON.parse(sessionStorage.getItem("userAnswers"));
      if (document.getElementById("yes").checked) {
        userAnswers.systemd = "yes";
      } else if (document.getElementById("no").checked) {
        userAnswers.systemd = "no";
      } else if (document.getElementById("dontcare").checked) {
        userAnswers.systemd = "dontcare";
      } else if (document.getElementById("dontknow").checked) {
        userAnswers.systemd = "dontknow";
      } else {
        alert("Selecione uma opção");
        return;
      }

      sessionStorage.setItem("userAnswers", JSON.stringify(userAnswers));

      this.counter = 5;
      document.getElementById("question").innerHTML = `
    <a>
    5. Você deseja um sistema com interface gráfica (como Windows ou Mac, por exemplo)?
    </a>`;
      document.getElementById("answer").innerHTML = `
    <div><input type="radio" id="yes" name="gui" value="yes">
    <label for="yes">Sim, desejo ter interface gráfica</label></div><br>
    <div><input type="radio" id="no" name="gui" value="no">
    <label for="no">Não, não quero ter interface gráfica</label></div><br>
    <div><input type="radio" id="dontcare" name="gui" value="dontcare">
    <label for="dontcare">Não me importo</label></div><br>`;
    },
    q6() {
      let userAnswers = JSON.parse(sessionStorage.getItem("userAnswers"));
      if (document.getElementById("yes").checked) {
        userAnswers.gui = "yes";
      } else if (document.getElementById("no").checked) {
        userAnswers.gui = "no";
      } else if (document.getElementById("dontcare").checked) {
        userAnswers.gui = "dontcare";
      } else {
        alert("Selecione uma opção");
        return;
      }

      sessionStorage.setItem("userAnswers", JSON.stringify(userAnswers));

      this.counter = 6;
      document.getElementById("question").innerHTML = `
    <a>
    6. Você é um usuário avançado de computadores?
    </a>`;
      document.getElementById("answer").innerHTML = `
    <div><input type="radio" id="yes" name="advanced" value="yes">
    <label for="yes">Sim, sou usuário avançado</label></div><br>
    <div><input type="radio" id="no" name="advanced" value="no">
    <label for="no">Não, não sou usuário avançado</label></div><br>
    <div><input type="radio" id="mid" name="advanced" value="mid">
    <label for="mid">Intermediario</label></div><br>`;
    },

    q7() {
      let userAnswers = JSON.parse(sessionStorage.getItem("userAnswers"));
      if (document.getElementById("yes").checked) {
        userAnswers.advanced = "yes";
      } else if (document.getElementById("no").checked) {
        userAnswers.advanced = "no";
      } else if (document.getElementById("mid").checked) {
        userAnswers.advanced = "mid";
      } else {
        alert("Selecione uma opção");
        return;
      }

      sessionStorage.setItem("userAnswers", JSON.stringify(userAnswers));

      this.counter = 7;
      document.getElementById("question").innerHTML = `
    <a>
    7. Você deseja atualizações constantes ou mais estabilidade?
    </a>`;
      document.getElementById("answer").innerHTML = `
    <div><input type="radio" id="yes" name="updates" value="yes">
    <label for="yes">Sim, desejo atualizações constantes</label></div><br>
    <div><input type="radio" id="no" name="updates" value="no">
    <label for="no">Não, desejo mais estabilidade</label></div><br>
    <div><input type="radio" id="dontcare" name="updates" value="dontcare">
    <label for="dontcare">Não me importo</label></div><br>`;
    },

    async analyzeData() {
      let userAnswers = JSON.parse(sessionStorage.getItem("userAnswers"));
      if (document.getElementById("yes").checked) {
        userAnswers.updates = "yes";
      } else if (document.getElementById("no").checked) {
        userAnswers.updates = "no";
      } else if (document.getElementById("dontcare").checked) {
        userAnswers.updates = "dontcare";
      } else {
        alert("Selecione uma opção");
        return;
      }

      this.counter = 8;
      //string de conexão p/ informações das distros e suas respectivas pontuações
      const requestURL = "https://pastebin.com/raw/wG6f0ynp";
      const response = await fetch(requestURL); //abre
      const dados = await response.json(); //espera o retorno do JSON

      const defaultValues = dados.defaultValues;
      const distros = dados.distros;

      let distroScore = {
        distroName: "",
        score: 0,
      };

      let distrosScores = []; //salva as notas e nomes

      for (const dist of distros) {
        let score = 0;
        if (userAnswers.base == dist.based_on) {
          score += parseFloat(defaultValues.based_on); //peso da questão
        }
        if (userAnswers.systemd == "yes" && dist.systemd == true) {
          score += parseFloat(defaultValues.systemd);
        } else if (userAnswers.systemd == "no" && dist.systemd == false) {
          score += parseFloat(defaultValues.systemd);
        } else if (userAnswers.systemd == "dontknow" && dist.systemd == true) {
          score += parseFloat(defaultValues.systemd) * 0.5;
        }
        if (userAnswers.gui == "no" && dist.windowmanager == "no") {
          score += parseFloat(defaultValues.windowmanager);
        } else if (userAnswers.gui == "yes" && dist.windowmanager == "no") {
          score -= parseFloat(defaultValues.windowmanager); //perde pontos
        }
        if (userAnswers.desktop == dist.windowmanager) {
          score += parseFloat(defaultValues.windowmanager);
        }
        if (userAnswers.advanced == "no") {
          score +=
            parseFloat(defaultValues.user_friendly) *
            parseFloat(dist.user_friendly);
        } else if (userAnswers.advanced == "mid") {
          score +=
            parseFloat(defaultValues.user_friendly) *
            parseFloat(dist.user_friendly) *
            0.5;
        }
        if (userAnswers.updates == "yes" && dist.rolling_release == true) {
          score += parseFloat(defaultValues.rolling_release);
        } else if (
          userAnswers.updates == "no" &&
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
    },
    result(distrosScores) {
      //mostra os resultdados
      //o que mais muda
      document.getElementById("question").innerHTML = `
    <a class="titulo-resultado">
    Resultado
    </a>`;

      this.distrosResultado = distrosScores;
      this.counter = 9;
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
.corpo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #080d1f;
  color: #fff;
  padding: 10vh 10vw;
}

.central {
  background-color: #ffffff80;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80vh;
  width: 80vh;
}

.perguntas {
  height: 100%;
  width: 100%;
  padding: 5vh;
}

#question {
  border-left: 0.5vh solid #feca05;
  padding: 5vh;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#question a {
  font-family: "Poppins", sans-serif;
  color: black;
  font-size: 3vh;
}

#answer {
  padding: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 65%;
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
  width: 60vh;
}

#answer label {
  color: #080d1f;
  display: inline-block;
  background-color: #ddd;
  padding: 10px 20px;
  font-family: sans-serif, Arial;
  font-size: 16px;
  border: 2px solid #444;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
}

#answer label:hover {
  background-color: #dfd;
}

#answer input[type="radio"]:focus + label {
  border: 2px dashed #444;
}

#answer input[type="radio"]:checked + label {
  background-color: #bfb;
  border-color: #4c4;
}

#submit {
  background-color: #feca05;
  border: none;
  color: #080d1f;
  padding: 1vh 2vw;
  text-align: center;
  text-decoration: none;
  font-size: 2vh;
  cursor: pointer;
  border-radius: 0.5vh;
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
  height: 100%;
  width: 100%;
  padding: 5vh;
}

#result {
  padding: 3vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 65%;
  max-height: 65% !important;
}
</style>
