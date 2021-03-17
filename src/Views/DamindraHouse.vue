<template>
  <v-container fluid>
    <div class="text-center">
      <v-layout row wrap justify-center pa-md-2 style="height: 100vh">
        <v-flex md10 align-self-center>
          <v-img
            contain
            height="80vh"
            src="../assets/Damindra_House/_SDS7569.JPG.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="margin-top: 10vh;margin-inline:3vw">
      <v-img
        height="80vh"
        src="../assets/Damindra_House/_SDS7604.JPG.jpg"
      ></v-img>
      <p class="text001">
        Working with rustic wooden bences, and lavish modern furniture to
        combine two worlds info one cohesive unit.
      </p>
    </div>
    <div v-if="isMobile()" class="text-center">
      <v-layout row wrap justify-center pt-md-12 style="height: 100vh">
        <v-flex md7 xs12 sm12 align-self-center>
          <v-img
            contain
            src="../assets/Damindra_House/_SDS7634.JPG.jpg"
          ></v-img>
          <p class="text002 text-center">
            Open air area inside a home, which not only adds to it's beauty but
            also creates a cooling effect through efficient ventilation.
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div v-else class="text-center">
      <v-layout row wrap justify-center pt-md-12 style="height: 100vh">
        <v-flex md4 align-self-center>
          <p class="text002">
            Open air area inside a home, which not only adds to it's beauty but
            also creates a cooling effect through efficient ventilation.
          </p>
        </v-flex>
        <v-flex md7 align-self-center>
          <v-img
            contain
            height="80vh"
            src="../assets/Damindra_House/_SDS7634.JPG.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="margin-top: 10vh">
      <v-img
        height="80vh"
        src="../assets/Damindra_House/_SDS7591.JPG.jpg"
      ></v-img>
      <p class="text001">
        Artwork expertly placed in a position where it can be seen in an
        unobstructed view, highlighted further wifh neutral toned furniture.
      </p>
    </div>
    <div v-if="isMobile()" class="text-center">
      <v-layout row wrap justify-space-around>
        <v-flex md7 xs12 sm12 align-self-center mt-12>
          <v-img
            contain
            height="100%"
            src="../assets/Damindra_House/_SDS7595.JPG.jpg"
          ></v-img>
          <p class="text002 ">
            The frees and gravel exterior adds a quief charm and homely feel,
            which is elevated through the framed arfwork.
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div v-else class="text-center">
      <v-layout row wrap justify-space-around style="height: 100vh">
        <v-flex md4 align-self-center>
          <p class="text002">
            The frees and gravel exterior adds a quief charm and homely feel,
            which is elevated through the framed arfwork.
          </p>
        </v-flex>
        <v-flex md7 align-self-center>
          <v-img
            contain
            height="80vh"
            src="../assets/Damindra_House/_SDS7595.JPG.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <!-- <div style="margin-top:20vh;padding:10vw;object-fit: contain;">
      <vue-flux
        contain
        :options="options"
        :images="images"
        :transitions="transitions"
        style="height: 80vh;object-fit: contain;"
      >
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
    </div> -->
    <div>
      <v-img
        contain
        height="90vh"
        style="margin-left: 5vw;margin-right: 5vw"
        src="../assets/Damindra_House/_SDS7622.JPG.jpg"
      ></v-img>
    </div>
  </v-container>
</template>

<script>
// import { VueFlux, FluxPreloader } from "vue-flux";

export default {
  // components: {
  //   VueFlux,
  //   FluxPreloader,
  // },
  data: () => ({
    options: {
      allowFullscreen: false,
      allowToSkipTransition: true,
      autohideTime: 10000,
      autoplay: true,
      bindKeys: false,
      delay: 3000,
      enableGestures: false,
      infinite: true,
      lazyLoad: true,
      lazyLoadAfter: 3,
    },
    images: [
      require("../assets/Damindra_House/_SDS7622.JPG.jpg"),
      require("../assets/Damindra_House/_SDS7572.JPG.jpg"),
    ],
    transitions: ["fade"],

    slides: [
      {
        name: "Slide name 1",
        url: "https://drive.google.com/uc?id=16p04rwVOo8E_jm26sxmYcBsGv4LWOxyb",
      },
      {
        name: "Slide name 1",
        url: "https://drive.google.com/uc?id=1zwaXIdre34_s0dzbaLOdw5Icek-Emn7f",
      },
      {
        name: "Slide name 1",
        url: "https://drive.google.com/uc?id=1pNjWuxQ3Tctwq6Vxtk-tOFPJm8PTVyS9",
      },
    ],
  }),
};
</script>

<style scoped>
.text001 {
  text-align: center;
  padding: 10px;
  font-size: 2vh;
  color: #11111193;
}
.text002 {
  text-align: left;
  padding: 10px;
  font-size: 2vh;
  color: #11111193;
}
.slider-container {
  position: relative;
  text-align: center;
  color: white;
}
.slider-text {
  background-color: rgba(0, 0, 0, 0.637);
  color: white;
  font-weight: bold;
  margin-top: 10px;
}
.carousel-3d-container figure {
  margin: 0;
}
.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
  text-align: center;
}
</style>
