import Vue from "vue";
import App from "./App.vue";
import Routes from "../route";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel3d from "vue-carousel-3d";
import VueSlickCarousel from "vue-slick-carousel";
import KsVueScrollmagic from "ks-vue-scrollmagic";
Vue.use(KsVueScrollmagic);
import SequentialEntrance from "vue-sequential-entrance";
import "vue-sequential-entrance/vue-sequential-entrance.css";
import VueAnime from "vue-animejs";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
// import "./fullpage.scrollHorizontally.min"; // Optional. When using fullpage extensions
import VueFullPage from "vue-fullpage.js";
Vue.use(VueAnime);
Vue.use(VueFullPage);
import VueSmoothScroll from "vue2-smooth-scroll";
Vue.use(VueSmoothScroll);
import InfiniteSlideBar from "vue-infinite-slide-bar";
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

Vue.component("InfiniteSlideBar", InfiniteSlideBar);
Vue.use(SequentialEntrance);
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
