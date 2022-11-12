<template>
  <figure id="player"></figure>
</template>

<script>
export default {
  name: "asciinema-vue",
  props: ["id"],
  data() {
    return {
      source: `https://asciinema.org/a/` + this.id + `.js`,
      ascid: `asciicast-` + this.id,
    };
  },
  mounted() {
    let asciiscript = document.createElement("script");
    asciiscript.setAttribute("src", this.source);
    asciiscript.setAttribute("id", this.ascid);
    console.log(this.source);
    document.getElementById("player").appendChild(asciiscript);
  },
};
</script>
