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

export default {
    name: "options-software",

    props:{
      alternative: Array,
    },

    data(){
      return{
      tags: [],
      }
    },
    

    methods: {

      tagsList(){
       for(row in this.alternative){
          for(tag in this.alternative[row].tags){
            this.tags.push(this.alternative[row].tags[tag]);
          }
       }
       console.log(tag);
      },

    },

    computed: {
    }

                          
}


</script>

<style>

h5{

}

.col-15{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>