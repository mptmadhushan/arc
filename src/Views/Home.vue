<template>
  <div class="aaa">
    <hero />
    <page1 />
  </div>
</template>

<script>
import hero from "./Hero";
import page1 from "./page1";
export default {
  components: {
    hero,
    page1,
  },
  watch: {
    $route(to, from) {
      console.log("route parameter changed");
      console.log(to);
      console.log(from);
    },
  },
  mounted() {
    this.hello();
    window.scrollTo(0, 0);
  },
  methods: {
    hello() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>
.aaa {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.a::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.a {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
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
