<template>
  <v-container fluid>
    <router-link to="/projects">
      <img
        style="opacity: 0.5;margin-inline:20px"
        height="20vh"
        src="../assets/backArrow.png"
      />
    </router-link>
    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">
      <div class="b1con" data-aos="zoom-out" data-aos-duration="1500">
        <div class="b1"></div>
      </div>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>
    <div>
      <v-img
        height="85vh"
        contain
        data-aos="fade-up"
        data-aos-duration="1500"
        src="../assets/Bolgoda/_SDS1461.JPG.jpeg"
      ></v-img>
      <p class="text001">
        To create a harmonious interior within the context of a home on the
        lake.
      </p>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div v-if="isMobile()" class="text-center">
      <v-layout row wrap justify-center pt-md-12 style="height:70vh">
        <v-flex md7 xs12 sm12 align-self-center>
          <v-img src="../assets/Bolgoda/_SDS1459.JPG.jpeg"></v-img>
          <p class="text002">
            A play on traditional sri lankan art to enhance the sense of arival.
          </p>
        </v-flex>
      </v-layout>
    </div>

    <div v-else class="text-center">
      <v-layout row wrap justify-center pt-md-12>
        <v-flex
          md4
          pa-4
          align-self-center
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <p class="text002">
            A play on traditional Sri Lankan art to enhance the sense of
            arrival.
          </p>
        </v-flex>
        <v-flex
          md8
          pa-4
          align-self-center
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <v-img contain src="../assets/Bolgoda/_SDS1459.JPG.jpeg"></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:30vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-duration="1500">
      <v-img
        contain
        height="85vh"
        src="../assets/Bolgoda/_SDS1196.JPG.jpeg"
      ></v-img>
      <p class="text001">
        The interplay of Sri Lankan pop art and indo-Portuguese furniture. A
        prelude to the indoor-outdoor theme carried throughout.
      </p>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-duration="1500">
      <v-img
        contain
        height="90vh"
        src="../assets/Bolgoda/_SDS1292.JPG.jpeg"
      ></v-img>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-duration="1500" style="padding:8vw">
      <vue-flux :options="options" :images="images" :transitions="transitions">
      </vue-flux>
      <p class="text001">
        "We wanted the art to speak for the house. To create an environment
        where that harmony could be understood throughout the home."
        <br />A Bandu Manamperi study of Life on Bolgoda Lake, extending the
        compation of Tha inside and out.
      </p>
    </div>
    <div style="width:99vw;height:18vh;padding:10px"></div>

    <div v-if="isMobile()" style="margin-top: 10vh">
      <v-img height="80vh" src="../assets/Bolgoda/_SDS1452.JPG.jpeg"></v-img>
    </div>
    <div v-else data-aos="fade-up" data-aos-duration="1500">
      <v-img
        height="90vh"
        contain
        src="../assets/Bolgoda/_SDS1452.JPG.jpeg"
      ></v-img>
    </div>
    <div style="width:99vw;height:25vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-duration="1500">
      <div>
        <div>
          <carousel-3d
            :width="900"
            :height="600"
            :inverse-scaling="200"
            :space="1300"
            :perspective="0"
            :autoplay="false"
            :autoplay-timeout="1500"
            :display="3"
          >
            <slide :index="0">
              <figure>
                <v-img contain src="../assets/Bolgoda/_SDS1344-HDR.JPG.jpeg" />
              </figure> </slide
            ><slide :index="1">
              <figure>
                <v-img contain src="../assets/Bolgoda/_SDS1434.JPG.jpeg" />
              </figure> </slide
            ><slide :index="2">
              <figure>
                <v-img src="../assets/Bolgoda/bath3.jpeg" />
              </figure>
            </slide>
          </carousel-3d>

          <p class="text001">
            The combination of the almost monastic serenity and pale colours and
            soft textures show off the strength and beauty of the rooms.
            Sometimes refined and sometimes playfull.
          </p>
        </div>
      </div>
      <!-- <div class="box stack-top d-none d-lg-block">
        <div class="container_l">
          <div class="sub-left"></div>
        </div>
        <div class="container_l">
          <div class="sub-right"></div>
        </div>
      </div> -->
    </div>
    <div style="width:99vw;height:15vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-duration="1500">
      <v-img
        height="85vh"
        contain
        src="../assets/Bolgoda/_SDS1404-HDR.JPG.jpeg"
      ></v-img>
      <p class="text001">
        A contempoary twist to a timeless view.
      </p>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div
      v-if="isMobile()"
      class="text-center"
      style="margin-left: 5vw;margin-right: 5vw"
    >
      <v-layout row wrap justify-space-around>
        <v-flex md7 xs12 sm12 align-self-center>
          <v-img
            height="100%"
            contain
            src="../assets/Bolgoda/_SDS1360.JPG.jpeg"
          ></v-img>
          <p class="text002 text-center">
            Old woo to accentuate the seamless interaction of indoors and
            outdoors. A space that can function independently from the pool and
            lake beyond
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div v-else class="text-center">
      <v-layout row wrap justify-center>
        <v-flex
          md8
          pa-4
          align-self-center
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <v-img contain src="../assets/Bolgoda/_SDS1360.JPG.jpeg"></v-img>
        </v-flex>
        <v-flex
          md4
          pa-4
          align-self-center
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <p class="text002">
            Old wood to accentuate the seamless interaction of indoors and
            outdoors. A space that can function independently from the pool and
            lake beyond
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div style="padding-block:5vh" data-aos="fade-up" data-aos-duration="1500">
      <v-img
        height="90vh"
        contain
        style="margin-left: 5vw;margin-right: 5vw"
        src="../assets/Bolgoda/_SDS1502.JPG.jpeg"
      ></v-img>
    </div>
  </v-container>
</template>

<script>
import { VueFlux } from "vue-flux";

export default {
  components: {
    VueFlux,
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
.b1con {
  /* background-color: blueviolet; */
  background-image: url("../assets/Bolgoda/_SDS1498.JPG.jpeg");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 92vh;
}
.b1 {
  background-color: #fff;
  transform: scaleY(0);
  transform-origin: top;
  height: 100%;
  width: 100%;
  /* transition: transform 0.5s ease-in-out;
  animation: mymove 5s infinite; */
  animation: slideInFromLeft 1.5s ease-in;
}
@keyframes slideInFromLeft {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
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
