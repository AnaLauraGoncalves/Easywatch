<template>
  <nav class="navbar navbar-expand-sm sticky-top">
    <div class="container">
      <a class="navbar-brand" style="align-items: bottom" href="/">
        <div class="logo">
          <Logo class="logo-svg" />
          <h5>Easywatch</h5>
        </div>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon light"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" @click="go_to_view()">Search</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="go_to_alternative()">Alternatives</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" @click="go_to_about() ">About</a>
          </li>
        </ul>
        <a
          href="https://github.com/AnaLauraGoncalves/Easywatch"
          target="_blank"
        >
          <Github class="github-svg" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
import Logo from "./logo_svg.vue";
import Github from "./github_svg.vue";

export default {
  name: "my-navbar",
  methods: {
    go_to_view() {
      this.$router.push({ path: "/ViewDistros", addToHistory: true });
    },
    go_to_alternative() {
      this.$router.push({ path: "/Alternative", addToHistory: true });
    },
    go_to_about() {
      this.$router.push({ path: "/About", addToHistory: true });
    },
  },
  components: { Logo, Github },
};
</script>

<style scoped>
.sticky-top {
  position: fixed;
  padding: 0;
  margin: 0;
  width: 100vw;
  top: 0;
  height: fit-content;
  min-height: 4.3rem;
  
}
.navbar-nav {
  margin-left: auto;
}
nav {
  background-color: #dddddd15;
  backdrop-filter: blur(13.5px);
  display: flex;
  justify-content: center;
  flex-direction: row;
}

a {
  font-size: medium;
}

.container > .navbar-brand {
  cursor: pointer;
}
.navbar-brand:hover {
  background-color: transparent;
}

.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.logo-svg,
.github-svg {
  fill: #ffffff;
  width: 48px;
  height: 48px;
}

h5 {
  font-size: 25px;
  text-transform: uppercase;
  color: aliceblue;
  margin-bottom: 0;
  padding: 0 0.5em;
}
a:hover h5,
a:hover .logo-svg {
  transition: 0.2s;
  color: #feca05;
  fill: #feca05;
}

.logo > a {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

a > i {
  fill: white;
}

a > i {
  fill: #feca05;
}

.container {
  padding: 0;
  margin: 0;
}

.nav-link {
  font-size: 25px;
  color: aliceblue;
}

.nav-link:hover {
  cursor: pointer;
  color: #feca05;
  text-decoration: none;
  transition: 0.2s;
  background-color: transparent;
}

a:hover,
a:hover .github-svg {
  cursor: pointer;
  fill: #feca05;
  background-color: transparent;
}
button.navbar-toggler:focus {
  text-decoration: none;
  outline: 0;
  box-shadow: none;
}
span.navbar-toggler-icon {
  background-image: url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'><path stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/></svg>") !important;
}
</style>
