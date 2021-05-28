<template>
  <div>
    <div data-scroll-container class="body-loco">
      <div>
        <section data-scroll-section>
          <router-link to="/">
            <div style="position:relative;z-index:1000">
              <img
                style="opacity:0.5;margin-inline:20px;margin-top:1vh"
                height="20vh"
                src="../assets/backArrow.png"
              />
            </div>
          </router-link>
          <Scrollama
            :offset="0.5"
            @step-enter="({ element }) => (currStep = element.dataset.stepNo)"
            @step-exit="({ element }) => (currStep = element.dataset.stepNo)"
          >
            <div>
              <p
                class="text1st text-center"
                style="margin-top:35vh;margin-bottom:10vh"
              >
                TO THOSEasd THAT INSPIRE AND CREATE<br />
                <span class="text1s"> A MOMENT</span>
              </p>
            </div>
            <div class="body" style="height:100vh">
              <div style="height:40vh;width: 20vw;"></div>
              <div class="fadeClass ml-12">
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
              <div style="height:10vh"></div>
            </div>
            <div
              class="twelve"
              :data-step-no="3"
              :class="{ active: 3 == currStep }"
            >
              <div class="fadeClassNew">
                <v-layout row wrap justify-space-around>
                  <v-flex md6 xs12 sm12 align-self-start>
                    <div>
                      <v-img
                        height="80vh"
                        eager
                        cover
                        src="../assets/blueprint/_SDS3203b.png"
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
                    <p
                      class="text001 text-right"
                      style="margin:0;padding-top:6.6vh"
                    >
                      "ARCHITECTURE IS THE LEARNED GAME, CORRECT AND
                      MAGNIFICENT, OF FORMS ASSEMBLED IN THE LIGHT"
                    </p>
                    <div style="margin-top:5px" class="textMini">
                      -Le Corbusier
                    </div>
                  </v-flex>
                </v-layout>
              </div>
              <div style="height:10vh"></div>
            </div>
            <div
              class="twelve"
              :data-step-no="4"
              :class="{ active: 4 == currStep }"
            >
              <div class="fadeClass">
                <div style="width:99vw;height:20vh"></div>
                <div>
                  <v-layout row wrap justify-center>
                    <v-flex md4 xs12 sm12 align-self-end>
                      <div class="image-box">
                        <v-img
                          class="zoom_image"
                          eager
                          contain
                          height="70vh"
                          src="../assets/blueprint/_SDS3006.png"
                        >
                          <div
                            class="twelve"
                            :data-step-no="4"
                            :class="{ active: 4 == currStep }"
                          ></div>
                        </v-img>
                      </div>
                    </v-flex>
                    <v-flex md5 xs12 sm12 align-self-end>
                      <div class="image-box">
                        <v-img
                          class="zoom_image"
                          eager
                          contain
                          height="95vh"
                          src="../assets/blueprint/_SDS3211.jpeg"
                        >
                          <div
                            class="twelve"
                            :data-step-no="4"
                            :class="{ active: 4 == currStep }"
                          ></div>
                        </v-img>
                      </div>
                    </v-flex>
                    <p class="text001" style="margin-top:4vh">
                      "IT'S ALMOST IMPOSSIBLE TO RECONCILE SELF EXPRESSION WITH
                      THE CREATIVE ACT"<span class="textMini">
                        -Charles Eames
                      </span>
                    </p>
                  </v-layout>
                </div>
              </div>
            </div>
            <div
              class="twelve"
              :data-step-no="5"
              :class="{ active: 5 == currStep }"
            >
              <div class="fadeClass">
                <div class="image-box ">
                  <v-layout row wrap>
                    <v-flex md9 ml-12 class="image-box2">
                      <v-img
                        eager
                        contain
                        height="100vh"
                        src="../assets/blueprint/1.png"
                      >
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
            </div>
          </Scrollama>
          <!-- <div style="height:10vh;width: 20vw;"></div> -->
        </section>
        <section data-scroll-section>
          <div v-on:mouseover="mouseOver" ref="slider1">
            <Slider1 />
          </div>
        </section>
        <section data-scroll-section>
          <router-link to="/">
            <div style="position:relative;z-index:1000">
              <img
                style="opacity:0.5;margin-inline:20px;margin-top:1vh"
                height="20vh"
                src="../assets/backArrow.png"
              />
            </div>
          </router-link>
          <Scrollama
            :offset="0.5"
            @step-enter="({ element }) => (currStep = element.dataset.stepNo)"
            @step-exit="({ element }) => (currStep = element.dataset.stepNo)"
          >
            <div>
              <p
                class="text1st text-center"
                style="margin-top:35vh;margin-bottom:10vh"
              >
                TO THOSE THAT INSPIRE AND CREATE<br />
                <span class="text1s"> A MOMENT</span>
              </p>
            </div>
            <div class="body" style="height:100vh">
              <div style="height:40vh;width: 20vw;"></div>
              <div class="fadeClass ml-12">
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
              <div style="height:10vh"></div>
            </div>
            <div
              class="twelve"
              :data-step-no="3"
              :class="{ active: 3 == currStep }"
            >
              <div class="fadeClassNew">
                <v-layout row wrap justify-space-around>
                  <v-flex md6 xs12 sm12 align-self-start>
                    <div>
                      <v-img
                        height="80vh"
                        eager
                        cover
                        src="../assets/blueprint/_SDS3203b.png"
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
                    <p
                      class="text001 text-right"
                      style="margin:0;padding-top:6.6vh"
                    >
                      "ARCHITECTURE IS THE LEARNED GAME, CORRECT AND
                      MAGNIFICENT, OF FORMS ASSEMBLED IN THE LIGHT"
                    </p>
                    <div style="margin-top:5px" class="textMini">
                      -Le Corbusier
                    </div>
                  </v-flex>
                </v-layout>
              </div>
              <div style="height:10vh"></div>
            </div>
            <div
              class="twelve"
              :data-step-no="4"
              :class="{ active: 4 == currStep }"
            >
              <div class="fadeClass">
                <div style="width:99vw;height:20vh"></div>
                <div>
                  <v-layout row wrap justify-center>
                    <v-flex md4 xs12 sm12 align-self-end>
                      <div class="image-box">
                        <v-img
                          class="zoom_image"
                          eager
                          contain
                          height="70vh"
                          src="../assets/blueprint/_SDS3006.png"
                        >
                          <div
                            class="twelve"
                            :data-step-no="4"
                            :class="{ active: 4 == currStep }"
                          ></div>
                        </v-img>
                      </div>
                    </v-flex>
                    <v-flex md5 xs12 sm12 align-self-end>
                      <div class="image-box">
                        <v-img
                          class="zoom_image"
                          eager
                          contain
                          height="95vh"
                          src="../assets/blueprint/_SDS3211.jpeg"
                        >
                          <div
                            class="twelve"
                            :data-step-no="4"
                            :class="{ active: 4 == currStep }"
                          ></div>
                        </v-img>
                      </div>
                    </v-flex>
                    <p class="text001" style="margin-top:4vh">
                      "IT'S ALMOST IMPOSSIBLE TO RECONCILE SELF EXPRESSION WITH
                      THE CREATIVE ACT"<span class="textMini">
                        -Charles Eames
                      </span>
                    </p>
                  </v-layout>
                </div>
              </div>
            </div>
            <div
              class="twelve"
              :data-step-no="5"
              :class="{ active: 5 == currStep }"
            >
              <div class="fadeClass">
                <div class="image-box ">
                  <v-layout row wrap>
                    <v-flex md9 ml-12 class="image-box2">
                      <v-img
                        eager
                        contain
                        height="100vh"
                        src="../assets/blueprint/1.png"
                      >
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
            </div>
          </Scrollama>
          <!-- <div style="height:10vh;width: 20vw;"></div> -->
        </section>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
