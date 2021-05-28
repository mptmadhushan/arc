<template>
  <div class="bg">
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

    <div class="container_l">
      <div class="sub-left">
        <div class="center">
          <p>
            <v-card flat color="transparent" style="opacity:0.3">
              <v-img
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

    <div class="container_l">
      <div class="sub-right">
        <div class="center_r">
          <p>
            <v-card flat color="transparent">
              <v-img
                @click="hello()"
                height="5vh"
                style="margin-right:-5vw"
                width="15vw"
                contain
                src="../assets/logoTitle.png"
              ></v-img>
            </v-card>
          </p>
        </div>
      </div>
    </div>

    <div class="clear-both"></div>
    <!-- <p style="font-size:200px" v-if="arrowa"></p> -->
    <div>
      <!-- <v-img
        contain
        height="10vh"
        width="5vh"
        eager
        src="../assets/whiteArrow.png"
      ></v-img> -->
      <v-layout row wrap justify-space-between style="margin-top:-6vh">
        <v-flex md2 class="leftArr">
          <!-- <v-img
            contain
            height="100%"
            eager
            src="../assets/transparent-brush-arrow-5e332a3c82c7f2.0719248015804114525357 left.png"
          ></v-img> -->
        </v-flex>
        <v-flex md2 style="margin-top:2vh">
          <v-img
            contain
            height="20px"
            eager
            src="../assets/whiteArrow.png"
          ></v-img>
        </v-flex>
        <v-flex md2 class="rightArr">
          <!-- <v-img
            contain
            height="100%"
            eager
            src="../assets/transparent-brush-arrow-5e332a3c82c7f2.0719248015804114525357.png"
          ></v-img> -->
        </v-flex>
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
    isloaded2: false,
    loaded: true,
    scrollPosition: null,
    isIntersectingElement: false,
    data: "hekko",
    heh: false,
  }),
  created() {
    //  console.log(jjjc)
    //   window.addEventListener("wheel", function(event,jjjc){
    //  console.log('hello',jjjc)

    //     console.log(event.deltaY);
    //     if (event.deltaY < 0) {
    //       console.log('if')
    //     } else {
    //       // this.handleScroll()
    //      console.log(jjjc)

    //      }})
    document.addEventListener("wheel", this.helb);

    //  document.addEventListener("wheel", function(event) {
    // this.handleScroll;
    // console.log(event.deltaY);
    // if (event.deltaY < 0) {
    //   console.log('if')
    // } else {
    //  console.log(this.heh)
    // this.heh = true;

    //  }})
  },
  mounted() {
    // document.addEventListener("wheel", function(event) {
    // this.handleScroll;
    // console.log(event.deltaY);
    // if (event.deltaY < 0) {
    //   console.log('if')
    // } else {
    //  console.log(this.heh)
    // this.heh = true;

    //  }})
    //     document.addEventListener("wheel", function(event) {
    //   console.log(event.deltaY);
    //   if (event.deltaY < 0) {
    //     this.handleScroll;
    //   } else {
    //     console.log("up");
    //     this.methodNnew;
    //     //
    //     console.log("🐼🐼🐼🐼🐼🐼🐼", this.isloaded);
    //     this.isloaded = false;
    //     localStorage.setItem("isloaded", false);
    //     if (this.isloaded == true) {
    //       console.log("hello bitch");
    //     }
    //   }
    // });
    document.documentElement.style.overflow = "hidden";
    // window.setTimeout(
    //   (document.documentElement.style.overflow = "hidden"),
    //   2000
    // );
    // window.addEventListener("scroll", this.updateScroll);
    this.hey = localStorage.getItem("isloaded");
    console.log("hello", this.hey);
    if (this.hey == "false") {
      this.loaded = false;
      console.log("false", this.loaded);
    }
  },

  methods: {
    helb() {
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
.clear-both {
  clear: both;
}

.center {
  line-height: 100vh;
  height: 100vh;
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
