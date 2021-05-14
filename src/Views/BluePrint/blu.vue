<template>
  <div v-html="compiledHtml"></div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      fileName: "hello.html",
      input: "",
    };
  },
  created() {
    this.fileName = this.$route.params.fileName;
    this.loadFile();
  },
  computed: {
    compiledHtml: function() {
      return this.input;
    },
  },
  methods: {
    loadFile() {
      axios({
        method: "get",
        // url: "../../" + this.fileName,
        url: "../../hello.html",
      })
        .then((result) => {
          this.input = result.data;
          console.log(this.input);
        })
        .catch((error) => {
          console.error(error, "error getting file");
        });
    },
  },
};
</script>

<style></style>
