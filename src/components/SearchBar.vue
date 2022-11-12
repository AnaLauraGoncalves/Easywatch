<template>
      <h2 style="align-self: center; display: flex; margin-top: 5%; font-size:20px; color: black; font-weight: 900;">Search by Distribution</h2>
      <br><br>     
      <div class="table">
      <table align="center">
        <tbody>
          <tr class="select">
            <td><h4>Based on:</h4></td>
            <td class="select">
              <select v-model="selected" >
                <option v-for="based_ons in arrayBasedOns">
                  {{based_ons}}
                </option>
              </select>
            <!--https://br.vuejs.org/v2/guide/forms.html-->
            </td>
          </tr>
         <tr>
            <td><h4>Not based on:</h4></td>
            <td class="select">
              <select v-model="selected2" >
                <option v-for="based_ons in arrayBasedOns">
                  {{based_ons}}
                </option>
              </select>
            </td>
          </tr>
          <tr>
            <td><h4>Desktop interface:</h4></td>
            <td class="select">
              <select v-model="selected3" >
                <option v-for="desktop in arrayDesktop">
                  {{desktop}}
                </option>
              </select>
            </td>
          </tr>
          <!--<tr>
            <td><h4>Architecture</h4></td>
            <td>
              <select v-model="selected4" >
                <option v-for="distro in distros" :value="distro.value">
                  {{distro.text}}
                </option>
              </select>
            </td>
          </tr>-->
        </tbody>
      </table>
      <div class="buttons">
        <button @click.stop.prevent="emitClick(selectdArray)">Search</button> <!--A partir dessa ação ele manda selectedDistro para ListView-->
      <button @click="clear()">Clear</button> <!--Limpa, quando limpa limpa tudo-->
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

    clear(){
      this.selected = "All";
      this.selected2 = "All";
      this.selected3 = "All";
    },

    emitClick(selectdArray){
      this.$emit('emit-distros', selectdArray);
      if(selectdArray.length == 0){
        alert("No distros found");
      }
    },
  },

  mounted() {
    for(const distro of this.distroList){
      for(const based_on of distro.based_ons){
        if(!this.arrayBasedOns.includes(based_on)){
          this.arrayBasedOns.push(based_on);
        }
      }
      for(const desktop of distro.desktop_environments){
        if(!this.arrayDesktop.includes(desktop)){
          this.arrayDesktop.push(desktop);
        }
      }
    }
  },

  computed: {
    selectdArray(){
     this.selectedDistros = [];
      for(const distro of this.distroList){
        if(this.selected == "All" || distro.based_ons.includes(this.selected)){
          if(this.selected2 == "All" || !distro.based_ons.includes(this.selected2)){
            if(this.selected3 == "All" || distro.desktop_environments.includes(this.selected3)){
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

.column {
  background-color: #feca05;
  width: 35%;
  display: flex;
  flex-direction: column;
  margin-left: 5%;
}
.btn {
  position: absolute;
  /*boder: center; /*definir*/
  left: auto;
  right: auto;
  width: 18.5em;
  background-color: rgba(5, 5, 5, 0.35);
  backdrop-filter: blur(13.5px);
  overflow: scroll;
  max-height: 250px;
  z-index: 1000;
  overflow-y: auto;
  overflow-x: auto;
}
p {
  color: aliceblue;
}

h4 {
  color: black;
  font-size: medium;
}

select{
  max-width: 80%;
  height: 100%;
  background-color: rgba(5, 5, 5, 0.35);
  backdrop-filter: blur(13.5px);
  color: aliceblue;
  font-size: medium;
  max-height: 45%;
}

table{
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  margin-bottom: 5%;
  justify-content: center;
  width: 100%;
}

td{
  display: flex;
  justify-content: center;
  width: 50%;
}

.select{
  display: flex;
  justify-content: flex-start;
 
}

.buttons{
  display: flex;
  justify-content: center;
  margin-top: 5%;
  
}

tr{
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 5%;

}

button{
  background-color: rgba(5, 5, 5, 0.35);
  backdrop-filter: blur(13.5px);
  border-color: transparent;
  color: aliceblue;
  font-size: medium;
  max-height: 45%;
  width: 40%;
  height: 20%;
  align-self: center;
  margin: 0 28%;
}

</style>


