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
    scrollToElement1() {
      console.log("scroll to element");
      const el = this.$el.getElementsByClassName("1stPage")[0];

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        // el.scrollIntoView({ behavior: "smooth" });
        this.$smoothScroll({
          scrollTo: this.$refs.page1,
          duration: 2000,
          // offset: -50,
        });
      }
    },
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
