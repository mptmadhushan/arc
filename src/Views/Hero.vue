<template>
  <div :class="!isMobile() ? 'bg' : 'bg-m'">
    <div v-if="isMobile()" @click="this.handleScroll">
      <div v-if="loaded" onscroll="hey()">
        <transition name="fade" id="content">
          <PreLoader v-if="isloaded" id="pre"></PreLoader>
        </transition>
      </div>
    </div>
    <div v-else>
      <div v-if="loaded" onscroll="hey()">
        <transition name="fade" id="content">
          <PreLoader v-if="isloaded" id="pre"></PreLoader>
        </transition>
      </div>
    </div>

    <div class="container_l" v-if="isMobile()">
      <div
        class="sub-left-m"
        :class="isloaded ? 'sub-left-m' : 'sub-left-load-m'"
      >
        <div class="center-m">
          <p>
            <v-card
              flat
              color="transparent"
              style="opacity:0.3;padding-left:2vw"
            >
              <v-img
                v-if="!isMobile()"
                @click="hello2()"
                height="15vh"
                style="margin-right:-5vw"
                width="15vw"
                contain
                src="../assets/white-logo.png"
              ></v-img>
            </v-card>
          </p>
        </div>
      </div>
    </div>
    <div class="container_l" v-else>
      <div class="sub-left" :class="isloaded ? 'sub-left' : 'sub-left-load'">
        <div class="center">
          <p>
            <v-card
              flat
              color="transparent"
              style="opacity:0.3;padding-left:2vw"
            >
              <v-img
                v-if="!isMobile()"
                @click="hello2()"
                height="15vh"
                style="margin-right:-5vw"
                width="15vw"
                contain
                src="../assets/white-logo.png"
              ></v-img>
            </v-card>
          </p>
        </div>
      </div>
    </div>

    <div class="container_l" v-if="isMobile()">
      <div
        class="sub-right-m"
        :class="isloaded ? 'sub-left-m' : 'sub-left-load-m'"
      >
        <div class="center_r-m">
          <p>
            <v-card
              flat
              color="transparent"
              style="padding-right:2vw"
              @click="hello()"
            >
              <v-img
                @click="hello()"
                height="15vh"
                style="margin-right:-5vw"
                width="15vw"
                contain
                src="../assets/logoTitle.png"
              ></v-img>
              <p class="project-t ">
                PROJECTS
              </p>
            </v-card>
          </p>
        </div>
      </div>
    </div>
    <div class="container_l" v-else>
      <div class="sub-right" :class="isloaded ? 'sub-left' : 'sub-left-load'">
        <div class="center_r">
          <p>
            <v-card flat color="transparent" style="padding-right:2vw">
              <v-img
                @click="hello()"
                height="15vh"
                style="margin-right:-5vw"
                width="15vw"
                contain
                src="../assets/logoTitle.png"
              ></v-img>
              <p class="project-t ">
                PROJECTS
              </p>
            </v-card>
          </p>
        </div>
      </div>
    </div>

    <div class="clear-both"></div>
    <div v-if="isMobile()" class="white-bg">
      <v-img contain height="20px" eager></v-img>
    </div>
    <div v-else>
      <v-layout row wrap justify-space-between style="margin-top:-6vh">
        <v-flex md2 class="leftArr"> </v-flex>
        <v-flex md2 style="margin-top:2vh">
          <v-img
            contain
            height="20px"
            eager
            src="../assets/whiteArrow.png"
          ></v-img>
        </v-flex>
        <v-flex md2 class="rightArr"> </v-flex>
      </v-layout>
    </div>
  </div>
</template>

