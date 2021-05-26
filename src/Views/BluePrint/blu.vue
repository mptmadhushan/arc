<template>
  <div>
    <div data-scroll-container>
      <section data-scroll-section>
        <router-link to="/">
          <div style="position:relative;z-index:1000">
            <img
              style="opacity:0.5;margin-inline:20px;margin-top:1vh"
              height="20vh"
              src="../../assets/backArrow.png"
            />
          </div>
        </router-link>

        <Scrollama
          :offset="0.5"
          @step-enter="({ element }) => (currStep = element.dataset.stepNo)"
          @step-exit="({ element }) => (currStep = element.dataset.stepNo)"
        >
          <div class="blue-body">
            <p
              class="text1st text-center"
              style="padding-top:35vh;margin-bottom:11vh"
            >
              TO THOSE THAT INSPIRE AND CREATE<br />
              <span class="text1s"> A MOMENT</span>
            </p>
            <div
              class="d-flex flex-row justify-left align-center"
              style="margin-top:48vh;margin-left:20vw"
            >
              <div id="animated-example" class="animated bounce">
                <v-btn x-small fab color="transparent"
                  ><v-icon href="#design" v-smooth-scroll="{ duration: 2000 }"
                    >mdi-chevron-down</v-icon
                  ></v-btn
                >
              </div>
            </div>
          </div>

          <div class="blue-body" id="design" ref="design">
            <div class="body">
              <div style="height:22vh;width: 10vw;"></div>
              <div class="fadeClass ml-12" style="height:70vh">
                <div class="back-text">
                  <div class="text-container" style="margin-top:-25vh">
                    <span class="letter">D</span><span class="letter">E</span
                    ><span class="letter">S</span><span class="letter">I</span
                    ><span class="letter">G</span><span class="letter">N</span>
                  </div>
                  <div class="text-container" style="margin-top:-20vh">
                    <span class="letter2">D</span><span class="letter2">E</span
                    ><span class="letter2">S</span><span class="letter2">I</span
                    ><span class="letter2">G</span
                    ><span class="letter2">N</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex flex-row justify-left align-center">
              <div id="animated-example" class="animated bounce">
                <v-btn
                  style="margin-left:20vw;margin-top:3vh"
                  x-small
                  fab
                  color="transparent"
                  ><v-icon
                    href="#ARCHITECTURE"
                    v-smooth-scroll="{ duration: 2000 }"
                    >mdi-chevron-down</v-icon
                  ></v-btn
                >
              </div>
            </div>
          </div>
          <div
            id="ARCHITECTURE"
            class="twelve"
            :data-step-no="3"
            :class="{ active: 3 == currStep }"
          >
            <div class="fadeClassNew">
              <div style="height:10vh;width: 100vw"></div>

              <v-layout row wrap justify-space-around>
                <v-flex md6 xs12 sm12 align-self-start>
                  <div>
                    <v-img
                      height="80vh"
                      eager
                      cover
                      src="../../assets/blueprint/_SDS3203b.png"
                    >
                      <div
                        class="twelve"
                        :data-step-no="3"
                        :class="{ active: 3 == currStep }"
                      ></div>
                    </v-img>
                  </div>
                </v-flex>
                <v-flex md5 align-self-start>
                  <p class="text001 text-right" style="margin-top:-2vh;">
                    "ARCHITECTURE IS THE LEARNED GAME, CORRECT AND MAGNIFICENT,
                    OF FORMS ASSEMBLED IN THE LIGHT"
                  </p>
                  <div style="margin-top:5px" class="textMini">
                    -Le Corbusier
                  </div>
                </v-flex>
              </v-layout>
            </div>
            <div style="height:5vh"></div>

            <!-- <div style="height:15vh;background-color:red"></div> -->
            <div class="d-flex flex-row justify-left align-center">
              <div id="animated-example" class="animated bounce">
                <v-btn
                  x-small
                  fab
                  color="transparent"
                  style="margin-left:20vw;margin-top:2vh"
                  ><v-icon href="#act" v-smooth-scroll="{ duration: 2000 }"
                    >mdi-chevron-down</v-icon
                  ></v-btn
                >
              </div>
            </div>
          </div>
          <div style="height:10vh;width: 100vw"></div>
          <div
            id="act"
            class="twelve"
            :data-step-no="4"
            :class="{ active: 4 == currStep }"
          >
            <div style="height:4vh;width: 100vw"></div>
            <div class="fadeClass">
              <div>
                <v-layout row wrap justify-center>
                  <v-flex md4 xs12 sm12 align-self-end>
                    <div>
                      <v-img
                        eager
                        contain
                        height="70vh"
                        src="../../assets/blueprint/_SDS3006.png"
                      >
                        <div
                          class="twelve"
                          :data-step-no="4"
                          :class="{ active: 4 == currStep }"
                        ></div>
                      </v-img>
                    </div>
                  </v-flex>
                  <v-flex md5 xs12 sm12 align-self-center>
                    <div>
                      <v-img
                        eager
                        contain
                        height="85vh"
                        src="../../assets/blueprint/_SDS3211.jpeg"
                      >
                        <div
                          class="twelve"
                          :data-step-no="4"
                          :class="{ active: 4 == currStep }"
                        ></div>
                      </v-img>
                    </div>
                  </v-flex>
                  <p class="text001">
                    "IT'S ALMOST IMPOSSIBLE TO RECONCILE SELF EXPRESSION WITH
                    THE CREATIVE ACT"<span class="textMini">
                      -Charles Eames
                    </span>
                  </p>
                </v-layout>
                <div
                  class="d-flex flex-row justify-start align-start"
                  style="margin-top:-5.2vh;margin-left:5vh"
                >
                  <div id="animated-example" class="animated bounce">
                    <v-btn
                      x-small
                      fab
                      color="transparent"
                      style="margin-left:17vw"
                      ><v-icon href="#act2" v-smooth-scroll="{ duration: 2000 }"
                        >mdi-chevron-down</v-icon
                      ></v-btn
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="act2"
            style="height:100vh;margin-top:10vh"
            class="twelve"
            :data-step-no="5"
            :class="{ active: 5 == currStep }"
          >
            <div class="fadeClass">
              <div>
                <v-layout row wrap>
                  <v-flex md9 ml-12>
                    <v-img eager contain src="../../assets/blueprint/1.png">
                      <div
                        class="twelve"
                        :data-step-no="5"
                        :class="{ active: 5 == currStep }"
                      ></div>
                    </v-img>
                  </v-flex>
                  <v-flex md9 style="margin-top:-6vh" ml-12>
                    <p class="textMini2 text-left">
                      Charles and Ray Eames
                      <br />
                      Lounge chair by Herman Miller
                      <br />
                      1956
                    </p>
                  </v-flex>
                </v-layout>
              </div>
            </div>
            <div
              class="d-flex flex-row justify-start align-start"
              style="margin-left:5vh"
            >
              <div id="animated-example" class="animated bounce">
                <v-btn
                  x-small
                  fab
                  color="transparent"
                  style="margin-left:17.3vw;margin-top:1vh"
                  ><v-icon href="#act-slider" v-smooth-scroll
                    >mdi-chevron-down</v-icon
                  ></v-btn
                >
              </div>
            </div>
          </div>
          <div
            id="act-slider"
            style="height:100vh;margin-top:10vh"
            class="twelve"
            :data-step-no="5"
            :class="{ active: 5 == currStep }"
          >
            <Slider1 />
          </div>
        </Scrollama>
      </section>
    </div>
    <div style="height:10vh;width: 20vw;"></div>
    <div
      v-on:mouseover.once="mouseOver2"
      class="blue-body"
      id="beaty"
      ref="beaty"
    >
      <div class="body">
        <div style="height:22vh;width: 10vw;"></div>
        <div class="fadeClass ml-12" style="height:70vh">
          <div class="back-text">
            <div class="text-container" style="margin-top:-25vh">
              <span class="letter">B</span><span class="letter">E</span
              ><span class="letter">A</span><span class="letter">U</span
              ><span class="letter">T</span><span class="letter">Y</span>
            </div>
            <div class="text-container" style="margin-top:-20vh">
              <span class="letter2">B</span><span class="letter2">E</span
              ><span class="letter2">A</span><span class="letter2">U</span
              ><span class="letter2">T</span><span class="letter2">Y</span>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row justify-left align-center">
        <div id="animated-example" class="animated bounce">
          <v-btn
            style="margin-left:20vw;margin-top:3vh"
            x-small
            fab
            color="transparent"
            ><v-icon href="#beaty-blue" v-smooth-scroll="{ duration: 2000 }"
              >mdi-chevron-down</v-icon
            ></v-btn
          >
        </div>
      </div>
    </div>
    <div id="beaty-blue">
      <BeautyBlue />
    </div>
    <div
      v-on:mouseover.once="mouseOver3"
      class="blue-body"
      id="space"
      ref="space"
    >
      <div class="body">
        <div style="height:22vh;width: 10vw;"></div>
        <div class="fadeClass ml-12" style="height:70vh">
          <div class="back-text">
            <div class="text-container" style="margin-top:-25vh">
              <span class="letter">S</span><span class="letter">P</span
              ><span class="letter">A</span><span class="letter">C</span
              ><span class="letter">E</span>
            </div>
            <div class="text-container" style="margin-top:-20vh">
              <span class="letter2">S</span><span class="letter2">P</span
              ><span class="letter2">A</span><span class="letter2">C</span
              ><span class="letter2">E</span>
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row justify-left align-center">
        <div id="animated-example" class="animated bounce">
          <v-btn
            style="margin-left:20vw;margin-top:2vh"
            x-small
            fab
            color="transparent"
            ><v-icon href="#space-blue" v-smooth-scroll="{ duration: 2000 }"
              >mdi-chevron-down</v-icon
            ></v-btn
          >
        </div>
      </div>
    </div>
    <div id="space-blue">
      <SpaceBlue />
    </div>
  </div>
