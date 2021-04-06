<template>
  <div id="app">
    <horizontal-scroll class="horizontal-scroll">
      <div class="outer">
        <div class="inner-content">
          <v-img src="../assets/blueprint/1.png" contain height="90vh"></v-img>
        </div>
        <div class="inner-content">
          <v-img
            src="../assets/blueprint/2.png"
            contain
            height="90vh"
            style="margin-left:10vw"
          ></v-img>
        </div>
        <div class="inner-content">
          <v-img
            src="../assets/blueprint/3.png"
            contain
            height="90vh"
            style="margin-left:10vw"
          ></v-img>
        </div>
      </div>
    </horizontal-scroll>
  </div>
</template>

<script>
import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";
export default {
  name: "App",
  components: {
    HorizontalScroll,
  },
};
</script>

<style>
.horizontal-scroll {
  display: flex;
  width: 100%;
  height: 100vh;
  border: solid 2px #2c3e50;
}
.outer {
  display: flex;
  flex: 1;
  transition: 3s ease;

  width: auto;
  height: 100vh;
  padding: 0 20px;
  flex-flow: row nowrap;
  padding-left: 30vw;

  align-items: center;
}
.outer:hover {
  background-color: #282729;
  opacity: 1;
  /* width: 100%; */
  padding-left: 10px;
}
.inner-content {
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 40px);
  border: solid 1px #2c3e50;
  border-radius: 5px;
}
.inner-content:not(:first-of-type) {
  margin-left: 30px;
}
</style>
