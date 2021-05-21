<template>
  <v-container fluid>
    <div ref="scrollSections">
      <section data-scroll-section>
        <div class="d-flex justify-space-between" style="margin-top:-5vh">
          <router-link to="/projects">
            <img
              style="opacity: 0.5;margin-inline:20px"
              height="20vh"
              src="../assets/backArrow.png"
            />
          </router-link>
          <!-- <ShapesPop /> -->
        </div>
        <div class="text-center">
          <v-layout row wrap justify-center>
            <v-flex md10 align-self-center>
              <div class="b1con">
                <div class="b1"></div>
              </div>
            </v-flex>
          </v-layout>
        </div>
      </section>
      <div>
        <section data-scroll-section>
          <div>
            <v-img
              eager
              contain
              style="margin-top:10vh"
              height="85vh"
              src="../assets/Damindra_House/_SDS7604.JPG.jpg"
            ></v-img>
            <p class="text002 text-center">
              <span class="text005"> Hidden Expression</span>
              <br />Communication between material and form
            </p>
          </div>
        </section>
      </div>
      <div>
        <section data-scroll-section>
          <div v-if="isMobile()" class="text-center">
            <v-layout row wrap justify-center pt-md-12 style="height: 100vh">
              <v-flex md7 xs12 sm12 align-self-center>
                <v-img
                  eager
                  contain
                  src="../assets/Damindra_House/_SDS7634.JPG.jpg"
                ></v-img>
                <p class="text002 text-center">
                  Respite through natural installations
                </p>
              </v-flex>
            </v-layout>
          </div>
          <div v-else class="text-center">
            <v-layout row wrap justify-center style="height: 100vh">
              <v-flex md4 align-self-center>
                <p class="text002 text-end">
                  Respite through natural installations
                </p>
              </v-flex>
              <v-flex md7 align-self-center>
                <v-img
                  eager
                  contain
                  height="85vh"
                  src="../assets/Damindra_House/_SDS7634.JPG.jpg"
                ></v-img>
              </v-flex>
            </v-layout>
          </div>
        </section>
      </div>
      <div>
        <section data-scroll-section>
          <div>
            <v-img
              eager
              contain
              height="85vh"
              src="../assets/Damindra_House/_SDS7591.JPG.jpg"
            ></v-img>
            <p class="text002 text-center">
              Interiors of contemporary character and charm
            </p>
          </div>
        </section>
      </div>
      <div>
        <section data-scroll-section>
          <div v-if="isMobile()" class="text-center">
            <v-layout row wrap justify-space-around>
              <v-flex md7 xs12 sm12 align-self-center mt-12>
                <v-img
                  eager
                  contain
                  height="100%"
                  src="../assets/Damindra_House/_SDS7595.JPG.jpg"
                ></v-img>
                <p class="text002 ">
                  <span class="text005">Harmony </span>
                  <br />
                  Between architecture and the elements
                </p>
              </v-flex>
            </v-layout>
          </div>

          <div v-else class="text-center" style="padding:5vh">
            <v-layout row wrap justify-space-around>
              <v-flex
                md3
                align-self-center
              
              >
                <p class="text002">
                  <span class="text005">Harmony </span>
                  <br />
                  Between architecture and the elements
                </p>
              </v-flex>
              <v-flex
                md9
                pa-4
                align-self-center
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="2500"
              >
                <v-img
                  eager
                  contain
                  src="../assets/Damindra_House/_SDS7595.JPG.jpg"
                ></v-img>
              </v-flex>
            </v-layout>
          </div>
        </section>
      </div>
      <div>
        <section data-scroll-section>
          <div v-if="isMobile()" style="margin-top:10vh;height:60vh">
            <vue-flux
              :options="options"
              :images="images2"
              :transitions="transitions"
            >
            </vue-flux>
          </div>
          <div v-else>
            <div style="padding-top:5vw;padding-bottom:3.5vw">
              <vue-flux
                :options="options"
                :images="images2"
                :transitions="transitions"
              >
                <template v-slot:preloader>
                  <flux-preloader height="40vh" />
                </template>
              </vue-flux>
            </div>
          </div>
        </section>
      </div>
    </div>
  </v-container>
</template>

<script>
import { VueFlux, FluxPreloader } from "vue-flux";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.min.css";

export default {
  components: {
    VueFlux,
    FluxPreloader,
  },
  mounted: function() {
    this.startSlide();
    const _self = this;
    this.$nextTick(function() {
      _self.initLocoScroll();
    });
  },

  methods: {
    initLocoScroll() {
      const _self = this;
      this.scroll = new locomotiveScroll({
        el: _self.$refs["scrollSections"],
        smooth: true,
        smoothMobile: true,
        getDirection: true,
      });
    },
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    },
  },

  computed: {
    currentImg: function() {
      return this.images2[Math.abs(this.currentIndex) % this.images.length];
    },
  },
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
      height: "10vh",
      lazyLoadAfter: 3,
    },
    images: [
      require("../assets/Damindra_House/_SDS7622.JPG.jpg"),
      require("../assets/Damindra_House/_SDS7572.JPG.jpg"),
    ],
    images2: [
      require("../assets/Damindra_House/slider1.png"),
      require("../assets/Damindra_House/slider2.png"),
    ],
    transitions: ["fade"],
    timer: null,
    currentIndex: 0,
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
  background-image: url("../assets/Damindra_House/_SDS7569.JPG.jpg");
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 4s linear;
  visibility: visible 2s ease-in;
  width: 100%;
  position: absolute;
  opacity: 1;
}

.fade-leave-to {
  visibility: hidden 1s ease-in-out;
  width: 100%;
  opacity: 0.5;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.5;
}

.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}

.next {
  right: 0;
}

.prev {
  left: 0;
}

.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.9);
}
.text001 {
  text-align: center;
  padding: 10px;
  font-size: 2vh;
  font-weight: bold;
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
