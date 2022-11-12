<template>
  <div>
    <v-container fluid>
      <v-row align="center">
        <v-col cols="12" sm="6">
          <v-subheader v-text="'Multiple with persistent hint'"></v-subheader>
        </v-col>
        <v-col cols="12" sm="6">
          <v-select
            v-model="e6"
            :items="states"
            :menu-props="{ maxHeight: '400' }"
            label="Select"
            multiple
            hint="Pick your favorite states"
            persistent-hint
          ></v-select>
        </v-col>

        <v-col cols="12" sm="6">
          <v-subheader
            v-text="'Multiple (Chips) with persistent hint'"
          ></v-subheader>
        </v-col>

        <v-col cols="12" sm="6">
          <v-select
            v-model="e7"
            :items="states"
            label="Select"
            multiple
            chips
            hint="What are the target regions"
            persistent-hint
          ></v-select>
        </v-col>
      </v-row>
    </v-container>
   <v-select v-model="selected" :suggestions="suggestions" label="name"></v-select>
  </div>
</template>

<script>

export default {
  name: "search-igu",
  data() {
    return {
      selected: null,
    };
  },


  props: {
            suggestions: Array,
        },

  methods: {
    suggestions() {
      return this.suggestions;
    },
  },

  computed: {

   /* distroList() {
      for (const distro of this.distros) {
        if (distro.name == this.params.name) {
          return distro;
        }
      }
      return [];
    },*/
  },
};
</script>
<style>

</style>
