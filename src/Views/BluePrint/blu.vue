<template>
  <div class="blue-bb">
    <audio
      ref="myAudio"
      loop
      allow="autoplay;fullscreen"
      id="my_audio"
      src="../../assets/music.mp3"
    ></audio>
    <div data-scroll-container id="fir">
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
              class="d-flex flex-row justify-space-between align-center"
              style="margin-top:41vh;width:100vw"
            >
              <div
                id="animated-example"
                class="animated bounce"
                style="margin-left:3vw"
              >
                <p style="width:10vw" class="textMini-c">
                  click to start
                </p>
                <v-icon
                  size="30"
                  href="#design"
                  v-smooth-scroll="{ duration: 2000 }"
                  >mdi-chevron-down-circle-outline</v-icon
                >
              </div>
              <div
                id="animated-example"
                class="animated bounce"
                style="margin-right:3vw;padding-top:5vh"
              >
                <v-icon v-if="!isMuted" @click="audioMute" size="30"
                  >mdi-volume-mute</v-icon
                >
                <v-icon v-else @click="audioMuteOff" size="30"
                  >mdi-volume-high</v-icon
                >
              </div>
            </div>
          </div>

          <div
            class="blue-body"
            id="design"
            ref="design"
            :data-step-no="1"
            :class="{ active: 1 == currStep }"
          >
            <div
              class="body"
              v-if="isMobile()"
              :data-step-no="1"
              :class="{ active: 1 == currStep }"
            >
              <div style="height:22vh;width: 10vw;"></div>
              <div class="fadeClass" style="height:70vh">
                <p class="mobLetter">DESIGN</p>
                <div class="d-flex flex-row justify-left align-center">
                  <div
                    id="animated-example"
                    class="animated bounce"
                    style="margin-top:-29vh;margin-left:3vw"
                  >
                    <v-icon
                      size="30"
                      href="#ARCHITECTURE"
                      v-smooth-scroll="{ duration: 2000 }"
                      >mdi-chevron-down-circle-outline</v-icon
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="body" v-else>
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
              <div class="d-flex flex-row justify-left align-center">
                <div
                  id="animated-example"
                  class="animated bounce"
                  style="margin-left:3vw"
                >
                  <v-icon
                    size="30"
                    href="#ARCHITECTURE"
                    v-smooth-scroll="{ duration: 2000 }"
                    >mdi-chevron-down-circle-outline</v-icon
                  >
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="isMobile()"
            id="ARCHITECTURE"
            class="twelve"
            :data-step-no="1"
            :class="{ active: 1 == currStep }"
          >
            <div style="height: 120vh;padding:5vw;margin-bottom:-19vh">
              <div class="mt-12">
                <v-img
                  height="50vh"
                  eager
                  contain
                  src="../../assets/blueprint/_SDS3203b.png"
                >
                  <!-- <div
                    class="twelve"
                    :data-step-no="1"
                    :class="{ active: 1 == currStep }"
                  ></div> -->
                </v-img>
              </div>

              <p class="text001  text-center" style="margin-top:2vh;">
                "ARCHITECTURE IS THE LEARNED GAME, CORRECT AND MAGNIFICENT, OF
                FORMS ASSEMBLED IN THE LIGHT"<br />
                <span>
                  <p style="margin-top:5px" class="textMini text-right">
                    -Le Corbusier
                  </p>
                </span>
              </p>
            </div>
            <div class="d-flex flex-row justify-left align-center">
              <div
                id="animated-example"
                class="animated bounce"
                style="margin-left:3vw;margin-top:-13.5vh"
              >
                <v-icon
                  size="30"
                  href="#act"
                  v-smooth-scroll="{ duration: 2000 }"
                  >mdi-chevron-down-circle-outline</v-icon
                >
              </div>
            </div>
          </div>
          <div
            v-else
            id="ARCHITECTURE"
            class="twelve"
            :data-step-no="3"
            :class="{ active: 3 == currStep }"
          >
            <div class="fadeClassNew" style="height: 100vh;padding:5vh">
              <div style="height:10vh;width: 100vw"></div>
              <v-layout row wrap justify-space-around>
                <v-flex md7 xs10 sm12 align-self-start>
                  <div>
                    <v-img
                      height="100%"
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
                <v-flex md5 xs12 sm10 align-self-start>
                  <p
                    class="text001 mt-xs-12 text-right"
                    style="margin-top:-2vh;"
                  >
                    "ARCHITECTURE IS THE LEARNED GAME, CORRECT AND MAGNIFICENT,
                    OF FORMS ASSEMBLED IN THE LIGHT"<br />
                    <span>
                      <p style="margin-top:5px" class="textMini text-right">
                        -Le Corbusier
                      </p>
                    </span>
                  </p>
                </v-flex>
              </v-layout>
            </div>
            <div class="d-flex flex-row justify-left align-center">
              <div
                id="animated-example"
                class="animated bounce"
                style="margin-left:3vw;margin-top:-13.5vh"
              >
                <v-icon
                  size="30"
                  href="#act"
                  v-smooth-scroll="{ duration: 2000 }"
                  >mdi-chevron-down-circle-outline</v-icon
                >
              </div>
            </div>
          </div>
          <div style="height:10vh;width: 100vw"></div>
          <div
            v-if="isMobile()"
            id="act"
            class="twelve"
            style="height:100vh"
            :data-step-no="4"
            :class="{ active: 4 == currStep }"
          >
            <!-- <div style="height:4vh;width: 100vw"></div> -->
            <div class="fadeClass">
              <div>
                <div style="height:10vh;width: 100vw"></div>

                <v-layout row wrap justify-center>
                  <v-flex md4 xs10 sm10 align-self-end>
                    <div>
                      <v-img
                        eager
                        contain
                        height="30vh"
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
                  <v-flex md5 xs10 sm10 align-self-center>
                    <div class="mt-5">
                      <v-img
                        eager
                        contain
                        height="30vh"
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
                  <p class="text001 mt-12">
                    "IT'AS ALMOST IMPOSSIBLE TO RECONCILE SELF EXPRESSION WITH
                    THE CREATIVE ACT" <br /><span class="textMini">
                      -Charles Eames
                    </span>
                  </p>
                </v-layout>
                <div
                  class="d-flex flex-row justify-start align-start"
                  style="margin-top:1vh;margin-left:3vw"
                >
                  <div id="animated-example" class="animated bounce">
                    <v-icon
                      href="#act2"
                      size="30"
                      v-smooth-scroll="{ duration: 2000 }"
                      >mdi-chevron-down-circle-outline</v-icon
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-else
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
                    THE CREATIVE ACT" <br /><span class="textMini">
                      -Charles Eames
                    </span>
                  </p>
                </v-layout>
                <div
                  class="d-flex flex-row justify-start align-start"
                  style="margin-top:-7.4vh;margin-left:3vw"
                >
                  <div id="animated-example" class="animated bounce">
                    <v-icon
                      href="#act2"
                      size="30"
                      v-smooth-scroll="{ duration: 2000 }"
                      >mdi-chevron-down-circle-outline</v-icon
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="isMobile()"
            id="act2"
            class="twelve"
            :data-step-no="5"
            :class="{ active: 5 == currStep }"
          >
            <div class="fadeClass" style="height: 100vh; width:100vw;">
              <div class="d-flex flex-column">
                <div style="margin-left:1vw;margin-top:25vh">
                  <img style="width:95vw" src="../../assets/blueprint/1.png" />
                  <div
                    class="twelve"
                    :data-step-no="5"
                    :class="{ active: 5 == currStep }"
                  ></div>
                  <p class="textMini2 text-left">
                    Charles and Ray Eames
                    <br />
                    Lounge chair by Herman Miller
                    <br />
                    1956
                  </p>
                </div>
              </div>
            </div>
            <div
              class="d-flex flex-row justify-start align-start"
              style="margin-left:3vw;margin-top:-8vh"
            >
              <div id="animated-example" class="animated bounce">
                <v-icon href="#act-slider" size="30" v-smooth-scroll
                  >mdi-chevron-down-circle-outline</v-icon
                >
              </div>
            </div>
          </div>
          <div
            v-else
            id="act2"
            style="margin-top:10vh"
            class="twelve"
            :data-step-no="5"
            :class="{ active: 5 == currStep }"
          >
            <div class="fadeClass" style="height: 100vh; width:100vw;">
              <div class="d-flex flex-column">
                <div style="margin-left:10vw">
                  <img style="height:85vh" src="../../assets/blueprint/1.png" />
                  <div
                    class="twelve"
                    :data-step-no="5"
                    :class="{ active: 5 == currStep }"
                  ></div>
                  <p class="textMini2 text-left">
                    Charles and Ray Eames
                    <br />
                    Lounge chair by Herman Miller
                    <br />
                    1956
                  </p>
                </div>
              </div>
            </div>
            <div
              class="d-flex flex-row justify-start align-start"
              style="margin-left:3vw;margin-top:-8vh"
            >
              <div id="animated-example" class="animated bounce">
                <v-icon href="#act-slider" size="30" v-smooth-scroll
                  >mdi-chevron-down-circle-outline</v-icon
                >
              </div>
            </div>
          </div>
          <div style="height:10vh;width: 20vw;"></div>
          <div
            v-if="isMobile()"
            v-on:mouseover.once="mouseOver"
            id="act-slider"
            style="height:100vh;margin-top:10vh"
            class="twelve"
            ref="slider1"
            :data-step-no="5"
            :class="{ active: 5 == currStep }"
          >
            <Slider1Mob />
          </div>
          <div
            v-else
            v-on:mouseover.once="mouseOver"
            id="act-slider"
            style="height:100vh;margin-top:10vh"
            class="twelve"
            ref="slider1"
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
      class="body"
      v-if="isMobile()"
      id="beaty"
      :data-step-no="1"
      :class="{ active: 1 == currStep }"
    >
      <div style="height:22vh;width: 10vw;"></div>
      <div class="fadeClass" style="height:70vh">
        <p class="mobLetter">BEAUTY</p>
        <div class="d-flex flex-row justify-left align-center">
          <div
            id="animated-example"
            class="animated bounce"
            style="margin-top:-29vh;margin-left:3vw"
          >
            <v-icon
              size="30"
              href="#beaty-blue"
              v-smooth-scroll="{ duration: 2000 }"
              >mdi-chevron-down-circle-outline</v-icon
            >
          </div>
        </div>
      </div>
    </div>
    <div class="blue-body" id="beaty" ref="beaty" v-else>
      <!-- v-on:mouseover.once="mouseOver2" -->

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
        <div
          id="animated-example"
          class="animated bounce"
          style="margin-left:3vw;margin-top:0vh"
        >
          <v-icon
            href="#beaty-blue"
            size="30"
            v-smooth-scroll="{ duration: 2000 }"
            >mdi-chevron-down-circle-outline</v-icon
          >
        </div>
      </div>
    </div>
    <div id="beaty-blue">
      <BeautyBlueMOB v-if="isMobile()" />
      <BeautyBlue v-else />
    </div>
    <div
      class="body"
      v-if="isMobile()"
      id="space"
      :data-step-no="1"
      :class="{ active: 1 == currStep }"
    >
      <div style="height:22vh;width: 10vw;"></div>
      <div class="fadeClass" style="height:70vh">
        <p class="mobLetter">SPACE</p>
        <div class="d-flex flex-row justify-left align-center">
          <div
            id="animated-example"
            class="animated bounce"
            style="margin-top:-29vh;margin-left:3vw"
          >
            <v-icon size="30" href="#space" v-smooth-scroll="{ duration: 2000 }"
              >mdi-chevron-down-circle-outline</v-icon
            >
          </div>
        </div>
      </div>
    </div>
    <div class="blue-body" id="space" ref="space" v-else>
      <!-- v-on:mouseover.once="mouseOver3" -->

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
        <div
          id="animated-example"
          class="animated bounce"
          style="margin-left:3vw;margin-top:0.5vh"
        >
          <v-icon
            size="30"
            href="#space-blue"
            v-smooth-scroll="{ duration: 2000 }"
            >mdi-chevron-down-circle-outline</v-icon
          >
        </div>
      </div>
    </div>
    <div id="space-blue">
      <SpaceBlue v-if="!isMobile()" />
      <SpaceBlueMob v-else />
    </div>
  </div>
