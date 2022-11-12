<template>
  <!--background-->
  <div class="container">
    <div class="container-1">
      <div class="title">
        <h1>EASYWATCH</h1>
        <h2><strong>Linux in a easy way</strong></h2>
      </div>
      <div class="texto">
        <p>
          EasyWatch é um projeto de pesquisa que visa facilitar a escolha de uma
          distribuição Linux para usuários iniciantes.
        </p>
      </div>
      <button type="button" class="button" @click="go_to_quiz()">
        Start Quiz
      </button>
    </div>
    <div class="image" style="margin-rigth: 0">
    </div>
    <div class="container-1-2">
    </div>
 

  <div class="container-2">
    <div class="container-2-1">
      <img
        src="../assets/img/linux4.png"
        alt="linux terminal"
        height="150px"
        width="200px"
      />
      <div
        class="container-2-1-1"
        style="border-left: 0.5vh solid #feca05; margin-left: 5%"
      >
        <h1 style="margin-left: 5%">O que é Linux?</h1>
        <p style="text-align: left; margin-left: 5%">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          aliquid dolore blanditiis dolores quaerat nemo omnis sed voluptas
          praesentium totam adipisci natus, et magni, ut porro earum cum id
          quod. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Nesciunt praesentium vel ratione sed quidem aperiam, deserunt
          perspiciatis, officiis, quos sunt placeat voluptatem veritatis.
          Consequuntur recusandae maiores minus eligendi! Consequatur,
          provident!
        </p>
      </div>
    </div>
    <div class="container-3-2">
      <h1 style="text-align: end; margin-right: 5%">Por que usar Linux?</h1>
      <p style="text-align: end; margin-right: 5%">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero aliquid
        dolore blanditiis dolores quaerat nemo omnis sed voluptas praesentium
        totam adipisci natus, et magni, ut porro earum cum id quod. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Nesciunt praesentium vel
        ratione sed quidem aperiam, deserunt perspiciatis, officiis, quos sunt
        placeat voluptatem veritatis. Consequuntur recusandae maiores minus
        eligendi! Consequatur, provident!
      </p>
    </div>
  </div>
</div>
</template>

<script>
//import Search from './Search.vue';

export default {
  name: "jumbotron-vue",

  methods: {
    go_to_info() {
      this.$router.push("/Info.vue");
    },
    go_to_quiz() {
      this.$router.push("/DistroQuiz.vue");
    },
  },

  props: {
    distro_search: Array,
  },
};
</script>
<style scoped>
.container-1 {
  border-left: 0.5vh solid #feca05;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 10%;
  max-height: 1200px;
  max-width: 1400px;
}
.container-2 {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 10%;
  max-height: 1200px;
  max-width: 1400px;
}

.container-2-1 {
  display: flex;
  flex-direction: row;
  gap: 15px;
  margin-bottom: 5%;
  margin-right: 10%;
  margin-left: 10%;
  max-height: 1200px;
  max-width: 1400px;
}

.container-3-2 {
  border-right: 0.5vh solid #feca05;
  display: flex;
  align-self: flex-end;
  flex-direction: column;
  justify-content: flex-end;
  gap: 15px;
  max-height: 1200px;
  max-width: 55%;
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
  color: rgb(245, 245, 245);
  font-size: large;
  border-radius: 10px;
  margin-left: 5%;
  margin-bottom: 5%;
  height: 50px;
  width: 150px;
  font-weight: bold;
}
button:hover {
  background-color: rgba(254, 202, 5, 0.5);
  border: none;
  color: white;
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

.search {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 15px;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 0;
  margin-top: 2%;
}
/*@font-face {
  font-family: Poppins;
  src: url(../assets/Poppins-Black.ttf)
}*/

h1 {
  color: white;
  /*font-family: 'Poppins';*/
  font-style: normal;
  font-size: 40px;
}

h2{
  color: white;
  /*font-family: 'Poppins';*/
  font-style: normal;
  font-size: 30px;

}

p {
  color: azure;
}
</style>
