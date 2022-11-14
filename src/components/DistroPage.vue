<template>
  <div class="container" id="info-container">
    <!--<Ranks :distroList=distrosResultado />-->
    <div class="info" id="info">
      <div class="text">
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
        <p v-if="aux">
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
  name: "Distro-page",

  components: {
    // Asciinema,
  },

  data() {
    return {
      aux: false,
    };
  },
};
</script>

<style>
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
}

#info {
  border-radius: 10px;
  background-color: rgba(254, 202, 5, 100);
  width: 100%;
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
  color: black;
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
</style>
