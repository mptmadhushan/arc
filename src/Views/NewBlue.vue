<template>
  <div>
    <div data-scroll-container>
      <router-link to="/">
        <div>
          <img
            style=" opacity: 0.5;margin-inline:20px;margin-top:2vh"
            height="20vh"
            src="../assets/backArrow.png"
          />
        </div>
      </router-link>
      <div>
        <div class="body">
          <!-- <div class="text-container">
            <span class="letter">D</span><span class="letter">E</span
            ><span class="letter">S</span><span class="letter">I</span
            ><span class="letter">G</span><span class="letter">N</span>

            <span class="reg-text">D</span><span class="reg-text">E</span
            ><span class="letter">S</span><span class="reg-text">I</span
            ><span class="reg-text">G</span><span class="reg-text">N</span>
          </div> -->
          <div class="d-flex flex-row reg-text">
            <div
              data-aos="zoom-up"
              data-aos-delay="600"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                D
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="700"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                E
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="800"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                S
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="900"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                I
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1100"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                G
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1200"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                N
              </p>
            </div>
          </div>

          <div class="d-flex flex-row" style="margin-top:-20vh">
            <div
              data-aos="zoom-up"
              data-aos-delay="1600"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                D
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1700"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                E
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1800"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                S
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="1900"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                I
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="2100"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                G
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="2200"
              data-aos-easing="ease-in-out"
            >
              <p style="font-size:10vw;color:grey;">
                N
              </p>
            </div>
          </div>

          <div>
            <v-layout row wrap justify-center>
              <v-flex md6 xs12 sm12 align-self-start style="height:65vh">
                <div
                  class="b1con"
                  data-aos="zoom-in-left"
                  data-aos-duration="1500"
                >
                  <div class="b1"></div>
                </div>
              </v-flex>
              <v-flex md5 align-self-start>
                <p
                  class="text001"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                >
                  "Enim incididunt id tempor minim incididunt consectetur ut ad
                  laboris velit Enim incididunt id tempor minim incididunt
                  consectetur ut ad laboris velit"
                </p>
                <div
                  class="textMini"
                  data-aos="fade-left"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                >
                  -Le Corbased
                </div>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </div>
      <div style="width:99vw;height:40vh"></div>
      <div class="fadeClass">
        <div class="fadeClassHover">
          <v-layout row wrap justify-center>
            <v-flex md6 xs12 sm12 align-self-end>
              <div class="align-end" style="text-align:end">
                <img
                  align-content-end
                  contain
                  style="margin-top:20vh;margin-right:1vw;height:60vh"
                  src="../assets/blueprint/_SDS3006.png"
                />
              </div>
            </v-flex>
            <v-flex md6 xs12 sm12 align-self-end>
              <div class="align-end" style="text-align:start">
                <img
                  align-content-start
                  contain
                  style="margin-left:1vw;;height:80vh"
                  height="80%"
                  src="../assets/blueprint/_SDS2960.png"
                />
              </div>
            </v-flex>
            <p class="text001">
              "Cupidatat laborum magna Lorem eiusmod aute nisi qui laborum.
              magna Lorem eiusmod aute nisi"<span class="textMini">
                -Le Corbased
              </span>
            </p>
          </v-layout>
        </div>
      </div>
      <div style="width:99vw;height:20vh"></div>
      <div v-if="isMobile()" style="margin-top: 10vh;padding:2vh">
        <v-img eager contain src="../assets/blueprint/1.png"></v-img>
        <!-- <p class="text002">
          Eu id sint aliquip quis aliquip excepteur velit ut laboris esse
          adipisicing culpa magna culpa.
        </p> -->
      </div>

      <div v-else class="blueBack">
        <!-- <p class="text001">
          Eu id sint aliquip quis aliquip excepteur velit ut laboris esse
          adipisicing culpa magna culpa.
        </p> -->
        <v-layout row wrap justify-start>
          <v-flex md8 xs12 sm12 align-self-start ml-12>
            <v-img eager height="100vh" src="../assets/blueprint/1.png">
              <div class="ab1"></div>
            </v-img>
          </v-flex>
        </v-layout>
      </div>
      <div style="width:99vw;height:20vh"></div>
      <div v-on:mouseover="mouseOver" ref="slider1">
        <Slider1 />
      </div>
      <div style="width:99vw;height:20vh"></div>

      <div v-scroll-lock>
        <div class="d-flex flex-row mb-6">
          <div>
            <p style="font-size:10vw;color:grey;">
              B
            </p>
          </div>
          <div>
            <p style="font-size:10vw;color:grey;">
              E
            </p>
          </div>
          <div>
            <p style="font-size:10vw;color:grey;">
              A
            </p>
          </div>
          <div>
            <p style="font-size:10vw;color:grey;">
              U
            </p>
          </div>
          <div>
            <p style="font-size:10vw;color:grey;">
              T
            </p>
          </div>
          <div>
            <p style="font-size:10vw;color:grey;">
              Y
            </p>
          </div>
        </div>
        <div style="width:99vw;height:20vh"></div>
        <div>
          <v-layout row wrap justify-start pl-12>
            <v-flex md12 xs10 sm10 align-self-start>
              <div class="hover03 column">
                <div>
                  <figure>
                    <img
                      height="100%"
                      src="../assets/blueprint/Space/ludwig-mies-van-der-rohe-maciej-jezyk-barcelona-pavilion.jpg"
                    />
                  </figure>
                </div>
              </div>
              <!-- <div class="align-start" style="text-align:start;height: 80vh">
                <img
                  align-content-end
                  contain
                  style="margin-right:1vw"
                  height="100%"
                  src="../assets/blueprint/Space/ludwig-mies-van-der-rohe-maciej-jezyk-barcelona-pavilion.jpg"
                />
              </div> -->
            </v-flex>
            <v-flex md12 align-self-start>
              <p class="text003" style="width:40vw;margin-top:5vh;padding:1vw">
                Quis ullamco consectetur pariatur dolore etQuis ullamco
                consectetur pariatur dolore et.z
              </p></v-flex
            >
            <div style="width:99vw;height:20vh"></div>
          </v-layout>
        </div>
        <div style="width:99vw;height:20vh"></div>
        <div>
          <div class="parallax"></div>
        </div>
        <!-- <div class="fixed_wrapper">
          <div class="fixed_target" id="fixed-target"></div>
          <div
            class="fixed"
            data-scroll
            data-scroll-sticky
            data-scroll-target="#fixed-target"
          ></div>
        </div> -->
        <div style="width:99vw;height:1vh"></div>

        <div v-if="isMobile()" style="height:100vh;margin-top:20vh">
          <v-layout row wrap justify-center>
            <v-flex md6 xs12 sm12 align-self-end>
              <div
                class="align-end"
                style="text-align:end;height: 100vh;margin-left:20vw"
              >
                <img
                  align-content-end
                  contain
                  style="margin-right:1vw"
                  height="90%"
                  src="../assets/blueprint/_SDS3614.png"
                />
              </div>
            </v-flex>
            <v-flex md6 xs12 sm12 align-self-end>
              <div
                class="align-center"
                style="text-align:center;height: 100vh;"
              >
                <img
                  align-content-start
                  contain
                  style="margin-top:15vh;margin-left:-1vw"
                  height="60%"
                  src="../assets/blueprint/_SDS3199b.png"
                />
              </div>
            </v-flex>
          </v-layout>
        </div>
        <div v-else style="height:100vh;margin-top:10vh" class="fadeClass">
          <div class="fadeClassHover">
            <v-layout row wrap>
              <v-flex md6 xs12 sm12>
                <div
                  class="align-end"
                  style="text-align:end;height: 100vh;margin-left:20vw"
                >
                  <img
                    align-content-end
                    contain
                    style="margin-right:1vw"
                    height="90%"
                    src="../assets/blueprint/_SDS3614.png"
                  />
                </div>
              </v-flex>
              <v-flex md6 xs12 sm12 align-self-end>
                <div
                  class="align-center"
                  style="text-align:center;height: 100vh;"
                >
                  <img
                    align-content-start
                    contain
                    style="margin-top:15vh;margin-left:-1vw"
                    height="60%"
                    src="../assets/blueprint/_SDS3199b.png"
                  />
                </div>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LocomotiveScroll from "locomotive-scroll";
