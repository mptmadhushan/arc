<template>
  <!-- <div :class="scrollPosition > 50 ? 'bg' : 'bg2'"> -->
  <div class="bg">
    <div v-if="loaded" class="new_div">
      <transition name="fade">
        <PreLoader v-if="isloaded"></PreLoader>
        <!-- <PreLoader v-if="scrollPosition < 50"></PreLoader> -->
      </transition>
    </div>

    <div class="container_l">
      <div class="sub-left">
        <div class="center">
          <p>
            <v-card flat color="transparent" to="/BluePrint">
              <p class="pa-2 title">BLUEPRINT</p>
            </v-card>
          </p>
        </div>
      </div>
    </div>
    <div class="container_l">
      <div class="sub-right">
        <div class="center_r" style="margin-right:40px">
          <p>
            <!-- <v-btn depressed x-large text to="/screen2">
              CDA
            </v-btn> -->
            <v-card flat color="transparent" class="d-flex flex-row">
              <v-img
                @click="hello()"
                height="5vh"
                width="20vh"
                contain
                src="../assets/logoTitle.png"
              ></v-img>
            </v-card>
          </p>
        </div>
      </div>
    </div>

    <div class="clear-both"></div>
    <p style="font-size:200px"></p>
  </div>
  <!-- </div> -->
  <!-- </div> -->
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
  },
  data: () => ({
    dialog: false,
    isloaded: true,
    loaded: true,
    scrollPosition: null,
  }),
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.hey = localStorage.getItem("isloaded");
    console.log("hello", this.hey);
    if (this.hey == "false") {
      this.loaded = false;
      console.log("false", this.loaded);
    }
    // setTimeout(this.handleScroll, 2500);
    // document.documentElement.style.overflow = "hidden";
    console.log("globalVar", this.globalVar);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    handleScroll() {
      this.isloaded = false;
      localStorage.setItem("isloaded", false);
      document.documentElement.style.overflow = "auto";
    },
    hello() {
      this.$router.push({ path: "/screen2/" });
    },
  },
};
</script>

<style scoped>
.new_div {
  overflow-x: scroll;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
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
  background-image: linear-gradient(to left, rgb(221, 30, 30), rgb(5, 81, 221));
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
  background-size: 100% 110%;
  height: 100vh;
  /* color: "red"; */
  background-image: url("../assets/new_main.jpg");
  animation: fadeIn ease 20s;
  -webkit-animation: fadeIn ease 20s;
  -moz-animation: fadeIn ease 20s;
  -o-animation: fadeIn ease 20s;
  -ms-animation: fadeIn ease 20s;
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
