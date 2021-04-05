<template>
  <div class="aaa">
    <vue-scroll-snap>
      <div class="item"><hero /></div>
      <!-- <div style="width:99vw;height:30vh;padding:10px"></div> -->
      <div class="item"><page1 /></div>
      <!-- <div style="width:99vw;height:30vh;padding:10px"></div> -->
      <div class="item"><page2 /></div>
    </vue-scroll-snap>
  </div>
</template>

<script>
import VueScrollSnap from "vue-scroll-snap";

import hero from "./Hero";
import page1 from "./page1";
import page2 from "./page2";
export default {
  components: {
    hero,
    page1,
    page2,
    VueScrollSnap,
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
.item {
  /* Set the minimum height of the items to be the same as the height of the scroll-snap-container.*/
  width: 100vw;
  height: 100vh;
}

.scroll-snap-container {
  width: 100vw;
  height: 100vh;
}
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
