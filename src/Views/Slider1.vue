<template>
  <!-- <div data-scroll data-scroll-id="hey" v-if="isMobile()" style="height:100vh">
    <div class="outer-wrapper">
      <div class="wrapper">
        <div class="slide one_m">
          <div style="height:100vh">
            <v-row no-gutters>
              <v-col>
                <div style="height:100vh">
                  <div
                    class="b1sli"
                    data-aos="zoom-in-left"
                    data-aos-duration="1500"
                  >
                    <div class="newBox2"></div>
                  </div>
                </div>
              </v-col>
              <v-col>
                <div style="height:100vh;">
                  <div class="b2sli">
                    <div class="b1"></div>
                  </div>
                </div>
              </v-col>
              <v-col>
                <div style="height:100vh;">
                  <div>
                    <div class="b1"></div>
                  </div>
                </div>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <div style="height:100vh" class="first-slide" ref="slider1" id="viewElement">
    <div class="outer-wrapper">
      <div class="wrapper">
        <div class="slide one">
          <div>
            <v-row no-gutters style="height:100vh;">
              <v-col align-self="center" style="margin-left:2vw">
                <div>
                  <v-img
                    width="60vw"
                    height="70vh"
                    src="../assets/blueprint/slider1img2.jpg"
                  >
                    <div class="newBox2"></div>
                  </v-img>
                  <p class="textMini text-left" style="margin-top:5%">
                    LC4
                    <br />
                    Charlotte Perriand
                    <br />
                    Cassina 1930
                  </p>
                </div>
              </v-col>
              <v-col align-self="center" style="margin-left: 3vw">
                <div style="margin-top:-8%">
                  <v-img height="85vh" src="../assets/blueprint/3.png"> </v-img>
                  <p class="textMini text-left" style="margin-left:7vw">
                    Geoffrey Bawa
                    <br />
                    Geoffrey Bawa Trust
                    <br />
                    circa 1992
                  </p>
                </div> </v-col
              ><v-col align-self="center">
                <div>
                  <v-img
                    style="margin-left:-4vw"
                    height="70vh"
                    contain
                    src="../assets/blueprint/slider1img3.jpg"
                  >
                  </v-img>
                  <p
                    class="textMini text-left"
                    style="margin-top:5%;margin-left:12vw"
                  >
                    Louis Gost Chair
                    <br />
                    Philippe Starck
                    <br />
                    2002
                  </p>
                </div>
              </v-col>

              <!-- <v-col>
                <div>
                  <div style="height:100vh;">
                    <div class="b3sli">
                      <div class="b1"></div>
                      <p
                        class="textMini text-left"
                        style="margin-top:5%;margin-left:2%;"
                      >
                        Louis Gost Chair
                        <br />
                        Philippe Starck
                        <br />
                        2002
                      </p>
                    </div>
                  </div>
                </div>
              </v-col> -->
            </v-row>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    open: true,
  }),
  mounted() {
    // document.documentElement.style.overflow = "hidden";
  },
  methods: {
    mouseOver: function() {
      console.log("flag ");
      // document.documentElement.style.overflow = "hidden";
    },
  },
};
</script>

<style scoped>
.textMini {
  text-align: right;
  font-size: 1.5vh;
  font-weight: bold;
  color: #fff;
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
/* .b1sli:hover .b1sli {
  transform: scale(1.1);
  transition: all 3s ease;
}
.outer-wrapper:hover .b2sli{
  transform: scale(1.1);
  transition: all 3s ease;
}
.outer-wrapper:hover .b3sli{
  transform: scale(0.9);
  transition: all 3s ease;
} */
.b1sli {
  /* background-color: blueviolet; */
  background-image: url("../assets/blueprint/3.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 80%;
  margin-top: 5%;
}
.b2sli {
  /* background-color: blueviolet; */
  background-image: url("../assets/blueprint/slider1img2.jpg");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 67%;
  margin-top: 14%;
}
.b3sli {
  /* background-color: blueviolet; */
  background-image: url("../assets/blueprint/slider1img3.jpg");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 67%;
  margin-top: 14%;
  margin-left: 9%;
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

/* p {
  display: inline-block;
  vertical-align: top;
  margin: 0;
} */

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
  width: 180vw;
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
}
.one {
  background: #ffffff;
  height: 100vh;
  padding-left: 80vw;
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
