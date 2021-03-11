<template>
  <v-container fluid>
    <div style="margin-top: 10vh">
      <v-img
        contain
        height="80vh"
        src="../assets/Bolgoda/_SDS1498.JPG.jpeg"
      ></v-img>
    </div>
    <div style="margin-top: 10vh">
      <v-img
        height="82vh"
        width="100vw"
        src="../assets/Bolgoda/_SDS1461.JPG.jpeg"
      ></v-img>
      <p class="text001">
        To Create a harmonious interior within the context of a home on the
        lake.
      </p>
    </div>

    <div class="text-center">
      <v-layout row wrap justify-center pt-md-12 style="height: 100vh">
        <v-flex md5 align-self-center>
          <p class="text002">
            A play on traditional sri lankan art to enhance the sense of arival.
          </p>
        </v-flex>
        <v-flex md7 align-self-center>
          <v-img src="../assets/Bolgoda/_SDS1459.JPG.jpeg"></v-img>
        </v-flex>
      </v-layout>
    </div>

    <div>
      <v-img
        height="80vh"
        style="margin-left: 5vw;margin-right: 5vw"
        src="../assets/Bolgoda/_SDS1196.JPG.jpeg"
      ></v-img>
      <p class="text001">
        The interplay of sri lankan pop art and indi-Portuguese furniture.A
        prelude to the indoor-outdoor theme carried throughout.
      </p>
    </div>
    <div style="margin-top: 10vh">
      <v-img height="80vh" src="../assets/Bolgoda/_SDS1292.JPG.jpeg"></v-img>
    </div>
    <div style="margin-top:20vh;">
      <vue-flux :options="options" :images="images" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
      <p class="text001">
        "We wanted the art to speak for the house. to create an environment
        where that harmony could be understood throughout the home."
        <br />A Bandu Manamperi study of Life on Bolgoda Lake, extending the
        compo- sition of Inside-OutSlde.
      </p>
    </div>
    <div style="margin-top: 10vh">
      <v-img
        style="margin-left: 20%;margin-right: 20%"
        height="80vh"
        src="../assets/Bolgoda/_SDS1452.JPG.jpeg"
      ></v-img>
    </div>
    <div class="container">
      <div class="box">
        <div style="margin-top:10vh;text-align: center;padding:20px;">
          <carousel-3d
            :width="900"
            :height="600"
            :inverse-scaling="200"
            :space="1300"
            :autoplay="true"
            :autoplay-timeout="2000"
            :display="3"
          >
            <slide :index="0">
              <figure>
                <v-img src="../assets/Bolgoda/_SDS1239-HDR.JPG.jpeg" />
              </figure> </slide
            ><slide :index="1">
              <figure>
                <v-img src="../assets/Bolgoda/_SDS1344-HDR.JPG.jpeg" />
              </figure> </slide
            ><slide :index="2">
              <figure>
                <v-img src="../assets/Bolgoda/_SDS1434.JPG.jpeg" />
              </figure>
            </slide>
            <slide :index="3">
              <figure>
                <v-img src="../assets/Bolgoda/_SDS1404-HDR.JPG.jpeg" />
              </figure> </slide
            ><slide :index="4">
              <figure>
                <v-img src="../assets/Bolgoda/_SDS1502.JPG.jpeg" />
              </figure> </slide
            ><slide :index="5">
              <figure>
                <v-img src="../assets/Bolgoda/_SDS1185.JPG.jpeg" />
              </figure>
            </slide>
          </carousel-3d>

          <p class="text001">
            The combination of the almost monastic serenity and pale colours and
            soft textures show off the strength and beauty of the rooms.
            sometimes refined and sometimes playfull.
          </p>
        </div>
      </div>
      <div class="box stack-top d-none d-lg-block">
        <div class="container_l">
          <div class="sub-left"></div>
        </div>
        <div class="container_l">
          <div class="sub-right"></div>
        </div>
      </div>
    </div>

    <div style="margin-top: 10vh">
      <v-img
        height="90vh"
        src="../assets/Bolgoda/_SDS1404-HDR.JPG.jpeg"
      ></v-img>
      <p class="text001">
        A contempoary twist to a timeless view
      </p>
    </div>
    <div class="text-center" style="margin-left: 5vw;margin-right: 5vw">
      <v-layout row wrap justify-space-around pt-md-12 style="height: 100vh">
        <v-flex md7 align-self-center>
          <v-img height="80vh" contain src="../assets/Bolgoda/_SDS1360.JPG.jpeg"></v-img>
        </v-flex>
        <v-flex md4 align-self-center>
          <p class="text002">
            Old wood to accentuate the seamless interaction of indoors and
            outdoors. A space that can function independently from the pool and
            lake beyond
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="padding: 10vh">
      <v-img
        height="80vh"
        style="margin-left: 5vw;margin-right: 5vw"
        src="../assets/Bolgoda/_SDS1502.JPG.jpeg"
      ></v-img>
    </div>
  </v-container>
</template>

<script>
import { VueFlux, FluxPreloader } from "vue-flux";

export default {
  components: {
    VueFlux,
    FluxPreloader,
  },
  data: () => ({
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
      require("../assets/Bolgoda/_SDS1454.JPG.jpeg"),
      require("../assets/Bolgoda/_SDS1185.JPG.jpeg"),
    ],
    transitions: ["fade"],
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
