<template>
  <div style=" background-color:black">
    <vue-flux :options="options" :images="images" :transitions="transitions2">
      <template v-slot:preloader>
        <flux-preloader />
      </template>
      <template v-slot:controls>
        <flux-controls />
      </template>
    </vue-flux>
    <v-layout row wrap>
      <v-flex md6>
        <div class="outer-wrapper">
          <dynamic-marquee direction="column" hoverPause="false">
            <div class="ma-4">
              <v-img src="../assets/img2.jpg"></v-img>
            </div>
            <div class="mt-4">
              <v-img src="../assets/img1.jpg"></v-img>
            </div>
          </dynamic-marquee>
        </div>
      </v-flex>
    </v-layout>
    <v-parallax
      height="800"
      src="https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
    ></v-parallax>
    <vue-flux :options="options" :images="images" :transitions="transitions">
      <template v-slot:preloader>
        <flux-preloader />
      </template>
      <template v-slot:controls>
        <flux-controls />
      </template>
    </vue-flux>
    <div>
      <VueRollr>
        <img
          src="https://images.unsplash.com/photo-1530629013299-6cb10d168419?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2247&q=80"
        />
        <img
          src="https://images.unsplash.com/photo-1498409505433-aff66f7ba9e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1858&q=80"
        />
        <img
          src="https://images.unsplash.com/photo-1491955478222-69ae25414368?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
        />
        <img
          src="https://images.unsplash.com/photo-1485819196298-11222a657b31?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80"
        />
        <img
          src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
        />
      </VueRollr>
    </div>
  </div>
</template>

<script>
import { VueFlux, FluxControls, FluxPreloader } from "vue-flux";
import DynamicMarquee from "vue-dynamic-marquee";
import VueRollr from "vuerollr";
export default {
  components: {
    VueFlux,
    VueRollr,
    FluxControls,
    FluxPreloader,
    DynamicMarquee,
  },
  data: () => ({
    options: {
      allowFullscreen: true,
      allowToSkipTransition: true,
      autohideTime: 2500,
      autoplay: true,
      bindKeys: false,
      delay: 500,
      enableGestures: true,
      infinite: true,
      lazyLoad: true,
      lazyLoadAfter: 3,
    },
    images: [
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
      "https://images.unsplash.com/photo-1489769002049-ccd828976a6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3314&q=80",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
    ],
    transitions: ["concentric"],
    transitions2: ["explode"],
  }),
};
</script>

<style>
.outer-wrapper {
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
  /* background-color: rgb(209, 32, 32); */
}
</style>