<script>
import PreLoader from "./new";
export default {
  name: "Hero",
  components: { PreLoader },
  watch: {
    name(newName) {
      localStorage.name = newName;
      console.log("hello", name);
    },
    isIntersectingElement: function(value) {
      this.$emit("on-intersection-element", value);
    },
  },
  data: () => ({
    arrowa: true,
    dialog: false,
    isloaded: true,
    isloaded2: true,
    loaded: true,
    scrollPosition: null,
    isIntersectingElement: false,
    data: "hekko",
    heh: false,
  }),
  created() {
    document.addEventListener("wheel", this.helb);
  },
  mounted() {
    console.log("😃🇻🇮", this.isloaded, "hey", this.hey);
    document.documentElement.style.overflow = "hidden";
    this.hey = localStorage.getItem("isloaded");
    console.log("hello", this.hey);
    if (this.hey == "false") {
      this.loaded = false;
      console.log("false", this.loaded);
    }
  },

  methods: {
    helb() {
      console.log("hello ");
      // console.log("scrolled", event);
      if (event.deltaY < 0) {
        console.log("if");
      } else {
        // console.log("this.heh");
        this.arrowa = false;
        this.handleScroll();
      }
    },
    myFunction() {
      console.log("scrolled");
      var elmnt = document.getElementById("myDIV");
      var x = elmnt.scrollLeft;
      var y = elmnt.scrollTop;
      document.getElementById("demo").innerHTML =
        "Horizontally: " + x + "px<br>Vertically: " + y + "px";
    },
    scrollToTop() {
      console.log("doneè");
      document.documentElement.style.overflow = "hidden";
      window.scrollTo(0, 0);
    },

    handleScroll() {
      this.methodNnew;
      setTimeout(function() {
        document.documentElement.style.overflow = "auto";
      }, 1500);

      // console.log("🐼🐼🐼🐼🐼🐼🐼");
      this.isloaded = false;
      localStorage.setItem("isloaded", false);
      if (this.isloaded == true) {
        console.log("hello bitch");
      }
    },
    methodNnew() {
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = "";
      body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
      document.getElementById("dialog").classList.remove("show");
    },

    hello() {
      this.$router.push({ path: "/projects" });
    },
    hello2() {
      this.$router.push({ path: "/blueprint" });
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");

.project-t {
  font-family: "Josefin Sans", sans-serif;
  font-size: 2vh;
  width: 100%;
  margin-top: -3vh;
  text-align: center;
}
.bg:hover .leftArr {
  animation-delay: 3s;
  margin-left: -10vw;
  transition: 6s ease-in;
}
.bg:hover .rightArr {
  margin-right: -10vw;
  transition: 6s ease-in;
  opacity: 0 6s;
}
.scroll {
  /* width: 100%; */
  height: 100%;
  margin-top: -10vh;
  margin-left: 49%;
}
body {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}
.slide {
  width: 100%;
  height: 100vh;
}
.wrapper {
  display: flex;
  flex-direction: row;
  /* width: 100.01vw; */
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
}
.one {
  background: #292929;
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
#new_div {
  /* display: none; */
  /* position: fixed; */
  /* z-index: 1; */
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.panel {
  height: 100vh;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
.center_text {
  line-height: 100vh;
  height: 100vh;
  text-align: center;
}

.center_text p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  color: rgb(241, 233, 233);
  font-size: 10vh;
}
.overlay_text {
  float: right;
  height: 100vh;
  width: 100vw;
  opacity: 1;
  transition: 0.6s linear;
  background-image: linear-gradient(
    to left,
    rgb(238, 228, 228),
    rgb(5, 81, 221)
  );
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 3000ms;
}
.overlay:hover .overlay_text {
  opacity: 0;
}
.sub-left-m {
  float: left;
  height: 50vh;
  width: 29%;
  align-items: center;
  opacity: 0;
  transition: 0.6s ease;
  background-image: linear-gradient(
    to right,
    black,
    rgba(0, 0, 0, 0.774),
    transparent
  );
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 1300ms;
}
.sub-left {
  float: left;
  height: 100vh;
  width: 29%;
  align-items: center;
  opacity: 0;
  transition: 0.6s ease;
  background-image: linear-gradient(
    to right,
    black,
    rgba(0, 0, 0, 0.774),
    transparent
  );
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 1300ms;
}
.sub-left-load {
  float: left;
  height: 100vh;
  width: 29%;
  align-items: center;
  opacity: 0;
  transition: 0.6s ease;
  background-image: linear-gradient(
    to right,
    black,
    rgba(0, 0, 0, 0.774),
    transparent
  );
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 1300ms;
  -webkit-animation: fadein 3s ease-in-out 2;
  -moz-animation: fadein 3s ease-in-out 2;
  animation: fadein 3s ease-in-out 2;
}
.sub-left-load-m {
  float: left;
  height: 50vh;
  width: 29%;
  align-items: center;
  opacity: 0;
  transition: 0.6s ease;
  background-image: linear-gradient(
    to right,
    black,
    rgba(0, 0, 0, 0.774),
    transparent
  );
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 1300ms;
  -webkit-animation: fadein 3s ease-in-out 2;
  -moz-animation: fadein 3s ease-in-out 2;
  animation: fadein 3s ease-in-out 2;
}
@-webkit-keyframes fadein {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@-moz-keyframes fadein {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

@keyframes fadein {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.sub-right {
  float: right;
  height: 100vh;
  width: 29%;
  opacity: 0;
  transition: 0.6s ease;
  background-image: linear-gradient(
    to left,
    white,
    rgba(255, 255, 255, 0.678),
    transparent
  );
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 3000ms;
}
.sub-right-m {
  float: right;
  height: 50vh;
  width: 29%;
  opacity: 0;
  transition: 0.6s ease;
  background-image: linear-gradient(
    to left,
    white,
    rgba(255, 255, 255, 0.678),
    transparent
  );
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 3000ms;
}
.sub-right-load {
  float: right;
  height: 100vh;
  width: 29%;
  opacity: 0;
  transition: 0.6s ease;
  background-image: linear-gradient(
    to left,
    white,
    rgba(255, 255, 255, 0.678),
    transparent
  );
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 3000ms;
  -webkit-animation: fadein 4s ease-in-out 2;
  -moz-animation: fadein 4s ease-in-out 2;
  animation: fadein 4s ease-in-out 2;
}
.sub-right-load-m {
  float: right;
  height: 50vh;
  width: 29%;
  opacity: 0;
  transition: 0.6s ease;
  background-image: linear-gradient(
    to left,
    white,
    rgba(255, 255, 255, 0.678),
    transparent
  );
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 3000ms;
  -webkit-animation: fadein 4s ease-in-out 2;
  -moz-animation: fadein 4s ease-in-out 2;
  animation: fadein 4s ease-in-out 2;
}
.clear-both {
  clear: both;
}

.center {
  line-height: 100vh;
  height: 100vh;
  text-align: left;
}
.center-m {
  line-height: 100vh;
  height: 50vh;
  text-align: left;
}

.center p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  color: white;
}
.center_r {
  line-height: 100vh;
  height: 100vh;
  text-align: right;
}
.center_r-m {
  line-height: 100vh;
  height: 50vh;
  text-align: right;
}

.center_r p {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  color: black;
}

.container_l:hover .sub-left {
  opacity: 1;
}
.bg:hover .bg2 {
  opacity: 1;
}
.container_l:hover .sub-right {
  opacity: 1;
}
.bg {
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  width: 100vw;
  /* background-size: 100% 110%; */
  height: 100vh;
  scrollbar-width: none;
  -ms-overflow-style: none;
  /* color: "red"; */
  background-image: url("../assets/2.0home page.png");
  animation: fadeIn ease 20s;
  -webkit-animation: fadeIn ease 20s;
  -moz-animation: fadeIn ease 20s;
  -o-animation: fadeIn ease 20s;
  -ms-animation: fadeIn ease 20s;
}
.white-bg {
  background-image: linear-gradient(to top, #fff, #fff, transparent);
  height: 10vh;
  margin-top: -10vh;
  width: 100vw;
}
.bg-m {
  width: 100vw;
  background-size: 100% 100%;
  height: 50vh;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background-image: url("../assets/2.0home page.png");
  animation: fadeIn ease 20s;
  -webkit-animation: fadeIn ease 20s;
  -moz-animation: fadeIn ease 20s;
  -o-animation: fadeIn ease 20s;
  -ms-animation: fadeIn ease 20s;
}
.bg::-webkit-scrollbar {
  display: none;
}
.change_color {
  background-image: linear-gradient(to left, white, black);
}
.change_color2 {
  background-image: linear-gradient(to left, rgb(138, 16, 16), black);
}
.bg2 {
  float: right;
  height: 100vh;
  width: 100vw;
  opacity: 1;
  transition: 0.6s linear;
  background-image: linear-gradient(to left, white, black);
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 3000ms;
  animation: fadeIn ease 20s;
  -webkit-animation: fadeIn ease 20s;
  -moz-animation: fadeIn ease 20s;
  -o-animation: fadeIn ease 20s;
  -ms-animation: fadeIn ease 20s;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.hello {
  /* background-color: red; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.hello :hover {
  background-color: rgb(0, 4, 255);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