import Slider1 from "./Slider1";
export default {
  components: {
    Slider1,
  },
  data: () => ({
    open: true,
  }),
  mounted() {
    // document.on("ready", function() {
    //   setTimeout(function() {
    //     ".letter".addClass("loaded");
    //     ".reg-text".addClass("loaded");
    //   }, 1000);
    // });

    (this.scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      // smooth: true,
      // getSpeed: true,
    })),
      this.scroll.on("scroll", (args) => {
        // Get all current elements : args.currentElements
        if (typeof args.currentElements["hey"] === "object") {
          // let progress = args.currentElements["hey"].progress;
          // console.log(progress);
          console.log("hello-focused");
          //   this.test();
          document.documentElement.style.overflow = "hidden";

          // ouput log example: 0.34
          // gsap example : myGsapAnimation.progress(progress);
        }
      });
  },
  methods: {
    heyl() {
      console.log("helasd 😷helasd");
    },
    mouseOver: function() {
      console.log("flag ");
      this.$smoothScroll({
        scrollTo: this.$refs.slider1,
        duration: 500,
        // scrollIntoView({ behavior: "smooth" });

        // offset: -50,
      });
    },
  },
};
</script>

<style scoped>
figure {
  width: 1000px;
  height: 400px;
  margin: 0;
  padding: 0;
  background: #fff;
  overflow: hidden;
}
.hover03 figure img {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}
.hover03 figure:hover img {
  -webkit-transform: scale(1);
  transform: scale(1);
}
.textMini {
  text-align: right;
  font-size: 1.5vh;
  padding-right: 10%;
  margin-top: -5%;
  font-weight: bold;
  color: grey;
}
.body {
  /* height: 50vh;
  width: 100vw;
  padding: 0;
  margin: 0; */
  /* background-color: black;S */
}

