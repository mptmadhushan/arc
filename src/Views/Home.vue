<template>
  <div>
    <!-- <hnew /> -->
    <hero />
    <page1 />
  </div>
</template>

<script>
import hero from "./Hero";
import page1 from "./page1";
// import hnew from "./new";
export default {
  components: {
    hero,
    page1,
    // hnew,
    // page4,
  },
  watch: {
    $route(to, from) {
      // react to route changes...
      console.log("route parameter changed");
      console.log(to);
      console.log(from);
    },
  },
  mounted() {
    this.hello();
  },
  methods: {
    hello() {},
  },
};
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
