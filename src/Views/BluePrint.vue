<template>
  <div>
    <audio
      allow="autoplay;fullscreen"
      id="my_audio"
      src="../assets/music.mp3"
    ></audio>

    <div class="d-flex flex-row mb-6">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          D
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          E
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          S
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="700"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          I
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="900"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          G
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="1100"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          N
        </p>
      </div>
    </div>
    <div style="height:100vh;">
      <v-layout row wrap justify-center style="margin-top:10vh">
        <v-flex md6 align-self-start>
          <div style=""></div>
          <v-img
            data-aos="zoom-in-up"
            data-aos-delay="100"
            data-aos-duration="2000"
            style="text-align: left"
            contain
            src="../assets/blueprint/_SDS3203b.png"
          ></v-img>
        </v-flex>
        <v-flex md5 align-self-start>
          <p
            class="text001"
            data-aos="zoom-in-up"
            data-aos-delay="100"
            data-aos-duration="2000"
          >
            Enim incididunt id tempor minim incididunt consectetur ut ad laboris
            velit Enim incididunt id tempor minim incididunt consectetur ut ad
            laboris velit
          </p>
        </v-flex>
      </v-layout>
    </div>

    <div style="height:100vh">
      <p class="text001">
        Cupidatat laborum magna Lorem eiusmod aute nisi qui laborum.
      </p>
      <v-layout row wrap justify-center>
        <v-flex md6 xs12 sm12 align-self-end>
          <div class="align-end" style="text-align:end;height: 100vh;">
            <img
              align-content-end
              data-aos="zoom-in"
              data-aos-duration="2000"
              contain
              style="margin-top:20vh;margin-right:1vw"
              height="60%"
              src="../assets/blueprint/_SDS3006.png"
            />
          </div>
          <!-- <v-img
            contain
            height="60vh"
            src="../assets/blueprint/_SDS3006.png"
          ></v-img> -->
        </v-flex>
        <v-flex md6 xs12 sm12 align-self-end>
          <div class="align-end" style="text-align:start;height: 100vh;">
            <img
              data-aos="zoom-in"
              data-aos-duration="2000"
              align-content-start
              contain
              style="margin-left:1vw"
              height="80%"
              src="../assets/blueprint/_SDS2960.png"
            />
          </div>
          <!-- <v-img
            contain
            height="80vh"
            src="../assets/blueprint/_SDS2960.png"
          ></v-img> -->
        </v-flex>
      </v-layout>
    </div>

    <div v-if="isMobile()" style="margin-top: 60vh;padding:2vh">
      <v-img contain src="../assets/blueprint/1.png"></v-img>
      <p class="text002">
        Eu id sint aliquip quis aliquip excepteur velit ut laboris esse
        adipisicing culpa magna culpa.
      </p>
    </div>
    <div v-else>
      <p class="text001">
        Eu id sint aliquip quis aliquip excepteur velit ut laboris esse
        adipisicing culpa magna culpa.
      </p>
      <v-layout row wrap justify-space-around>
        <v-flex md8 align-self-start>
          <div class="align-start" style="text-align:start;height: 100vh;">
            <img
              align-content-end
              contain
              style="margin-top:20vh;margin-right:1vw"
              height="90%"
              data-aos="fade-right"
              data-aos-duration="3000"
              src="../assets/blueprint/1.png"
            />
          </div>
          <!-- <v-img height="70vh" contain src="../assets/blueprint/1.png"></v-img> -->
        </v-flex>
        <v-flex md3 align-self-start>
          <p class="text001"></p>
        </v-flex>
      </v-layout>
    </div>
    <div style="height:100vh;margin-top:10vh">
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="slide one">
            <div style="height:100vh">
              <img
                data-aos="fade-left"
                data-aos-duration="3000"
                data-aos-delay="1000"
                height="100%"
                style="padding:5vh"
                src="../assets/blueprint/2.png"
              />
              <img
                height="100%"
                data-aos="fade-left"
                data-aos-duration="3000"
                data-aos-delay="1500"
                style="padding:5vh"
                src="../assets/blueprint/3.png"
              />
              <img
                height="100%"
                data-aos="fade-left"
                data-aos-duration="3000"
                data-aos-delay="2000"
                style="padding:5vh"
                src="../assets/blueprint/4.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-row mb-6">
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          B
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="300"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          E
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="500"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          A
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="700"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          U
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="900"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          T
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="1100"
        data-aos-easing="ease-in-out"
      >
        <p style="font-size:10vw;color:grey;">
          Y
        </p>
      </div>
    </div>

    <div>
      <v-layout row wrap justify-space-around>
        <v-flex md8 align-self-start>
          <div class="align-start" style="text-align:start;height: 90vh;">
            <img
              data-aos="fade-up"
              data-aos-duration="3000"
              align-content-end
              contain
              style="margin-right:1vw"
              height="100%"
              src="../assets/blueprint/5.png"
            />
          </div>
          <!-- <v-img height="70vh" contain src="../assets/blueprint/1.png"></v-img> -->
        </v-flex>
        <v-flex md3 align-self-start> </v-flex>
      </v-layout>
    </div>
    <div>
      <p class="text003" style="width:20vw">
        Quis ullamco consectetur pariatur dolore etQuis ullamco consectetur
        pariatur dolore et.
      </p>
    </div>

    <div style="height:100vh;margin-top:10vh">
      <v-layout row wrap justify-center>
        <v-flex md6 xs12 sm12 align-self-end>
          <div
            class="align-end"
            style="text-align:end;height: 100vh;margin-left:20vw"
          >
            <img
              align-content-end
              contain
              data-aos="fade-up"
              data-aos-duration="3000"
              style="margin-right:1vw"
              height="90%"
              src="../assets/blueprint/_SDS3614.png"
            />
          </div>
          <!-- <v-img
            contain
            height="60vh"
            src="../assets/blueprint/_SDS3006.png"
          ></v-img> -->
        </v-flex>
        <v-flex md6 xs12 sm12 align-self-end>
          <div class="align-center" style="text-align:center;height: 100vh;">
            <img
              align-content-start
              contain
              data-aos="fade-up"
              data-aos-duration="3000"
              style="margin-top:15vh;margin-left:-1vw"
              height="60%"
              src="../assets/blueprint/_SDS3199b.png"
            />
          </div>
          <!-- <v-img
            contain
            height="80vh"
            src="../assets/blueprint/_SDS2960.png"
          ></v-img> -->
        </v-flex>
      </v-layout>
    </div>

    <div v-if="isMobile()" style="margin-top: 10vh;height:200vh">
      <v-img contain src="../assets/blueprint/6.png"></v-img>
      <p class="text001">
        Esse voluptate laborum ea sunt ea mollit aute quis.
      </p>
    </div>
    <div v-if="isMobile()" style="margin-top: 60vh;padding:2vh">
      <v-img contain src="../assets/blueprint/6.png"></v-img>
      <p class="text002">
        Eu id sint aliquip quis aliquip excepteur velit ut laboris esse
        adipisicing culpa magna culpa.
      </p>
    </div>

    <div v-else style="height: 100vh;margin-top: 1vh">
      <v-layout row wrap justify-end>
        <v-flex md8 xs11 sm11 align-self-center>
          <v-img
            style="margin-left:40px"
            contain
            height="70vh"
            data-aos="fade-left"
            data-aos-duration="3000"
            src="../assets/blueprint/6.png"
          ></v-img>
        </v-flex>
        <v-flex md5 align-self-center>
          <p class="text002" style="margin-left:5vw">
            Quis ullamco consectetur pariatur dolore etQuis ullamco consectetur
            pariatur dolore et.
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div v-if="!isMobile()">
      <v-layout row wrap justify-space-around>
        <v-flex md8 align-self-start>
          <div class="align-start" style="text-align:start;height: 100vh;">
            <img
              align-content-end
              contain
              data-aos="fade-right"
              data-aos-duration="3000"
              style="margin-left:-6vw"
              height="90%"
              src="../assets/blueprint/7.png"
            />
          </div>
          <!-- <v-img height="70vh" contain src="../assets/blueprint/1.png"></v-img> -->
        </v-flex>
        <v-flex md3 align-self-start>
          <p class="text001"></p>
        </v-flex>
      </v-layout>
    </div>

    <!-- <div v-else style="height:100vh;">
      <v-layout row wrap justify-start style="margin-top: 10vh">
        <v-flex md10 sm11 xs11 align-self-start>
          <v-img center contain src="../assets/blueprint/7.png"></v-img>
        </v-flex>
      </v-layout>
    </div> -->

    <div v-else style="height: 100vh;margin-top: 1vh">
      <v-layout row wrap justify-start>
        <v-flex md12 xs11 sm11 align-self-center>
          <v-img contain height="90vh" src="../assets/blueprint/7.png"></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="height:100vh;margin-top: 10vh" mt-12>
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="slide one">
            <div style="height:100vh">
              <img
                height="100%"
                data-aos="fade-left"
                data-aos-duration="3000"
                data-aos-delay="1000"
                style="padding:5vh;margin-left:2vw"
                src="../assets/blueprint/_SDS3184.png"
              />

              <img
                data-aos="fade-left"
                data-aos-duration="3000"
                data-aos-delay="1500"
                height="100%"
                style="padding:5vh;margin-left:20vw"
                src="../assets/blueprint/slide.png"
              />
              <img
                data-aos="fade-left"
                data-aos-duration="3000"
                data-aos-delay="2000"
                height="100%"
                style="padding:5vh;margin-left:20vw"
                src="../assets/_SDS3169.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HorizontalScroll from "vue-horizontal-scroll";
import "vue-horizontal-scroll/dist/vue-horizontal-scroll.css";

export default {
  components: {
    // HorizontalScroll,
  },
  mounted() {
    // document.getElementById("my_audio").play();
    document.getElementById("my_audio").muted = false;
    document.getElementById("my_audio").play();
    // console.log("Will it play here?? lol");
    // console.log("Play outside of");
    // const audio = require("@/assets/music.mp3");
    // // var audio = new Audio("../assets/music.mp3");
    // var playPromise = audio.play();
    // playPromise;
  },
};
</script>

<style scoped>
.container {
  width: 400px;
  background-color: red;
  height: 220px;
  position: relative;
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
  background: #292929;
  height: 100vh;
}

.outer-wrapper {
  width: 100vh;
  height: 100vw;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}
.text001 {
  text-align: center;
  padding: 5vh;
  font-size: 2vh;
  color: #11111193;
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
