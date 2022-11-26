<template>

<div class="list-group">
  <a  class="list-group-item">
    <div class="row">
      <div class="col-2">
        <img :src="alternative.image" class="img-fluid" alt="logo">
      </div>
      <div class="col-10">
          <div class="col-15">
            <h5 class="list-group-item-heading">{{alternative.name}}</h5>
            <div class="likes">
              <Github class="github-svg" />
              <small class="likes">{{alternative.likes}}</small>
            </div>
          </div>
        <p class="list-group-item-text">{{alternative.about}}</p>
      </div>
        <div class="tags" >
          <small class="text-muted">{{tagsList()}}</small>
        </div>
    </div>
  </a>
   
 <!--<a class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{alternative.name}}</h5>
      <img :src="alternative.image" alt="program icon" />
      <small class="text-muted">{{alternative.likes}}</small>
    </div>
    <p class="mb-1">{{alternative.about}}</p>
    <small class="text-muted">{{alternative.tags}}</small>
  </a>--> 

</div>

</template>

<script>
import Github from "./like_svg.vue";

export default {
    name: "options-software",
    components: {
      Github,
    },
    props:{
      alternative: Array,
    },

    data(){
      return{
      }
    },

    methods:{
      tagsList(){
        let tags = this.alternative.tags
        let tagsList = tags.join(', ')
        return tagsList
      }
    }, 
                     
}


</script>

<style>

.github-svg {
  fill: #000;
  margin: 0.4rem;
  width: 25px;
  height: 25px;
}
.col-15{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:  1rem 0;
}
.col-2{
  padding: 1rem 0;
}
.list-group-item-text{
  text-align: justify;
}
p.list-group-item-text{
  font-size: 0.8rem;
  color:black;
}

a:hover p{
  color:aliceblue
}

a:hover h5{
  color: rgb(254, 202, 5);
  font-family: Poppins-Medium;
}
a:hover small{
  color: rgb(255, 255, 255, 0.8);
}

a:hover .github-svg{
  fill: rgb(254, 202, 5);
}

</style>