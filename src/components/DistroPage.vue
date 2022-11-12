<template>
  <head>
    <link
      rel="stylesheet"
      type="text/css"
      href="../assets/asciinema-player.css"
    />
  </head>
  <div class="container" id="info-container">
    <!--<Ranks :distroList=distrosResultado />-->
    <div class="info" id="info">
      <div class="text">
        <h1>O que são distribuições Linux?</h1>
        <br />
        <p>
          Você pode estar se perguntando: Por que há tantos “Linux” diferentes?
          O que muda de uma “versão” para outra? E qual a melhor? Bem, tais
          questionamentos são inevitaveis quando se toma a decisão de migrar
          para o Linux e encontrar as respostas pode ser um processo de pesquisa
          difícil. Por isso, visamos trazer de forma simples alguns conceitos
          basicos para esclarecer tais perguntas.
        </p>
        <p v-if="aux">
          Em primeiro lugar, é preciso explicar que o Linux em si é apenas o
          kernel, ou seja, o nucleo de um sistema operacional que conecta a
          parte física aos programas do computador. Para exemplificar, quando
          abrimos um aplicativo ele evia e recebe dados que são traduzidos para
          os componentes do pc. Contudo, só isso não é suficiente para suprir
          todas as necessidades dos usuários e é apatir daí que surgem as
          distribuições Linux ( ou distros).
        </p>
        <p v-if="aux">
          Na prática, essas distribuições podem ser classificadas como sistemas
          operacionais baseados no Kernel no Linux, já que este pode ser
          acessado livremente na internet (o que é chamado de Open Source). Cada
          uma possui suas peculiaridades, como, por exemplo, o Arch Linux é um
          sistema rolling release (que está em lancamento contínuo) e utiliza o
          gerenciador de pacotes pacman enquanto o Debian é mais estável,
          possindo menos atualizações e usa o gerenciador de pacotes apt. Assim
          sendo, a escolha da melhor distro varia com relação às necessidades do
          usuário. Como já citado, se há necessidade de um sistema operacional
          com atualizações frequentes, distros como Arch e Fedora são mais
          indicadas, mas se a estabilidade for uma requisição maior o Debian é
          uma escolha melhor.
        </p>
        <br>
        <a @click="aux = !aux" class="white">Ler mais</a><br />
      </div>
    </div>
    <div class="asciinema">
      <Asciinema :id="'XnOJXPO3lnSmKzraYjDkbVK1u'" />
    </div>
  </div>

  <!--assinema neofetch-->
</template>

<script>
import Asciinema from "./Asciinema.vue";

export default {
  name: "Distro-page",

  components: {
    Asciinema,
  },

  data() {
    return {
      aux: false,
    };
  },
};
</script>

<style>
#info-container {
  display: flex;
  align-items: flex-end;
  flex-direction: row;
  margin-top: 5%;
}

#info {
  background-color: rgba(254, 202, 5, 100);
  width: 45%;
}

.oculto {
  display: none;
}

.text {
  padding: 10px;
  margin: 15px;
}

button {
  background-color: transparent;
  border-color: transparent;
  color: black;
}

p {
  text-align: justify;
  color:black
}

.row {
  height: 100%;
  width: 100%;
}

.asciinema {
  width: 45%;
  height: 100%;
  margin-left: 5%;

}

h1 {
  font-size: 30px;
  font-weight: bold;
  color: black;
}
</style>
