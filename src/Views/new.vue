<template>
  <div>
    <div v-if="isMobile()" style="height:100vh;width:100vw;overflow:hidden">
      <div class="sub-right">
          <v-card
            flat
            color="transparent"
            style="margin-top:25vh"
            class="d-flex flex-column mb-6"
          >
            <v-img contain height="30vh" src="../assets/main.png"></v-img>
            <p class="preTitle">
             Touch To Begin..
            </p>
          </v-card>
        </div>
    </div>
    <div v-else style="height:100vh;">
      <div class="outer-wrapper">
        <div class="wrapper">
          <div class="sub-right">
            <div class="center_r">
              <p>
                <v-card
                  flat
                  color="transparent"
                  class="d-flex flex-column justify-center align-center"
                  style="position:relative"
                >
                  <v-img
                    eager
                    contain
                    height="30vh"
                    width="20vw"
                    style="margin-top:33vh"
                    src="../assets/main.png"
                  >
                  </v-img>
                  <!-- <p class="preTitle" style="font-size:3vh;margin-top:-55vh">
                    Click to continue..
                  </p> -->

                  <div class="scroll" v-if="arrow">
                    <v-img
                      contain
                      height="10vh"
                      width="5vh"
                      eager
                      src="../assets/scrollImage.png"
                    >
                    </v-img>
                  </div>
                </v-card>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Spectral:wght@200&display=swap");
.scroll {
  position: fixed;
  top: 90%;
  left: 49%;
}
.slide {
  width: 100%;
  height: 100vh;
}
.wrapper {
  display: flex;
  flex-direction: row;
  width: 100.1vw;
  transform: rotate(90deg) translateY(-100vh);
  transform-origin: top left;
}
.one {
  background: #292929;
}
.preTitle {
  text-align: center;
  font-size: 2vh;
  font-family: "Spectral", serif;
  color: #adaaaa;
}

.outer-wrapper {
  width: 100vh;
  height: 100vw;
  transform: rotate(-90deg) translateX(-100vh);
  transform-origin: top left;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
  scrollbar-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
}
::-webkit-scrollbar {
  display: none;
}
body {
  margin: 0;
}
.pinContainer {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
  overflow: hidden;
}
.panel {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(100px);
  opacity: 0;
}
.sub-right {
  float: right;
  height: 100vh;
  width: 100vw;
  opacity: 1;
  transition: 0.9s linear;
  background-image: linear-gradient(to left, white, black);
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 3000ms;
  background-attachment: fixed;
  overflow: hidden;
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
  text-align: center;
}

.center_r as {
  line-height: 1.5;
  display: inline-block;
  vertical-align: middle;
  color: rgb(241, 233, 233);
  font-size: 10vh;
}

/* .container_l:hover .sub-right {
  opacity: 0;
} */
.bg {
  width: 100vw;
  background-size: 100% 100%;
  height: 100vh;

  /* background-image: url("../assets/new_main.jpg"); */
}
/* asdasd */
.error-message {
  animation: fadeOut 2s forwards;
  animation-delay: 5s;
  background: red;
  color: white;
  padding: 10px;
  text-align: center;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
<script>
export default {
  data: () => ({
    hell: false,
    arrow: true,
  }),
  created() {
    // this.handleScroll2();
    // window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    handleScroll2() {
      // window.addEventListener("scroll", this.handleScroll);
      console.log("hello start");
    },
    handleScroll() {
      console.log("1");
      this.hell = true;
      localStorage.setItem("isloaded", false);
      // document.documentElement.style.overflow = "hidden";

      // document.documentElement.style.overflow = "hidden";
    },
    hello() {
      this.$router.push({ path: "/screen2/" });
    },
  },
};
</script>
