<template>
  <div class="container bar">
    <Info class="info-svg" />
    <div class="titleSpecific">
      <h3 style="color: white">Search by Distribution</h3>
    </div>
    <!--https://br.vuejs.org/v2/guide/forms.html-->
    <div class="body">
      <div class="label">
        <span>Based on:</span>
        <select v-model="selected">
          <option v-for="(based_ons, index) in arrayBasedOns" :key="index">
            {{ based_ons }}
          </option>
        </select>
      </div>
      <div class="label">
        <span>Not based on:</span>
        <select v-model="selected2">
          <option v-for="(based_onsm, index) in arrayBasedOns" :key="index">
            {{ based_onsm }}
          </option>
        </select>
      </div>
      <div class="label">
        <span>Desktop interface:</span>
        <select v-model="selected3">
          <option v-for="(desktop, index) in arrayDesktop" :key="index">
            {{ desktop }}
          </option>
        </select>
      </div>
      <div class="buttons">
        <span>&nbsp;</span>
        <span>&nbsp;</span>
        <button @click="clear()">Clear</button>
        <!--Limpa, quando limpa limpa tudo-->
        <button @click.stop.prevent="emitClick(selectdArray)">Search</button>
        <!--A partir dessa ação ele manda selectedDistro para ListView-->
      </div>
    </div>
  </div>
</template>

<script>

export default {

  name: "SearchBar",

  props: {
    distroList: Array,
    selectDistro: Array,
  },

  data() {
    return {
      input: "",
      event: false,
      selected: "All",
      selected2: "All",
      selected3: "All",
      arrayBasedOns: ["All"],
      arrayDesktop: ["All"],
      selectedDistros: [],
      distros: [],
    };
  },
  methods: {
    filteredList() {
      return this.distroList.filter((distro) => {
        return distro.name.toLowerCase().includes(this.input.toLowerCase());
      });
    },
    openening(distro) {
      this.$router.push({
        name: "info",
        params: {
          distroname: distro.name,
        },
      });
    },

    clear() {
      this.selected = "All";
      this.selected2 = "All";
      this.selected3 = "All";
    },

    emitClick(selectdArray) {
      this.$emit("emit-distros", selectdArray);
      if (selectdArray.length == 0) {
        console.log("No distros found", selectdArray);
      }
    },
  },

  mounted() {
    for (const distro of this.distroList) {
      for (const based_on of distro.based_ons) {
        if (!this.arrayBasedOns.includes(based_on)) {
          this.arrayBasedOns.push(based_on);
        }
      }
      for (const desktop of distro.desktop_environments) {
        if (!this.arrayDesktop.includes(desktop)) {
          this.arrayDesktop.push(desktop);
        }
      }
    }
  },

  computed: {
    selectdArray() {
      this.selectedDistros = [];
      for (const distro of this.distroList) {
        if (
          this.selected == "All" ||
          distro.based_ons.includes(this.selected)
        ) {
          if (
            this.selected2 == "All" ||
            !distro.based_ons.includes(this.selected2)
          ) {
            if (
              this.selected3 == "All" ||
              distro.desktop_environments.includes(this.selected3)
            ) {
              this.selectedDistros.push(distro);
            }
          }
        }
      }
      return this.selectedDistros;
    },
  },
};
</script>

<style scoped>
.container .bar {
  margin-top: 0;
}
.body {
  width: 100%;
  display: grid;
  grid-gap: 24px;
  align-items: flex-start;
  justify-content: space-around;
  grid-template-columns: auto auto;
  margin-bottom: 2rem;
}

.body span {
  color: white;
  font-size: 16px;
}

.body select {
  width: 100%;
  border-radius: 10px;
  color: #080d1f;
  display: inline-block;
  background-color: #ddd;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
}
.body select:focus-visible {
  outline: none;
}
.body select::-webkit-scrollbar {
  width: 8px; /* width of the entire scrollbar */
}

.body select::-webkit-scrollbar-track {
  background: #1d2f3b; /* color of the tracking area */
}

.body select::-webkit-scrollbar-thumb {
  background: #feca05; /* color of the tracking area */
  border-radius: 10px;
}

.info-svg {
  fill: #ffffff;
  width: 48px;
  height: 48px;
}

.buttons {
  width: 100%;
  display: grid;
  align-items: flex-start;
  justify-content: space-around;
  grid-template-columns: auto auto;
}
.buttons button {
  background-color: rgba(254, 202, 5, 1);
  border: none;
  color: #000;
  font-size: large;
  border-radius: 10px;
  height: 43px;
  width: 150px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
