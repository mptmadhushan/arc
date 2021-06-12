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
import axios from "axios";
Vue.use(VueAnime);

Vue.component("ShapesPop", require("./components/ShapesPop.vue").default);
import VScrollToTop from "v-scroll-to-top";
import VScrollLock from "v-scroll-lock";
import VueSmoothScroll from "vue2-smooth-scroll";

Vue.use(VueSmoothScroll, {
  duration: 1000,
  updateHistory: false,
});
Vue.component("manage-posts", function(resolve) {
  axios.get("../src/hello.html").then((response) => {
    console.log(response.data);
    resolve({ template: response.data });
  });
});

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
  router: router,
  render: (h) => h(App),
}).$mount("#app");