</template>

<script>
import "intersection-observer";
import Scrollama from "vue-scrollama";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
// import LocomotiveScroll from "locomotive-scroll";
import Slider1 from ".././Slider1";
import Slider1Mob from ".././Slider1Mob.vue";
// import Slider2 from ".././Slider2";
import BeautyBlue from ".././BeautyBlue";
import BeautyBlueMOB from ".././BeautyBlueMOB";
import SpaceBlue from ".././SpaceBlue";
import SpaceBlueMob from ".././SpaceBlueMob.vue";

export default {
  name: "App",
  components: {
    Scrollama,
    // Slider2,SpaceBlueMob
    BeautyBlue,
    SpaceBlueMob,
    BeautyBlueMOB,
    Slider1,
    Slider1Mob,
    SpaceBlue,
  },
  data() {
    return {
      currStep: null,
      isMuted: false,
    };
  },
  mounted() {
    document.getElementById("my_audio").muted = false;
    document.getElementById("my_audio").play();
    document.getElementById("my_audio").loop = true;
  },
  methods: {
    stepEnterHandler({ element, index, direction }) {
      // handle the step-event as required here
      console.log(element, index, direction);
    },
    heyl() {
      console.log("helasd 😷helasd");
    },
    audioMute() {
      // alert("jll");
      this.audioPlayer = this.$refs.myAudio;
      document.getElementById("my_audio").muted = true;
      this.isMuted = true;
    },
    audioMuteOff() {
      // alert("jll");
      this.audioPlayer = this.$refs.myAudio;
      document.getElementById("my_audio").muted = false;
      this.isMuted = false;
    },
    mouseOver: function() {
      // console.log("😎", val);
      // console.log("flag ");
      // let rr = "this.$refs." + val;
      // console.log(rr);
      this.$smoothScroll({
        // scrollTo: rr,
        scrollTo: this.$refs.slider1,
        duration: 1000,
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
.blue-bb {
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow: hidden;
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
.mobLetter {
  margin-top: 15vh;
  width: 100%;
  height: 100%;
  color: #a6a6a6;
  text-align: center;
  font-family: "Oranienbaum", serif;
  font-size: 25vw;
  -webkit-font-smoothing: antialiased;
}
span {
  display: inline-block;
}
/* .body.active {
  height: 50vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  background-color: rgb(30, 189, 25);
}
.body {
  height: 50vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  background-color: rgb(224, 19, 19);
} */
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
.letter.active {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
.blue-body:hover .letter2 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
.letter2.active {
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
  /* padding-right: 10%; */
  margin-top: -5%;
  font-weight: bold;
  font-family: "Spectral", serif;
  color: #a6a6a6;
}
.textMini-c {
  margin-left: -1.5vw;
  text-align: left;
  font-size: 1.5vh;
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
