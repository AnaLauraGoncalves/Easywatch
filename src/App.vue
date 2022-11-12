<script setup>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue"
</script>

<script>
export default {
  name: "App",
  components: {
    Footer,
    Navbar,
  },
  methods: {
    loadPage: function () {
      this.$router.push({path: "/", addToHistory: true});
    },
  },

  beforeMount() {
    this.loadPage();
  },
};

</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <Navbar />
      </nav>
    </div>
  </header>
  <router-view>
  </router-view>
  <Footer></Footer>
</template>

<style scoped>
header {
  color: #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
}

.wrapper {
  width: 100%;
}

.image{
  height: 100%;

}

.container{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
