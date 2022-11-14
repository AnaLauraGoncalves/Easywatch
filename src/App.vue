<script setup>
import Navbar from "./components/Navbar.vue";
import NewFooter from "@/components/Footer.vue";
</script>

<script>
export default {
  name: "App",
  components: {
    Navbar,
    NewFooter,
  },
  methods: {
    loadPage: function () {
      this.$router.push({ path: "/", addToHistory: true });
    },
  },

  beforeMount() {
    this.loadPage();
  },
};
</script>

<template>
  <nav>
    <Navbar />
  </nav>
  <router-view> </router-view>
  <NewFooter></NewFooter>
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
</style>
