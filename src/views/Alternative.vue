<template>
  <div class="container" id="alternative">
    <div class="column-1">
      <div class="container bar">
        <div class="titleSpecific">
          <h3 style="color: white; font-weight: 900;">Alternative Software</h3>
        </div>
        <p style="text-align: center">
          This page is dedicated to search an alternative software.
        </p>
        <div class="search-area">
          <!-- <h2>Search for an Alternative</h2> -->
          <Search
            :suggestions="programs"
            @emit-programs="getSearch"
            @emit-seleced="getSelected"
            @emit-submit="submit"
          />
        </div>
      </div>
    </div>

    <div class="column-2">
      <div class="results">
        <div v-for="(alternative, index) in alternativePrograms" :key="index">
          <OptionsList :alternative="alternative" />
        </div>
      </div>

      <div class="cards">
        <Cards :suggestions="filtredList" :programs="programs" />
      </div>
    </div>
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import Search from "@/components/SearchAlternative.vue";
import Distros from "@/assets/allDistro.json";
import OptionsList from "../components/OptionsList.vue";

export default {
  name: "alternative-software",
  components: {
    Cards,
    Search,
    OptionsList,
  },

  data() {
    return {
      distros: Distros,
      filtredList: [],
      alternativePrograms: [],
      selected: String,
      programs: [
        {
          name: "Adobe Photoshop",
          slug: "adobe-photoshop",
        },
        {
          name: "Adobe Illustrator",
          slug: "adobe-illustrator",
        },
        {
          name: "Gimp",
          slug: "gimp",
        },
        {
          name: "Microsoft Excel",
          slug: "microsoft-excel",
        },
        {
          name: "Bluestacks",
          slug: "bluestacks",
        },
      ],
    };
  },

  methods: {
    getSearch(filtredList) {
      this.filtredList = filtredList;
    },
    getSelected(selected) {
      this.selected = selected;
    },

    submit() {
      this.submitFunction();
    },

    submitFunction() {
      this.alternativePrograms = [];
      let slug;

      for (const program of this.programs) {
        if (program.name == this.selected) {
          slug = program.slug;
        }
      }
      const url =
        `https://alternativeto.net/software/` + slug + `/?license=opensource`;
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
      let ol = doc2.getElementsByTagName("ol")[1].childNodes;
      let programs = [];
      for (const program of ol) {
        if (!program.classList.contains("in-list")) {
          programs.push(program);
        }
      }
      for (const program of programs) {
        let tags = [];
        let info = program.childNodes[0];
        let primaryInfo = info.childNodes[0];
        let description = info.childNodes[2];
        let about = description.innerText;
        let likes =
          primaryInfo.childNodes[0].childNodes[1].childNodes[1].innerText;
        let image = primaryInfo.childNodes[0].childNodes[0].src;
        let name =
          primaryInfo.childNodes[1].childNodes[0].childNodes[0].innerText;
        let ul =
          primaryInfo.childNodes[1].childNodes[1].childNodes[0].childNodes[0];
        for (const li of ul.childNodes) {
          tags.push(li.innerText);
        }
        let obj = this.createProgram(name, about, image, likes, tags);
        this.alternativePrograms.push(obj);
      }
    },

    createProgram(name, about, image, likes, tags) {
      let program = {
        name: name,
        about: about,
        image: image,
        likes: likes,
        tags: tags,
      };

      return program;
    },
  },

  mounted() {},
};
</script>

<style>
@media (max-width: 465px) {
  #alternative .column-1 {
    min-width: 338px;
    width: 100%;
    margin-bottom: 1rem;
  }
  #alternative .column-2 {
    padding: 0;
  }
  #alternative .column-2 .cards #programs-wrapper.programs-wrapper {
    width: 90%;
    position: fixed;
    display: block;
    padding: 0;
    margin: 0px;
  }
  #alternative
    .column-2
    .cards
    #programs-wrapper.programs-wrapper
    .program-card {
    display: flex;
    width: 100%;
    min-height: 48px;
    min-width: unset;
    border-radius: unset;
  }
  #alternative .cards {
    display: flex;
    justify-content: center;
    width: 80%;
  }
}

#alternative.container {
  margin-top: calc(4rem + 70px);
  width: 100%;
}

.column-1 {
  background-color: #253237;
  min-width: 500px;
  width: 70%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 10px;
  position: relative;
}

.column-2 {
  min-width: 500px;
  width: 70%;
  margin: 0 auto;
  padding: 1rem;
  border-radius: 10px;
}

#alternative .search-area {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
}

.cards .programs-wrapper {
  z-index: 0;
}

#alternatives h1 {
  color: white;
  font-style: normal;
  font-size: 40px;
}

h2 {
  color: rgba(255, 255, 255, 0.541);
  font-style: normal;
  font-size: 1.5em;
  margin-bottom: 1em;
}

#alternative .program-card__title {
  color: black;
}
#alternative p{
  color: white;
  font-style: normal;
  font-size: 20px;
}
</style>
