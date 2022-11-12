<script>
import Cards from '@/components/Cards.vue';
import Search from '@/components/Search.vue';
import Distros from '@/assets/allDistro.json';
import OptionsList from '../components/OptionsList.vue';
import console from 'console';
export default {
    name: "alternative-software",
    components: {
    Cards,
    Search,
    OptionsList
}, 

    data() {
        return {
            distros: Distros,
            filtredList: [],
            alternativePrograms: [],
            selected: String,
            programs: [
    {
        name: 'Adobe Photoshop',
        slug: 'adobe-photoshop'
    },
    {
        name: 'Adobe Illustrator',
        slug: 'adobe-illustrator'
    },
    {
        name: 'Gimp',
        slug: 'gimp'
    },
    {
        name: 'Microsoft Excel',
        slug: 'microsoft-excel'
    },
    {
        name: 'Bluestacks',
        slug: 'bluestacks'
    }
],
        };
      },

      methods: {

    getSearch(filtredList){
        this.filtredList = filtredList;
    },
    getSelected(selected){
        this.selected = selected;
    },

    submit(){
        this.submitFunction();
    },


    submitFunction() {
      this.alternativePrograms = [];
      let slug;

      for(const program of this.programs){
        if(program.name == this.selected){
          slug = program.slug;
        }
      }
      const url = `https://alternativeto.net/software/` + slug + `/?license=opensource`;
     this.loadPage(url);
      },

    async loadPage(url) {
      const obj = await (await fetch(url)).text();
      let parser = new DOMParser();
      let doc = parser.parseFromString(obj, "text/html");
      let body = doc.body;
      let childNodes = body.childNodes;
      let __next = childNodes[0];
      let childNodes2 = __next.childNodes;
      let wrapper = childNodes2[0].innerHTML;
      let doc2 = parser.parseFromString(wrapper, "text/html");
      let ol = doc2.getElementsByTagName('ol')[1].childNodes;
      let programs = [];
      for(const program of ol){
          if((!program.classList.contains('in-list'))){
              programs.push(program);
          }
      }
      for(const program of programs){
          let tags = [];
          let info = program.childNodes[0];
          let primaryInfo = info.childNodes[0];
          let description = info.childNodes[2];
          let about = description.innerText;
          let likes = primaryInfo.childNodes[0].childNodes[1].childNodes[1].innerText;
          let image = primaryInfo.childNodes[0].childNodes[0].src;
          let name = primaryInfo.childNodes[1].childNodes[0].childNodes[0].innerText;
          let ul = primaryInfo.childNodes[1].childNodes[1].childNodes[0].childNodes[0];
          for(const li of ul.childNodes){
              tags.push(li.innerText);
          }
          let obj = this.createProgram(name, about, image, likes, tags);
          this.alternativePrograms.push(obj);
      }
    },

    createProgram(name, about, image, likes, tags){
        let program = {
            name: name,
            about: about,
            image: image,
            likes: likes,
            tags: tags
        }
      
        return program;
    },
  },

    mounted() {

    },

};     
</script>

<template>
  <div class="container">
    <div class="container-1">
      <h1>Alternative Software</h1>
      <p>This page is dedicated to search an alternative software.</p>
     </div>
     <div class="search-area">
      <h2>Search for an Alternative</h2>
      <Search :suggestions = "programs" 
      @emit-programs="getSearch"
      @emit-seleced="getSelected"
      @emit-submit="submit" />
     </div> 
     
     <div class="container-2">
      <div class="results">
    <div v-for="alternative in alternativePrograms" :key="card">
      <OptionsList :alternative = "alternative" />
    </div>
      </div>

    <div class="cards">
       <Cards :suggestions = "filtredList" 
       :programs = "programs" />
    </div>
      
    <!--<h1>Alternative Software</h1>
      <p>
        This page is dedicated to alternative software. This is a list of
        alternative software to popular software and web services that can be
        freely installed and used, without any restrictions. This list is
        maintained by the community and is not a complete list of alternatives.
      </p>
      <p>
        If you would like to add an alternative to this list, please edit this
        page and add the alternative. Please make sure that the alternative is
        free software and that it is not already listed. If you would like to
        help maintain this list, please see the help page.
      </p>
      <p>
        This page was last edited on 1 September 2021, at 20:00. Content is
        available under Creative Commons Attribution-ShareAlike 3.0 Unported
        License unless otherwise noted.
      </p>
      <p>
        This page is dedicated to alternative software. This is a list of
        alternative software to popular software and web services that can be
        freely installed and used, without any form of payment. This list is
        intended to be a resource for people who are looking for an alternative
        to a non-free piece of software. The list is not intended to be a
        comprehensive list of all free software, but rather a list of the most
        popular alternatives to non-free software. This list is not intended to
        be a comprehensive list of all free software, but rather a list of the
        most popular alternatives to non-free software. This list is not
        intended to be a comprehensive list of all free software, but rather a
        list of the most popular alternatives to non-free software. This list is
        not intended to be a comprehensive list of all free software, but rather
        a list of the most popular alternatives to non-free software. This list
        is not intended to be a comprehensive list of all free software, but
        rather a list of the most popular alternatives to non-free software.
      </p>
    -->  
      </div>
    </div>
</template>

<style scoped>

.container{
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
}

.container-1{
  background-color: transparent;
  width: 100%;
  display: flex;
  margin-top: 5%;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 0 20px;
  border-left: 0.7vh solid #feca05;
}

.container-2{
  background-color: transparent;
  width: 100%;
  display: flex;
  margin-top: 4%;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 0 20px;
}
.search-area{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3em 2em 0 2em;
  width: 100%;
}

.cards{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

h1{
  color: white;
  /*font-family: 'Poppins';*/
  font-style: normal;
  font-size: 40px;
}

h2{
  color: rgba(255, 255, 255, 0.541);
  /*font-family: 'Poppins';*/
  font-style: normal;
  font-size: 1.5em;
  margin-bottom: 1em;
}

p{
  color: white;
  /*font-family: 'Poppins';*/
  font-style: normal;
  font-size: 20px;
}
</style>