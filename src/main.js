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
import InfiniteSlideBar from "vue-infinite-slide-bar";

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
    AOS.init();
  },
  vuetify,
  render: (h) => h(App),
  router: router,
}).$mount("#app");
