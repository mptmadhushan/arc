<template>
  <div class="aaa">
    <div>
      <div class="hero" ref="hero"><hero /></div>
      <div>
        <page1 />
      </div>
      <div data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
        <page2 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import hero from "./Hero";
import page1 from "./page1";
import page2 from "./page2";
import Footer from "./Footer";

export default {
  components: {
    hero,
    page1,
    page2,
    Footer,
  },
  watch: {
    $route(to, from) {
      console.log("route parameter changed");
      console.log(to);
      console.log(from);
    },
  },

  mounted() {
    // document.addEventListener("wheel", this.helb);
    this.hell();

    document.addEventListener("focusin", this.focusChanged);
  },

  methods: {
    hell() {
      console.log("scrolled new");

      document.addEventListener("scroll", inView);
      document.addEventListener("scroll", inView2);
      function inView() {
        if (
          document.getElementById("viewElement").getBoundingClientRect().top <=
          window.innerHeight
        ) {
          console.log("in view 🥰");

          document.removeEventListener("scroll", inView);
        }
      }
      function inView2() {
        if (
          document.getElementById("viewElement2").getBoundingClientRect().top <=
          window.innerHeight
        ) {
          console.log("in view 2 🕵️‍♂️");

          document.removeEventListener("scroll", inView2);
        }
      }
    },
    methnew() {
      console.log("in view methods 😷");
    },
    helb() {
      if (event.deltaY < 0) {
        console.log("up");
      } else {
        // const el = this.$refs.;

        if (
          document.getElementById("viewElement").getBoundingClientRect().top <=
          window.innerHeight
        ) {
          // this.scrollToElement1();
          console.log("in view", window.innerHeight);
          // uncomment below if you only want it to notify once
          document.removeEventListener("scroll", this.helb);
        }

        // if (
        //   document.getElementById("viewElement2").getBoundingClientRect().top <=
        //   window.innerHeight
        // ) {
        //   // this.scrollToElement1();
        //   console.log("in view2", window.innerHeight);
        //   // uncomment below if you only want it to notify once
        //   // document.removeEventListener("scroll", inView);
        // }
        // this.scrollToElement1();
      }
    },
    focusChanged(event) {
      const el = event.target;
      console.log(el);
    },
    scrollToElement5() {
      console.log("scroll to element");
    },
    scrollToElement1() {
      console.log("scroll to element");
      const el = this.$el.getElementsByClassName("page1")[0];

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
  },
};
</script>

<style scoped>
.main {
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  /* scroll-snap-stop: always; 
        This third property is very much like manatory vs proximity
        doesn't work in IE, Edge, Firefox, or Safari */
}
.section {
  height: 100vh;
  width: 100vw;
  scroll-behavior: smooth;
  scroll-snap-align: start;
}
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
  scroll-behavior: smooth;
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