import "intersection-observer";
import Scrollama from "vue-scrollama";
import "locomotive-scroll/dist/locomotive-scroll.min.css";
import LocomotiveScroll from "locomotive-scroll";
import Slider1 from "./Slider1";

export default {
  components: {
    Scrollama,
    Slider1,
  },
  data() {
    return {
      currStep: null,
    };
  },
  mounted() {
    // this.scroller = new LocomotiveScroll({
    //   el: document.querySelector("[data-scroll-container]"),
    //   smooth: true,
    // });
    // LocomotiveScroll.update();

    this.lmS = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
    });
    this.lmS = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container2]"),
      smooth: true,
      direction: "horizontal",
    });

    // eslint-disable-next-line no-undef
    imagesLoaded("[data-scroll-container]", () => {
      this.lmS.update();
    });
  },
  methods: {
    mouseOver: function() {
      document.documentElement.style.overflow = "hidden";
      console.log("flag ");

      this.$smoothScroll({
        scrollTo: this.$refs.slider1,
        duration: 100,
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

/* .fadeClass:hover .zoom_image {
  transform: scale(1);
  transition: ease-out 2.5s;
} */
.body-loco {
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
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
  height: 10%;
  transition: all 2s;
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
.body:hover .letter {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
.body:hover .letter2 {
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
  text-align: right;
  font-size: 1.5vh;
  padding-right: 10%;
  margin-top: -5%;
  font-weight: bold;
  font-family: "Spectral", serif;
  color: #a6a6a6;
}

/* end of footer section */
</style>
