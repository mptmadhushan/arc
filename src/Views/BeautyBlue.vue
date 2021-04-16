/* eslint-disable vue/no-parsing-error */ /* eslint-disable vue/no-parsing-error
*/
<template>
  <div>
    <div style="margin-top:10vh">
      <div class="body fadeClass">
        <div class="back-text">
          <div class="text-container">
            <span class="letter">B</span><span class="letter">E</span
            ><span class="letter">A</span><span class="letter">U</span
            ><span class="letter">T</span><span class="letter">Y</span>
          </div>
        </div>
        <div class="back-text" style="margin-top:-50vh">
          <div class="text-container">
            <span class="letter2">B</span><span class="letter2">E</span
            ><span class="letter2">A</span><span class="letter2">U</span
            ><span class="letter2">T</span><span class="letter2">Y</span>
          </div>
        </div>
        <div
          style="margin-top:35vh"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <div class="bg-items">
            <v-img
              class="img-to-ef"
              eager
              contain
              height="90vh"
              src="../assets/blueprint/imgspace.jpg"
            >
              <div class="twelve"></div>
            </v-img>
          </div>
          <div style="width:99vw;height:13vh"></div>
          <div>
            <P class="textMini text-center">
              Pablo Piccaso<br />Cannes,france<br />1956
            </P>
            <p class="text001 text-right" style="">
              "ENJOYING ART IS A PERSONAL MATTER.<br />
              IT'S MADE UP BY CONTEMPLATION, SILENCE,<br />
              ABSTRACTION"<br /><span class="textMini">-Renzo Piano</span>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div style="width:99vw;height:40vh"></div>
    <div class="fadeClass">
      <div>
        <v-layout row wrap justify-center>
          <v-flex md6 xs12 sm12 align-self-end>
            <div class="image-box">
              <v-img
                class="zoom_image"
                eager
                contain
                height="90vh"
                src="../assets/blueprint/_SDS3614.png"
              >
                <div class="twelve"></div>
              </v-img>
            </div>
          </v-flex>
          <v-flex md4 xs12 sm12 align-self-end>
            <div class="image-box">
              <v-img
                class="zoom_image"
                eager
                contain
                height="80vh"
                src="../assets/blueprint/_SDS2957.jpeg"
              >
                <div class="twelve"></div>
              </v-img>
            </div>
          </v-flex>
        </v-layout>
        <p class="text001 text-left" style="margin-top:5vh;margin-left:12vh">
          "i dont know where my work begins or ends,<br />
          or where it wants to take me, but i believe<br />
          that's where things truly belong"<br />
          <span class="textMini">
            - Mahen Perera
          </span>
        </p>
      </div>
    </div>
    <div style="width:99vw;height:20vh"></div>
    <div class="parallax"></div>
    <p class="textMini text-left" style="margin:5vh">
      -Charles and Ray Eamaes
      <br />

      Londge chair by Herman Miller

      <br />

      1956
    </p>
    <div style="width:99vw;height:20vh"></div>
    <div class="fadeClass">
      <div class="bg-items">
        <v-img
          class="img-to-ef"
          eager
          contain
          height="90vh"
          src="../assets/blueprint/6.png"
        >
          <div class="twelve"></div>
        </v-img>
      </div>

      <div>
        <p class="text001">
          "AN EMPTY CANSVAS IS FULL"
        </p>
        <P class="textMini text-center mt-1">
          - Robert Rauschenburg
        </P>
      </div>
    </div>
    <div style="width:99vw;height:25vh"></div>

    <div class="fadeClass">
      <div class="bg-items">
        <v-img
          class="img-to-ef"
          eager
          contain
          height="90vh"
          src="../assets/blueprint/Space/museebourdelle.jpg"
        >
          <div class="twelve"></div>
        </v-img>
      </div>
    </div>
    <div style="width:99vw;height:30vh"></div>
    <div v-on:mouseover="mouseOver" ref="slider1">
      <Slider2 />
    </div>
  </div>
</template>

<script scoped>
import LocomotiveScroll from "locomotive-scroll";
import Slider2 from "./Slider2";
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
  color: grey;
}
.body {
  /* height: 50vh;
  width: 100vw;
  padding: 0;
  margin: 0; */
  /* background-color: black;S */
}
.back-text {
  max-height: 32vh;
  /* background-color: red; */
  overflow: hidden;
}
.text-container {
  margin-top: -10vh;
  width: 100%;
  height: 100%;
  position: relative;
  left: 50%;
  transform: translate(-50%, -50%);
  color: grey;
  font-family: "Oranienbaum", serif;
  font-size: 30vh;
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
.body:hover .letter2 {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}
.letter2 {
  transition: transform 5s cubic-bezier(0.43, 0.1, 0.57, 0.9), filter 5s ease,
    opacity 5s ease;
  opacity: 0;
  filter: blur(5px);
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
/* new 🇵🇬 */

.parallax {
  /* The image used */
  background-image: url("../assets/blueprint/_SDS3206b.jpeg");
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
  transition: all 10s;
}
.fadeClass:hover .img-to-ef {
  transform: scale(1.1);
  transition: all 5s ease-in-out;
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
  font-family: "Arimo", sans-serif;
  font-size: 2.5vh;
  font-weight: 900;
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
