import Vue from "vue";
import App from "./App.vue";
import Routes from "../route";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel3d from "vue-carousel-3d";
import VueSlickCarousel from "vue-slick-carousel";
import VueAnime from "vue-animejs";
Vue.use(VueAnime);
import VueSmoothScroll from "vue2-smooth-scroll";
Vue.use(VueSmoothScroll);
Vue.component("ShapesPop", require("./components/ShapesPop.vue").default);
import VScrollToTop from "v-scroll-to-top";
import VScrollLock from "v-scroll-lock";

Vue.use(VScrollLock);
Vue.use(VScrollToTop);
Vue.mixin({
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
});

Vue.use(Carousel3d);
Vue.use(VueSlickCarousel);
Vue.config.productionTip = false;
Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,

  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
new Vue({
  created() {
    document.addEventListener("scroll", () => {
      //
    });
    document.addEventListener("aos:in", ({ detail }) => {
      console.log("animated in", detail);
    });

    document.addEventListener("aos:out", ({ detail }) => {
      console.log("animated out", detail);
    });

    AOS.init();
  },
  vuetify,
  render: (h) => h(App),
  router: router,
}).$mount("#app");
