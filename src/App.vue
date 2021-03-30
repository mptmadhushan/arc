<template>
  <v-app>
    <v-main app>
      <transition name="fade">
        <router-view> </router-view>
      </transition>
      <v-scroll-to-top></v-scroll-to-top>
    </v-main>
    <!-- <ScrollTopArrow></ScrollTopArrow> -->
  </v-app>
</template>

<script>
// import ScrollTopArrow from "./components/ScrollTopArrow";
export default {
  // watch: {
  //   $route(to, from) {
  //     // react to route changes...
  //     console.log("route parameter changed");
  //     // console.log(to.fullPath);
  //     console.log(from);
  //   },
  // },
  created: function() {
    this.globalVar = "It's will change global var";
  },
  data: () => ({
    newName: "hellp",
  }),
  methods: {},
  name: "App",
  mounted() {
    window.onbeforeunload = function() {
      var storage = window.localStorage;
      storage.clear();
    };
  },
  watch: {
    name(newName) {
      localStorage.name = newName;
    },
  },
  components: {
    // ScrollTopArrow,
  },
};
</script>
<style>
#icon-arrow-up {
  position: relative;
  color: #fff;
  margin: 0;
  top: 8px !important;
  width: 20px !important;
  height: 20px !important;
  transition: all 0.3s ease;
}
#icon-container {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: rgba(0, 0, 0, 0.7);
  width: 30px !important;
  height: 30px !important;
  display: block;
  border-radius: 50%;
  transition: all 0.3s ease;
  text-align: center;
}
::-webkit-scrollbar {
  display: none;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");
.text001 {
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  font-size: 1.5vh;
  color: #11111193;
}
.text002 {
  font-family: "Josefin Sans", sans-serif;
  text-align: justify;
  padding: 10px;
  font-size: 1.5vh;
  color: #11111193;
}
.text003 {
  font-family: "Josefin Sans", sans-serif;
  text-align: justify;
  padding: 10px;
  font-size: 2vh;
  color: #11111193;
}
.carousel-3d-slide {
  top: 0;
  border-radius: 1px;
  border-color: #000;
  border-color: transparent;
  background-size: cover;
  background-color: #ccc;
  display: block;
  margin: 0;
  text-align: left;
  border-style: none !important;
}
.carousel-3d-container figcaption[data-v-0251a268] {
  position: absolute;
  background-color: #ffff;
  color: #111;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
  text-align: center;
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

.bg-new {
  float: right;
  height: 100vh;
  width: 100vw;
  opacity: 1;
  transition: 0.6s linear;
  background-image: linear-gradient(to left, white, black);
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 3000ms;
}
.bg:hover .bg-new {
  opacity: 0;
}
</style>
