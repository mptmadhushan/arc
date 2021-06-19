<template>
  <v-container fluid>
    <div class="d-flex justify-space-between" style="margin-top:1vh">
      <router-link to="/projects">
        <img
          style="opacity: 0.5;margin-inline:20px"
          height="20vh"
          src="../assets/backArrow.png"
        />
      </router-link>
      <!-- <ShapesPop /> -->
    </div>
    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="2000"
    >
      <div
        class="b1con"
        data-aos-easing="linear"
        data-aos-delay="100"
        data-aos="zoom-out"
        data-aos-duration="2000"
      >
        <div class="b1"></div>
      </div>
    </div>
    <div v-if="!isMobile()" style="width:99vw;height:30vh;padding:10px"></div>
    <div>
      <v-img
        eager
        height="85vh"
        style="margin-top-md:6vh"
        contain
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-easing="linear"
        data-aos-delay="100"
        src="../assets/Bolgoda/_SDS1461.JPG.jpeg"
      ></v-img>
      <p
        class="text002 text-center"
        v-if="isMobile()"
        style="margin-top: -23vh;"
      >
        Intimacy and indulgence
      </p>
      <p class="text002 text-center" v-else>
        Intimacy and indulgence
      </p>
    </div>
    <div style="width:99vw;height:25vh;padding:10px"></div>

    <div v-if="isMobile()" class="text-center">
      <v-layout row wrap justify-center pt-md-12 style="height:70vh">
        <v-flex md7 xs12 sm12 align-self-center>
          <v-img eager src="../assets/Bolgoda/_SDS1459.JPG.jpeg"></v-img>
          <p class="text002">
            A play on Sri Lankan traditional art through a tapestry by Ena De
            Silva (A Tree Of Life)
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
          data-aos-duration="2000"
          data-aos-easing="linear"
          data-aos-delay="100"
        >
          <p class="text002 text-center">
            A play on Sri Lankan traditional art through<br />
            a tapestry by Ena De Silva (A Tree Of Life)
          </p>
        </v-flex>
        <v-flex
          md8
          pa-4
          align-self-center
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-delay="100"
          data-aos-duration="2000"
        >
          <v-img
            eager
            contain
            src="../assets/Bolgoda/_SDS1459.JPG.jpeg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div v-if="!isMobile()" style="width:99vw;height:35vh;padding:10px"></div>

    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="2500"
    >
      <v-img
        eager
        contain
        height="85vh"
        src="../assets/Bolgoda/_SDS1196.JPG.jpeg"
      ></v-img>
      <p
        class="text002 text-center"
        v-if="isMobile()"
        style="margin-top: -20vh;"
      >
        <span class="text005">Harmonious Coexistence</span> <br />
        The interplay of Sri Lankan pop art and indo-Portuguese furniture.
      </p>
      <p class="text002 text-center" v-else>
        <span class="text005">Harmonious Coexistence</span> <br />
        The interplay of Sri Lankan pop art and indo-Portuguese furniture.
      </p>
    </div>
    <div v-if="!isMobile()" style="width:99vw;height:23vh;padding:10px"></div>

    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="300"
      data-aos-duration="2000"
    >
      <v-img
        eager
        contain
        style="margin-top:8vh"
        height="90vh"
        src="../assets/Bolgoda/_SDS1292.JPG.jpeg"
      ></v-img>
    </div>
    <div v-if="!isMobile()" style="width:99vw;height:20vh;padding:10px"></div>
    <div v-else style="width:99vw;height:8vh;padding:10px"></div>

    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="2000"
      style="height:100vh"
    >
      <vue-flux :options="options" :images="images" :transitions="transitions">
      </vue-flux>
      <p class="text002">
        "We wanted the art to speak for the house. To create an environment
        where that harmony could be understood throughout the home."
        <br />A Bandu Manamperi study of Life on Bolgoda Lake, extending the
        composition of inside - out.
      </p>
    </div>
    <div
      v-else
      data-aos="fade-up"
      data-aos-duration="2000"
      style="padding:15vw;"
      data-aos-easing="linear"
      data-aos-delay="300"
    >
      <vue-flux :options="options" :images="images" :transitions="transitions">
      </vue-flux>
      <p class="text002 text-center mt-5">
        "We wanted the art to speak for the house. To create an environment
        where that harmony could be understood throughout the home."
        <br />A Bandu Manamperi study of Life on Bolgoda Lake, extending the
        composition of inside - out.
      </p>
    </div>
    <div v-if="!isMobile()" style="width:99vw;height:18vh;padding:10px"></div>

    <div v-if="isMobile()" style="margin-top: -5vh">
      <v-img
        eager
        height="80vh"
        src="../assets/Bolgoda/_SDS1452.JPG.jpeg"
      ></v-img>
    </div>
    <div
      v-else
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-easing="linear"
      data-aos-delay="300"
    >
      <v-img
        eager
        height="90vh"
        contain
        src="../assets/Bolgoda/_SDS1452.JPG.jpeg"
      ></v-img>
    </div>
    <div v-if="!isMobile()" style="width:99vw;height:40vh;padding:10px"></div>
    <div v-else style="width:99vw;height:30vh;padding:10px"></div>
    <div
      data-aos="fade-up"
      data-aos-duration="2500"
      data-aos-easing="linear"
      data-aos-delay="300"
    >
      <!-- <v-layout row wrap>
        <v-flex md12 align-self-center> -->
      <div>
        <carousel-3d
          :width="899"
          :height="600"
          :inverse-scaling="200"
          :space="1100"
          :perspective="0"
          :autoplay="false"
          :autoplay-timeout="3000"
          :display="3"
        >
          <slide :index="1">
            <figure>
              <v-img
                eager
                contain
                src="../assets/Bolgoda/_SDS1344-HDR.JPG.jpeg"
              />
            </figure> </slide
          ><slide :index="0">
            <figure>
              <v-img eager contain src="../assets/Bolgoda/bath2.png" />
            </figure> </slide
          ><slide :index="2">
            <figure>
              <v-img eager contain src="../assets/Bolgoda/_SDS1434.JPG.jpeg" />
            </figure>
          </slide>
        </carousel-3d>
      </div>
      <!-- </v-flex> -->
      <!-- <v-flex md3 md8 align-self-center>
          <v-img eager contain src="../assets/Bolgoda/_SDS1239-HDR.JPG.jpeg" />
        </v-flex> -->
      <!-- </v-layout> -->
    </div>

    <div v-if="!isMobile()" style="width:99vw;height:35vh;padding:10px"></div>
    <div v-else style="width:99vw;height:15vh;padding:10px"></div>

    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="300"
      data-aos-duration="2400"
    >
      <v-img
        v-if="!isMobile()"
        eager
        style="margin-top:6vh"
        height="85vh"
        contain
        src="../assets/Bolgoda/_SDS1404-HDR.JPG.jpeg"
      ></v-img
      ><v-img
        v-else
        eager
        height="65vh"
        contain
        src="../assets/Bolgoda/_SDS1404-HDR.JPG.jpeg"
      ></v-img>
      <p v-if="isMobile()" style="margin-top:-13vh" class="text002 text-center">
        A contemporary twist to a timeless view.
      </p>
      <p v-else class="text002 text-center">
        A contemporary twist to a timeless view.
      </p>
    </div>
    <div style="width:99vw;height:25vh;padding:10px"></div>

    <div
      v-if="isMobile()"
      class="text-center"
      style="margin-left: 5vw;margin-right: 5vw;margin-top:10vh"
    >
      <v-layout row wrap justify-space-around>
        <v-flex md7 xs12 sm12 align-self-center>
          <v-img
            eager
            height="100%"
            contain
            src="../assets/Bolgoda/_SDS1360.JPG.jpeg"
          ></v-img>
          <p class="text002 text-center">
            <span class="text005"> Monastic Calm </span><br />
            Blurring the boundaries between<br />
            inside and outside
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div v-else class="text-center">
      <v-layout row wrap justify-center style="margin-top:5vh">
        <v-flex
          md8
          xs12
          pa-4
          align-self-center
          data-aos-easing="linear"
          data-aos-delay="100"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <v-img
            eager
            contain
            src="../assets/Bolgoda/_SDS1360.JPG.jpeg"
          ></v-img>
        </v-flex>
        <v-flex
          md4
          pa-4
          align-self-center
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-delay="100"
          data-aos-duration="2000"
        >
          <p class="text002 text-center">
            <span class="text005"> Monastic Calm </span><br />
            Blurring the boundaries between<br />
            inside and outside
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div v-if="!isMobile()" style="width:99vw;height:30vh;padding:10px"></div>

    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="100"
      data-aos-duration="2000"
    >
      <v-img
        eager
        height="100vh"
        contain
        src="../assets/Bolgoda/_SDS1502.JPG.jpeg"
      ></v-img>
    </div>
    <div
      v-else
      style="padding-block:5vh"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="400"
      data-aos-duration="2500"
    >
      <v-img
        eager
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
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");
.text005 {
  text-align: left;
  font-weight: bold;
  font-size: 2.3vh;
  font-family: "Josefin Sans", sans-serif;
  color: #11111193;
}
.b1con {
  /* background-color: blueviolet; */
  background-image: url("../assets/Bolgoda/_SDS1498.JPG.jpeg");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 90vh;
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
