/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/no-parsing-error
*/
<template>
  <div>
    <div style="margin-top:10vh">
      <div class="body2 fadeClass">
        <div class="back-text">
          <div class="text-container">
            <span class="letter2">S</span><span class="letter2">P</span
            ><span class="letter2">A</span><span class="letter2">C</span
            ><span class="letter2">E</span><span class="letter2"></span>
            <span class="letter2">D</span><span class="letter2">S</span>
            <span class="letter2">P</span><span class="letter2">A</span>
            <span class="letter2">C</span><span class="letter2">E</span>
          </div>
        </div>

        <div style="width:99vw;height:30vh"></div>
        <div style="margin-top:5vh;width:100vw;height:100vh">
          <div class="bg-item-zoom">
            <v-img
              class="img-to-ef"
              eager
              contain
              height="100vh"
              src="../assets/blueprint/Space/SL_Bawa_Lunuganga_DS_080307_0088.jpg"
            >
              <div class="twelve"></div>
            </v-img>
          </div>
          <!-- <div style="width:99vw;height:13vh"></div> -->
          <div>
            <P
              class="textMini text-left"
              style="margin-left:5vw;margin-top:1vh"
            >
              Geoffrey Bawa<br />Lunuganga<br />1948 - onwards
            </P>
            <div style="width:99vw;height:40vh"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="fadeClass">
      <div style="width:99vw;height:50vh"></div>

      <div>
        <P
          class="text001 text-right"
          style="margin-right:10vh;margin-top:-20vh"
        >
          "WE BORROW FROM NATURE THE<br />
          SPACE UPON WHICH WE BUILD"<br />
          <span class="textMini text-right">
            - Tadao Ando
          </span>
        </P>
        <P class="textMini text-right" style="margin:1vw"> </P>
      </div>
      <div>
        <v-layout row wrap justify-center mt-12>
          <v-flex md6 xs12 sm12 align-self-end>
            <div>
              <v-img
                eager
                contain
                height="90vh"
                src="../assets/blueprint/Space/1280.jpg"
              >
                <div class="twelve"></div>
              </v-img>
            </div>
            <div>
              <P
                class="textMini text-left"
                style="margin-top:1vw;margin-left:8vw"
              >
                Ricardo Bofill<br />La Fabrica<br />1973
              </P>
            </div>
          </v-flex>
          <v-flex md4 xs12 sm12 align-self-center>
            <div class="image-box">
              <v-img
                style="margin-right:5vw"
                class="zoom_image"
                eager
                contain
                height="70vh"
                src="../assets/blueprint/_SDS3496.jpeg"
              >
                <div class="twelve"></div>
              </v-img>
            </div>
          </v-flex>
        </v-layout>
      </div>
      <!-- <div class="d-flex flex-row justify-center">
        <div class="bg-items mr-12 d-flex align-start mb-12">
          <v-img
            class="img-to-ef"
            eager
            height="50vh"
            src="../assets/blueprint/Space/1280.jpg"
          >
            <div class="twelve"></div>
          </v-img>
          <div>
            <P
              class="textMini text-left"
              style="margin-top:20vh;margin-left:10vw"
            >
              Ricardo Bofill<br />La Fabrica<br />1973
            </P>
          </div>
        </div>

        <div class="bg-items2 d-flex align-end">
          <v-img
            class="img-to-ef2"
            eager
            height="70vh"
            src="../assets/blueprint/_SDS3496.jpeg"
          >
            <div class="twelve"></div>
          </v-img>
        </div>
      </div> -->
    </div>

    <div class="fadeClass">
      <div style="width:99vw;height:25vh"></div>

      <div class="bg-itemsOld">
        <v-img
          class="img-to-efOld"
          eager
          contain
          height="90vh"
          src="../assets/blueprint/_SDS3571b.jpeg"
        >
          <div class="twelve"></div>
        </v-img>
      </div>
    </div>
    <div style="width:99vw;height:25vh"></div>
    <div v-on:mouseover="mouseOver" ref="slider1">
      <Slider2 />
    </div>
  </div>
</template>

<script scoped>
import LocomotiveScroll from "locomotive-scroll";
import Slider2 from "./Slide3New";
export default {
  components: {
    Slider2,
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
        duration: 100,
        // offset: 50,
      });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arimo:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Oranienbaum&display=swap");