</template>

<script>
import "intersection-observer";
import Scrollama from "vue-scrollama";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
// import LocomotiveScroll from "locomotive-scroll";
import Slider1 from ".././Slider1";
import BeautyBlue from ".././BeautyBlue";
import SpaceBlue from ".././SpaceBlue";

export default {
  name: "App",
  components: {
    Scrollama,
    BeautyBlue,
    Slider1,
    SpaceBlue,
  },
  data() {
    return {
      currStep: null,
    };
  },
  mounted() {
    // this.lmS = new LocomotiveScroll({
    //   el: document.querySelector("[data-scroll-container]"),
    //   smooth: true,
    // });
    // eslint-disable-next-line no-undef
    // imagesLoaded("[data-scroll-container]", () => {
    //   this.lmS.update();
    // });
  },
  methods: {
    heyl() {
      console.log("helasd 😷helasd");
    },
    mouseOver: function(val) {
      console.log("😎", val);
      console.log("flag ");
      let rr = "this.$refs." + val;
      console.log(rr);
      this.$smoothScroll({
        // scrollTo: rr,
        scrollTo: this.$refs.slider1,
        duration: 2000,
        offset: 1,
      });
    },
    mouseOver2: function() {
      this.$smoothScroll({
        // scrollTo: rr,
        scrollTo: this.$refs.beaty,
        duration: 2000,
        offset: 1,
      });
    },
    mouseOver3: function() {
      this.$smoothScroll({
        // scrollTo: rr,
        scrollTo: this.$refs.space,
        duration: 2000,
        offset: 1,
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Spectral:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Arimo:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oranienbaum&display=swap");
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-timing-function: linear;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
}
@-webkit-keyframes bounce {
  0%,
  100% {
    -webkit-transform: translateY(0);
  }
  50% {
    -webkit-transform: translateY(-5px);
  }
}
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
.bounce {
  -webkit-animation-name: bounce;
  animation-name: bounce;
}
#animated-example {
  width: 20px;
  height: 20px;
  top: 100px;
  left: 100px;
  border-radius: 50%;
}
/* .fadeClass:hover .zoom_image {
  transform: scale(1);
  transition: ease-out 2.5s;
} */
.blue-body {
  height: 100vh;
  width: 100vw;
  /* background-color: red;
  margin-top: 10px; */
}
.text001 {
  text-align: center;
  font-size: 2.5vh;
  font-family: "Roboto", sans-serif;
  color: #a6a6a6;
}

.zoom_image {
  transform: scale(1);
  transition: all 10s;
}
.image-box {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 90%;
  height: 100%;
}
.zoom_image2 {
  transform: scale(1.2);
  transition: all 10s;
}
.image-box2 {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 90%;
  height: 90%;
}
.image-box img {
  max-width: 100%;
  transition: all 0.3s;
  display: block;
  width: 100%;
  height: auto;
  transform: scale(1.3);
}
.twelve.active {
  height: 0%;
  transition: all 1s;
}
.twelve {
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: all 20s;
}
.back-text {
  height: 70vh;
  /* background-color: red; */
  overflow: hidden;
}
.text-container {
  /* margin-top: -4vh; */
  width: 100%;
  height: 100%;
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #a6a6a6;
  font-family: "Oranienbaum", serif;
  font-size: 25vw;
  -webkit-font-smoothing: antialiased;
}
span {
  display: inline-block;
}
.body {
  /* height: 50vh;
  width: 100vw;
  padding: 0;
  margin: 0; */
  /* background-color: black;S */
}
/* .letter.active {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
} */
.blue-body:hover .letter {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
.blue-body:hover .letter2 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
.letter {
  transition: transform 5s cubic-bezier(0.43, 0.1, 0.57, 0.9), filter 5s ease,
    opacity 5s ease;
  opacity: 0;
  filter: blur(5px);
  /* transition: all 20s; */
}
.letter:nth-of-type(1) {
  transform: translateY(10vh);
  transition-duration: 2s;
}
.letter:nth-of-type(2) {
  transform: translateY(20vh);
  transition-duration: 2.4s;
}
.letter:nth-of-type(3) {
  transform: translateY(30vh);
  transition-duration: 2.8s;
}
.letter:nth-of-type(4) {
  transform: translateY(40vh);
  transition-duration: 3.2s;
}
.letter:nth-of-type(5) {
  transform: translateY(45vh);
  transition-duration: 3.6s;
}
.letter:nth-of-type(6) {
  filter: blur(0);
  transform: translateY(50vh);
  transition-duration: 3.8s;
}

.letter2 {
  transition: transform 5s cubic-bezier(0.43, 0.1, 0.57, 0.9), filter 5s ease,
    opacity 5s ease;
  opacity: 0;
  filter: blur(5px);
  transition: all 20s;
}
.letter2:nth-of-type(1) {
  transform: translateY(25vh);
  transition-duration: 2s;
}
.letter2:nth-of-type(2) {
  transform: translateY(30vh);
  transition-duration: 2.4s;
}
.letter2:nth-of-type(3) {
  transform: translateY(35vh);
  transition-duration: 2.8s;
}
.letter2:nth-of-type(4) {
  transform: translateY(40vh);
  transition-duration: 3.2s;
}
.letter2:nth-of-type(5) {
  transform: translateY(45vh);
  transition-duration: 3.6s;
}
.letter2:nth-of-type(6) {
  filter: blur(0);
  transform: translateY(50vh);
  transition-duration: 3.8s;
}
.text1s {
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: #a6a6a6;
  font-size: 2.3vh;
  font-weight: 500;
}
* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
}
.text1st {
  text-align: center;
  font-family: "Roboto", sans-serif;
  color: #a6a6a6;
  font-size: 2.8vh;
  font-weight: 500;
}
.intro {
  padding: 30vh;
}
.step {
  padding: 15vh 0;
  width: 50%;
  margin: 0 auto 30vh;
  background-color: beige;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stepNew {
  padding: 15vh 0;
  width: 50%;
  height: 100vh;
  margin: 0 auto 30vh;
  background-color: rgb(218, 218, 36);
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
}
.stepNew.active {
  background-color: darkmagenta;
  border: 1px solid rgb(17, 233, 100);
}
.step.active {
  background-color: teal;
  color: white;
}
.textMini {
  text-align: center;
  font-size: 1.5vh;
  padding-right: 10%;
  margin-top: -5%;
  font-weight: bold;
  font-family: "Spectral", serif;
  color: #a6a6a6;
}
.textMini2 {
  text-align: right;
  font-size: 1.5vh;
  padding-right: 10%;
  font-weight: bold;
  font-family: "Spectral", serif;
  color: #a6a6a6;
}
</style>
