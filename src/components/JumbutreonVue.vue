<template>
  <!--background-->
  <div class="container" id="jumbutreon">
    <div class="container-1">
      <div class="title">
        <h1 style="color: #feca05">EASYWATCH</h1>
        <h2><strong>Linux in a easy way</strong></h2>
      </div>
      <div class="texto">
        <p>
          EasyWatch is a research project that aims to facilitate the choice of
          a Linux distribution for novice users.
        </p>
      </div>
      <button type="button" class="button" @click="go_to_quiz()">
        Start Quiz
      </button>
    </div>
    <hr />
  </div>
  <div class="container-2" id="jumb-2">
    <div class="container-2-1">
      <h1>What is a Linux?</h1>
      <p>
        To explain what Linux is, first an explanation of what an operating
        system is is needed. In a simplified way, an operating system can be
        described as a software that intermediates the communication between
        user and machine, enabling the execution of programs. In this sense, it
        is possible to say that Linux is nothing more than the core of an open
        source operating system, called Kernel. In order to obtain a complete
        system, ready for the end user, this core is expanded and added with
        specific functionalities for the type of machine on which it must
        operate, this is how Linux distros arises.
      </p>
    </div>
    <img
      src="https://images.unsplash.com/photo-1499914485622-a88fac536970?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=100"
      alt="linux terminal"
      style="border-radius: 12px;"
    />
    <div class="container-2-2">
      <h1>Why use Linux?</h1>
      <p>
        The main differential of desktop operating systems derived from Linux is
        the fact that they are open source, which means they can have their
        source code shared, studied by anyone and are, for the most part,
        costless. In addition, factors such as a high standard of security,
        frequent updates and stability will guarantee the user a more than
        satisfactory experience with an operating system, also having a large
        technical support community, its own community. Another relevant factor
        is the possibility of choosing the distro that best suits your needs and
        resources. Therefore, freedom to choose their own requirements for
        managing computer resources is encouraged.
      </p>
    </div>
  </div>
  <div class="container-2" id="info-container">
    <div class="info" id="info">
      <div id="text" class="text">
        <h1>What are Linux distros?</h1>
        <br />
        <p>
          You might be wondering: Why are there so many different “Linux”? What
          changes from one “version” to another? And which one is better? Well,
          such questions are inevitable when making the decision to change to
          Linux and finding the answers can be a difficult research process.
          Therefore, we aim to bring some basic concepts in a simple way to
          clarify such questions.
        </p>
        <p>
          First of all, it is necessary to explain that Linux itself is just the
          Kernel, that is, the core of an operating system that connects the
          physical part to the machine's programs. To exemplify, when we open an
          application it sends and receives data that are translated to the PC
          components. However, this alone is not enough to meet all users' needs
          and that is where Linux distros arise.
        </p>
        <p v-if="aux">
          In practice, these distributions can be classified as operating
          systems based on Linux, as it can be freely accessed on the internet
          (which is called Open Source). Each one has its peculiarities, such
          as, for example, Arch Linux is a rolling release system and uses the
          "pacman" package manager while Debian is more stable, having fewer
          updates and uses the apt package manager . Therefore, the choice of
          the best distro varies according to the user's needs. As already
          mentioned, if there is a need for an operating system with frequent
          updates, distros such as Arch and Fedora are more suitable, but if
          stability is a higher requirement, Debian is a better choice.
        </p>
        <br />
        <a @click="aux = !aux" class="more">Read more</a><br />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "jumbotron-vue",
  data() {
    return {
      aux: false,
    };
  },
  methods: {
    go_to_info() {
      this.$router.push("/Informacoes");
    },
    go_to_quiz() {
      this.$router.push("/Quiz");
    },
  },
  props: {
    distro_search: Array,
  },
};
</script>
<style scoped>
@media (max-width: 465px) {
  #jumbutreon {
    display: block;
    flex-direction: unset;
    margin: 0;
  }
  #jumbutreon .container-1 {
    display: block;
    margin: 0;
    padding: 0;
    margin-bottom: 4rem;
  }
  #jumbutreon .container-1 .texto {
    margin-right: 5%;
  }
  #jumbutreon .container-1 .button {
    margin: 0 auto;
  }
  #jumb-2.container-2 {
    display: block;
    margin: 0;
    padding: 0;
    margin-bottom: 4rem;
    max-height: unset;
  }
  #jumb-2.container-2 .container-2-1 p {
    margin: 0;
    margin-left: 5%;
  }
  #jumb-2.container-2 .container-2-1 h1 {
    margin-bottom: 5%;
  }
  #jumb-2.container-2 .container-2-2 h1 {
    margin-left: 5%;
    margin-right: 0;
    text-align: start;
  }
  #jumb-2.container-2 .container-2-2 p {
    margin: 0;
    margin-left: 5%;
  }
  #jumb-2.container-2 img {
    border-left: 0.5vh solid #feca05;
    padding: 4rem 0;
    padding-left: 5%;
    margin: 0;
    width: 95%;
    object-fit: cover;
  }
  #jumb-2.container-2 .container-2-2 {
    margin: 0;
    padding: 0;
    border-right: none;
    height: fit-content;
    align-items: center;
    justify-content: center;
    border-left: 0.5vh solid #feca05;
  }
  #jumb-2 .container-2-1 {
    margin: 0;
  }
  #info_container.container {
    display: block;
    margin: 0;
    padding: 0;
  }
}
#jumbutreon,
#jumb-2 {
  padding: 0;
  margin: 0;
}

