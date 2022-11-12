<template>
  <div class="programs-wrapper" id="programs-wrapper"> 
        <div class="program-card" v-for="program in programsList" :key="program.name">
          <h2 class="program-card__code">{{program.name}}</h2>
          <div class="program-card__icon">
            <!--<img :src="suggestions.icon" alt="program icon" />-->
          </div>
          <p class="program-card__title">{{program.slug}}</p>
        </div>
      </div>
</template>

<script>
export default {
  name: "Page-Card",
  props: {
    suggestions: Array,
    programs: Array,
  },



  methods: {

    suggestionIsFull() { 
      return max = this.suggestions[this.suggestions.length - 1];
    },
  },

  computed: {

    programsList() {
      if(this.suggestions.length == 0 || this.suggestions.length == this.suggestionIsFull){
        return this.programs;
      }else{
        return this.suggestions;
    }
  },
},
};
</script>
<style scoped>

.programs-wrapper{
  margin-bottom:5%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  
}

.program-card{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  width: 288px;
  height: 255px;
  
}
.program-card__title{
  color:rgb(0, 0, 0);
  margin: 15px auto 15px auto;
  text-transform: lowercase;
  text-transform: capitalize;
}
.program-card__code{
  color:rgb(0, 0, 0);
  margin: 15px auto 0 auto;

}
</style>