.text-container {
  width: 100%;
  position: absolute;
  padding: 5vh;
  font-weight: bold;
  top: 2%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: grey;
  letter-spacing: 4px;
  font-family: "Josefin Sans", sans-serif;
  font-size: 10vw;
  margin-bottom: 10vh;
  -webkit-font-smoothing: antialiased;
  text-align: center;
}

span {
  display: inline-block;
}

.reg-text {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0;
}
.body:hover .reg-text {
  transform: translateY(100px);
  opacity: 0;
  transition: transform 3.3333333333s ease-out, opacity 5s ease;
}
.body:hover .letter {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
.letter {
  transition: transform 5s cubic-bezier(0.43, 0.1, 0.57, 0.9), filter 5s ease,
    opacity 5s ease;
  opacity: 0;
  filter: blur(5px);
}
.letter:nth-of-type(2) {
  transform: translateY(-160px);
  transition-duration: 2.5s;
}
.letter:nth-of-type(3) {
  filter: blur(0);
  transform: translateY(-170px);
  transition-duration: 3.8461538462s;
}
.letter:nth-of-type(4) {
  transform: translateY(-200px);
  transition-duration: 3.3333333333s;
}
.letter:nth-of-type(5) {
  transform: translateY(-150px);
  transition-duration: 2.5s;
}
.letter:nth-of-type(6) {
  filter: blur(0);
  transform: translateY(-180px);
  transition-duration: 2.1739130435s;
}
/* new 🇵🇬 */

.parallax {
  /* The image used */
  background-image: url("../assets/blueprint/_SDS1585-3.jpg");

  /* Set a specific height */
  min-height: 100vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.fadeClassHover {
  opacity: 0;
  transition: all 3s ease;
}
.fadeClass:hover .fadeClassHover {
  opacity: 1;
  transition: all 3s ease;
}
.fixed_wrapper {
  position: relative;
  overflow: hidden;
  height: 100vh;
}

.fixed_target {
  bottom: -100vh;
}
.fixed,
.fixed_target {
  position: absolute;
  top: -100vh;
  right: 0;
  left: 0;
}
.fixed {
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url("../assets/blueprint/3.png");
}

.ab1 {
  background-color: #fff;
  transform: scaleY(1);
  transform-origin: top;
  height: 100%;
  width: 100%;
  transition-delay: 10s;
}
.blueBack:hover .ab1 {
  background-color: #fff;
  transform: scaleY(0);
  transform-origin: top;
  height: 100%;
  width: 100%;
  /* transition: transform 0.5s ease-in-out;
  animation: mymove 5s infinite; */
  animation: slideInFromLeft 2s ease-in;
}
html {
  scroll-behavior: smooth;
}
* {
  scroll-behavior: smooth;
}
.newBox {
  background: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  transition: 4s ease;
  -webkit-animation-fill-mode: backwards;
}
.newBox2 {
  background: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  transition: 4s ease;
  -webkit-animation-fill-mode: backwards;
}
.beb:hover .newBox {
  width: 0%;
  background: rgb(255, 255, 255);
}
@-webkit-keyframes animateThis {
  0% {
    width: 100%;
  }
  100% {
    width: -100%;
  }
}
.b1con {
  /* background-color: blueviolet; */
  background-image: url("../assets/blueprint/_SDS3203b.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}
.b2con {
  /* background-color: blueviolet; */
  background-image: url("../assets/blueprint/1.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
.outer-wrapper:hover .newBox2 {
  width: 0%;
  background: #282729;
}
.b1sli {
  /* background-color: blueviolet; */
  background-image: url("../assets/blueprint/3.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
}
.b2sli {
  /* background-color: blueviolet; */
  background-image: url("../assets/blueprint/2.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
}
.b3sli {
  /* background-color: blueviolet; */
  background-image: url("../assets/blueprint/4.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
}
.b1 {
  background-color: rgb(255, 255, 255);
  transform: scaleY(0);
  transform-origin: top;
  height: 100%;
  width: 100%;
  /* transition: transform 0.5s ease-in-out;
  animation: mymove 5s infinite; */
  animation: slideInFromLeft 0.8s;
}
@keyframes slideInFromLeft {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.hey1 {
  background-color: red;
  height: 60vh;
  width: 60vh;
}
.hey3 {
  background-color: black;
  height: 60vh;
  width: 60vh;
}
.hey2 {
  background-color: green;
  height: 60vh;
  width: 60vh;
}
h1,
h2 {
  font-size: 75px;
  text-transform: uppercase;
}
h1 span,
h2 span {
  width: 100%;
  float: left;
  color: #ffffff;
  -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  transform: translateY(-50px);
  opacity: 0;
  animation-name: titleAnimation;
  animation-timing-function: ease;
  animation-duration: 3s;
}

.testss {
  animation-delay: 0.6s;
  -webkit-animation-fill-mode: forwards;
  transform: translateY(-50px);
}
h1 span:first-child {
  animation-delay: 0.7s;
}
h1 span:last-child {
  color: #ffe221;
  animation-delay: 0.5s;
}

h2 {
  top: 0;
  position: absolute;
}
h2 span {
  animation-delay: 4.1s;
  -webkit-animation-fill-mode: forwards;
}
h2 span:first-child {
  animation-delay: 4.2s;
}
h2 span:last-child {
  color: #ffe221;
  animation-delay: 4s;
}

.usechrome {
  font-size: 10px;
  color: #fff;
  font-family: helvetica, arial;
  position: absolute;
  bottom: 20px;
  width: 100%;
  text-align: center;
  left: 0;
}

@keyframes titleAnimation {
  0% {
    transform: translateY(-50px);
    opacity: 0;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 80%);
  }
  20% {
    transform: translateY(0);
    opacity: 1;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  80% {
    transform: translateY(0);
    opacity: 1;
    -webkit-clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
    clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 15%);
  }
  100% {
    transform: translateY(50px);
    opacity: 0;
    -webkit-clip-path: polygon(100% 0, 100% 0%, 0 100%, 0 100%);
    clip-path: polygon(100% 0, 100% 0%, 0 100%, 0 100%);
  }
}
.text {
  position: absolute;
  width: 450px;
  left: 50%;
  margin-left: -225px;
  height: 40px;
  top: 50%;
  margin-top: -20px;
}

p {
  display: inline-block;
  vertical-align: top;
  margin: 0;
}

.word {
  position: absolute;
  width: 220px;
  opacity: 0;
}

.letter {
  display: inline-block;
  position: relative;
  float: left;
  transform: translateZ(25px);
  transform-origin: 50% 50% 25px;
}

.letter.out {
  transform: rotateX(90deg);
  transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.letter.behind {
  transform: rotateX(-90deg);
}

.letter.in {
  transform: rotateX(0deg);
  transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.wisteria {
  color: #8e44ad;
}

.belize {
  color: #2980b9;
}

.pomegranate {
  color: #c0392b;
}

.green {
  color: #16a085;
}

.midnight {
  color: #2c3e50;
}

.slide {
  width: 100%;
  height: 100vh;
}
.wrapper {
  display: flex;
  flex-direction: row;
  width: 160vw;
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
}
.one {
  background: #ffffff;
  height: 100vh;
  padding-left: 50vw;
  transition: 4s ease;
}
.one_m {
  background: #ffffff;
  height: 100vh;
  transition: 4s ease;
}
.outer-wrapper:hover .one {
  background-color: #282729;
  opacity: 1;
  /* width: 100%; */
  padding-left: 10px;
}
.outer-wrapper {
  width: 100vh;
  height: 100vw;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  overflow-y: scroll;
  overflow-x: hidden;
  scroll-behavior: smooth;
  position: absolute;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}
.text001 {
  text-align: center;
  font-size: 3vh;
  font-weight: bold;
  color: #000000;
}
.text003 {
  text-align: left;
  padding-left: 2vw;
  font-size: 2vh;
  color: #11111193;
}
.text002 {
  text-align: start;
  padding: 5vh;
  font-size: 2vh;
  color: #11111193;
}
.image_slider {
  display: flex;
  overflow-x: auto;
  height: 100vh;
  background-color: #292929;
}
</style>