#jumb-2 {
  margin-bottom: 7.2rem;
}
.container-1 {
  gap: 1rem;
  border-left: 0.5vh solid #feca05;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 1.5rem 0 1.5rem;
  margin-bottom: 2rem;
  margin-top: 2.1rem;
}
.container-2 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.container-2-1 {
  display: grid;
  flex-direction: row;
  gap: 2rem;
  margin: 0 1.4rem 0 1.5rem;
}

.container-2-2 {
  display: grid;
  flex-direction: row;
  gap: 2rem;
  margin: 0 1.4rem 0 1.5rem;
  border-right: 0.5vh solid #feca05;
}
.container-2-1 {
  border-left: 0.5vh solid #feca05;
}
.container-2 img {
  height: 400px;
  width: 95%;
  text-align: center;
  object-fit: cover;
  margin: 0 3.5rem;
  margin-bottom: 2rem;
  margin-top: 2rem;
  padding: 0;
}
.container-2 .container-2-1 p {
  text-align: left;
  margin-left: 5%;
  margin-right: 2.5rem;
}
.container-2 .container-2-1 h1 {
  margin-left: 5%;
}
.container-2 .container-2-2 h1 {
  text-align: end;
  margin-right: 5%;
}
.container-2 .container-2-2 p {
  text-align: left;
  margin-right: 5%;
  margin-left: 4.5rem;
}
@media (max-width: 465px) {
  #info-container.container {
    display: grid;
    padding: 0;
    margin: 0;
  }
  #info-container.container .text {
    padding: 1rem;
    margin: 0;
  }
}
#info-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-bottom: 5rem;
  margin: 0;
}

#info {
  border-radius: 10px;
  background-color: rgba(254, 202, 5, 100);
  width: 100%;
  margin: 0 1.4rem 0 1.5rem;
}

#info h1{
  color: black;
}

.text {
  padding: 10px;
  margin: 15px;
}

 a.more{
  background-color: transparent;
  border-color: transparent;
  color: black;
  text-decoration: none;
  border-color: rgb(0, 0, 0);
  border: 1px;
  border-radius: 12px;
}

 #text p {
  text-align: justify;
  color: black;
  font-style: normal;
  font-size: 20px;
}
#distropage h1{
  font-size: 30px;
  font-weight: bold;
  color: black;
}
.more {
  color: white;
  cursor: pointer;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  background-color: #1d2f3b;
}
.more:hover {
  color: white;
  border-radius: 10px;
  background-color: #1d2f3b95;
}
.title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-left: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
}

button {
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
}
button:hover {
  background-color: rgba(254, 202, 5, 0.5);
  border: none;
  border-radius: 10px;
  margin-left: 5%;
  margin-bottom: 5%;
  height: 50px;
  width: 150px;
}
.texto {
  background-color: transparent;
  margin-left: 5%;
  margin-right: 50%;
  margin-bottom: 5%;
  font-size: 20px;
  text-align: justify;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 2%;
}

h1,
.title {
  color: white;
  font-style: normal;
  font-size: 40px;
}

h2 {
  color: white;
  font-style: normal;
  font-size: 30px;
}

p {
  color: azure;
  font-size: 22px ;
}
</style>
