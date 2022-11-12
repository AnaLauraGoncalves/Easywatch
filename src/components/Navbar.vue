<template>
<nav class="navbar navbar-expand-sm sticky-top"> 
  <div class="container"> 
    <a class="navbar-brand" style=" align-items: bottom;" href="/">
      <div class="logo">
      <img
        src="../assets/img/logo1.png"
        alt="logo"
        width="32"
        height="32"
        lass="d-inline-block align-text-top"
          />
          <h5>Easywatch</h5>
        </div>
        </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" @click="go_to_view()">View Distros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" @click="go_to_alternative()">Alternatives</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link">About</a>
        </li>
      </ul>
      <a class="navbar-brand" href="https://github.com/">
      <img src="../assets/img/GitHub.png" alt="GitHub" width="30" height="30" lass="d-inline-block align-text-top"> 
    </a>
    
    </div>
  </div>
</nav>

</template>

<script>
export default {
  name: "my-navbar",

  methods: {
    go_to_view() {
      this.$router.push({path: "/ViewDistros.vue", addToHistory: true});
    },
    go_to_alternative() {
      this.$router.push({path: "/Alternative.vue", addToHistory: true});
    },
    go_to_about() {
      this.$router.push({path: "/ViewDistros.vue", addToHistory: true});
    },
  }
};
</script>

<style scoped>
.navbar-nav {
  margin-left: auto;
}
nav {
  backdrop-filter: blur(13.5px);
  display: flex;
  justify-content: center;
  flex-direction: row;
}

a {
  font-size: medium;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

h5{
  font-size:25px;
  color:aliceblue;
  margin-bottom: 0;
  padding: 0 0.5em ;
  
}

.logo > a{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.container{
  padding: 0;
  margin: 0;
}

.nav-link{
  color:aliceblue;
  font-size: 18px;
}

.nav-link:hover{
  color: #feca05;
  text-decoration: none;
  transition: 0.5s;
  background-color: transparent;
}

</style>