.bg-itemsOld {
  overflow: hidden;
  width: 100%;
}
.img-to-efOld {
  transition: all 10s;
}
.fadeClass:hover .img-to-efOld {
  transform: scale(1.1);
  transition: all 5s ease-in-out;
}
.bg-items {
  max-width: 40vw;
  display: inline-block;
  overflow: hidden;
}
.bg-items2 {
  width: 30vw;
  display: inline-block;
  overflow: hidden;
}
.img-to-ef {
  display: block;
  transition: transform 4s; /* smoother zoom */
}
.img-to-ef2 {
  display: block;
  transition: transform 4s; /* smoother zoom */
}
.fadeClass:hover .img-to-ef {
  transform: scale(1.1);
  transform-origin: 50% 50%;
}
.fadeClass:hover .img-to-ef2 {
  transform: scale(1.1);
  transform-origin: 50% 50%;
}
.bg-item-zoom {
  position: relative;
  text-align: left;
  overflow: hidden;
  margin-left: 5vw;
  width: 70%;
  height: 100%;
  transition: all 13s;
}
.image-box {
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
.zoom_image {
  transform: scale(1.5);
  transition: all 10s;
}
.fadeClass:hover img {
  transform: scale(1);
  transition: ease-out 3.5s;
}
.fadeClass:hover .zoom_image {
  transform: scale(1);
  transition: ease-out 3.5s;
}

.parallax-new {
  /* The image used */
  background-image: url("../assets/blueprint/_SDS3206b.jpeg");

  /* Set a specific height */
  min-height: 100vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.items {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  background-color: #fff;
}
.items div {
  position: absolute;
}
.twelve {
  width: 100%;
  height: 100%;
  background-color: #fff;
  transition: all 10s;
}

.items:hover .twelve {
  height: 10%;
  transition: all 3s;
}

.textMini {
  text-align: right;
  font-size: 1.5vh;
  /* padding-right: 10%; */
  margin-top: -5%;
  font-weight: bold;
  font-family: "Spectral", serif;
  color: #a6a6a6;
}
.body {
  /* height: 50vh;
  width: 100vw;
  padding: 0;
  margin: 0; */
  /* background-color: black;S */
}
.back-text {
  max-height: 52vh;
  /* background-color: red; */
  overflow: hidden;
}
.text-container {
  margin-top: -15vh;
  width: 85%;
  height: 100%;
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-family: "Oranienbaum", serif;
  font-size: 50vh;
  -webkit-font-smoothing: antialiased;
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
  transform: translateY(-100px);
  opacity: 0;
  transition: transform 3.3333333333s ease-out, opacity 5s ease;
}
.body:hover .letter {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
.letter {
  color: #a6a6a6;
  transition: transform 5s cubic-bezier(0.43, 0.1, 0.57, 0.9), filter 5s ease,
    opacity 5s ease;
  opacity: 0;
  filter: blur(5px);
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

.body2:hover .letter2 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
.letter2 {
  color: #a6a6a6;
  transition: transform 5s cubic-bezier(0.43, 0.1, 0.57, 0.9), filter 5s ease,
    opacity 5s ease;
  opacity: 0;
  filter: blur(5px);
}
.letter2:nth-of-type(1) {
  transform: translateY(55vh);
  transition-duration: 2s;
}
.letter2:nth-of-type(2) {
  transform: translateY(60vh);
  transition-duration: 2.4s;
}
.letter2:nth-of-type(3) {
  transform: translateY(65vh);
  transition-duration: 2.8s;
}
.letter2:nth-of-type(4) {
  transform: translateY(70vh);
  transition-duration: 3.2s;
}
.letter2:nth-of-type(5) {
  transform: translateY(75vh);
  transition-duration: 3.6s;
}
.letter2:nth-of-type(6) {
  filter: blur(0);
  transform: translateY(80vh);
  transition-duration: 3.8s;
}
.letter2:nth-of-type(7) {
  transform: translateY(40vh);
  transition-duration: 3.2s;
}
.letter2:nth-of-type(8) {
  transform: translateY(45vh);
  transition-duration: 3.6s;
}
.letter2:nth-of-type(9) {
  filter: blur(0);
  transform: translateY(50vh);
  transition-duration: 3.8s;
}
.letter2:nth-of-type(10) {
  transform: translateY(40vh);
  transition-duration: 3.2s;
}
.letter2:nth-of-type(11) {
  transform: translateY(45vh);
  transition-duration: 3.6s;
}
.letter2:nth-of-type(12) {
  filter: blur(0);
  transform: translateY(50vh);
  transition-duration: 3.8s;
}
.letter2:nth-of-type(13) {
  transform: translateY(45vh);
  transition-duration: 3.6s;
}
.letter2:nth-of-type(14) {
  filter: blur(0);
  transform: translateY(50vh);
  transition-duration: 3.8s;
}
/* new 🇵🇬 */

.parallax {
  /* The image used */
  background-image: url("../assets/blueprint/_SDS3571b.jpeg");
  margin: 10px;
  /* Set a specific height */
  min-height: 100vh;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-items {
  overflow: hidden;
  width: 100%;
}
.img-to-ef {
  transform: scale(1.5);
  transition: all 10s;
}
.fadeClass:hover .img-to-ef {
  transform: scale(1);
  transition: all 4s ease-in-out;
}
.fadeClass:hover .twelve {
  height: 0%;
  transition: all 3s;
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
  font-size: 2.5vh;
  font-weight: 900;
  font-family: "Spectral", serif;
  color: #a6a6a6;
}
.text003 {
  text-align: left;
  padding-left: 2vw;
  font-size: 2vh;
  font-family: "Spectral", serif;
  color: #a6a6a6;
}
.text002 {
  text-align: start;
  padding: 5vh;
  font-size: 2vh;
  font-family: "Spectral", serif;
  color: #a6a6a6;
}
.image_slider {
  display: flex;
  overflow-x: auto;
  height: 100vh;
  background-color: #292929;
}
</style>
