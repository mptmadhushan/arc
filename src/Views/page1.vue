<template>
  <div>
    <div v-if="isMobile()">
      <Scrollama
        :once="true"
        :offset="0.7"
        @step-enter="({ element }) => (currStep = element.dataset.stepNo)"
        @step-exit="({ element }) => (currStep = null)"
      >
        <div style="height:10vh;width100vw"></div>
        <div class="hello" :data-step-no="1" :class="{ active: 1 == currStep }">
          <div style="min-width:100vw">
            <div
              class="fadeClass"
              :data-step-no="1"
              once
              :class="{ active: 1 == currStep }"
            >
              <div class="about-mb">
                <div class="imgDiv mb-12">
                  <div
                    style="align-items: flex-end;display:flex;flex-direction:row;justify-content:space-around"
                  >
                    <div>
                      <p
                        class="about_us"
                        style="padding-bottom:5vh;text-align:start"
                      >
                        ABOUT US
                      </p>
                      <v-img
                        eager
                        contain
                        max-width="40vw"
                        src="../assets/1.png"
                      >
                        <div
                          class="ab1"
                          once
                          :data-step-no="1"
                          :class="{ active: 1 == currStep }"
                        ></div>
                      </v-img>
                    </div>
                    <v-img eager contain max-width="50vw" src="../assets/2.png">
                      <div
                        class="ab1"
                        once
                        :data-step-no="1"
                        :class="{ active: 1 == currStep }"
                      ></div>
                    </v-img>
                  </div>
                </div>
                <p class="new mt-12 pa-2" style="font-size:12px">
                  CDA aims to elevate lives and incorporate beauty in art to
                  magnify spaces. Our team consists of young, creatively
                  passionate like-minded individuals who bring in new
                  perspectives. By drawing inspiration from all corners of the
                  world and connecting it with modern ideologies, it helps us
                  put forth a unique and distinctive end product. What sets us
                  apart from the norm is the human factor- how interacting with
                  our designs can impact lives. By collaborating with our
                  clientele, we add a sense of defined lifestyle to our
                  creations. Melding vision and sensibilities to enhance the way
                  you experience life.
                </p>
              </div>
            </div>
            <div v-if="!isMobile()" style="width:99vw;height:20vh;padding:10px"></div>
            <div v-if="isMobile()" style="width:99vw;height:10vh;padding:10px"></div>
          </div>
        </div>
      </Scrollama>
    </div>
    <div v-else>
      <Scrollama
        :once="true"
        :offset="0.7"
        @step-enter="({ element }) => (currStep = element.dataset.stepNo)"
        @step-exit="({ element }) => (currStep = null)"
      >
        <div style="height:10vh;width100vw"></div>
        <div class="hello" :data-step-no="1" :class="{ active: 1 == currStep }">
          <div style="min-width:100vw" v-if="loaded">
            <div
              class="fadeClass"
              :data-step-no="1"
              once
              :class="{ active: 1 == currStep }"
            >
              <v-layout
                row
                wrap
                justify-center
                style="margin-top:20vh;margin-bottom:2%;min-width:100vw"
              >
                <v-flex md1 sm3 xs3 align-self-start>
                  <p
                    class="about_us"
                    style="margin-top:20vh;margin-right:-2vw;text-align:right"
                  >
                    ABOUT US
                  </p></v-flex
                >
                <v-flex
                  md3
                  sm10
                  xs10
                  align-self-end
                  style="margin-top:20vh"
                  pa-1
                >
                  <div class="imgDiv">
                    <v-img
                      eager
                      height="60vh"
                      src="../assets/1.png"
                      class="zoomImage"
                    >
                      <div
                        class="ab1"
                        once
                        :data-step-no="1"
                        :class="{ active: 1 == currStep }"
                      ></div>
                    </v-img>
                  </div>
                </v-flex>
                <v-flex md3 xs10 pa-1 align-self-baseline>
                  <div class="imgDiv">
                    <v-img
                      eager
                      height="90vh"
                      src="../assets/2.png"
                      class="zoomImage"
                    >
                      <div
                        class="ab1"
                        once
                        :data-step-no="1"
                        :class="{ active: 1 == currStep }"
                      ></div>
                    </v-img>
                  </div>
                </v-flex>
                <v-flex md5 xs10 sm10 align-self-end px-3>
                  <p class="new">
                    CDA aims to elevate lives and incorporate beauty in art to
                    magnify spaces. Our team consists of young, creatively
                    passionate like-minded individuals who bring in new
                    perspectives. By drawing inspiration from all corners of the
                    world and connecting it with modern ideologies, it helps us
                    put forth a unique and distinctive end product. What sets us
                    apart from the norm is the human factor- how interacting
                    with our designs can impact lives. By collaborating with our
                    clientele, we add a sense of defined lifestyle to our
                    creations. Melding vision and sensibilities to enhance the
                    way you experience life.
                  </p>
                </v-flex>
              </v-layout>
            </div>
            <div style="width:99vw;height:20vh;padding:10px"></div>
          </div>
          <div
            v-else
            style="min-width:100vw"
            class="fadeClass"
            :data-step-no="1"
            once
            :class="{ active: 1 == currStep }"
          >
            <div class="about_us_bg">
              <v-layout
                row
                wrap
                justify-center
                style="margin-top-md:20vh;margin-bottom:2%;"
              >
                <v-flex md1 sm1 xs3 align-self-start>
                  <p
                    class="about_us"
                    style="margin-top-md:20vh;margin-right-md:-2vw;text-align-md:right"
                  >
                    ABOUT US
                  </p></v-flex
                >
                <v-flex
                  md3
                  sm10
                  xs10
                  align-self-end
                  style="margin-top:20vh"
                  pa-1
                >
                  <div class="imgDiv">
                    <v-img
                      eager
                      height="60vh"
                      src="../assets/1.png"
                      class="zoomImage"
                    >
                      <div
                        class="ab1"
                        once
                        :data-step-no="1"
                        :class="{ active: 1 == currStep }"
                      ></div>
                    </v-img>
                  </div>
                </v-flex>
                <v-flex md3 xs10 sm10 pa-1 align-self-baseline>
                  <div class="imgDiv">
                    <v-img
                      eager
                      height="90vh"
                      src="../assets/2.png"
                      class="zoomImage"
                    >
                      <div
                        once
                        class="ab1"
                        :data-step-no="1"
                        :class="{ active: 1 == currStep }"
                      ></div>
                    </v-img>
                  </div>
                </v-flex>
                <v-flex md5 xs10 sm10 align-self-end px-3>
                  <p class="new">
                    CDA aims to elevate lives and incorporate beauty in art to
                    magnify spaces. Our team consists of young, creatively
                    passionate like-minded individuals who bring in new
                    perspectives. By drawing inspiration from all corners of the
                    world and connecting it with modern ideologies, it helps us
                    put forth a unique and distinctive end product. What sets us
                    apart from the norm is the human factor- how interacting
                    with our designs can impact lives. By collaborating with our
                    clientele, we add a sense of defined lifestyle to our
                    creations. Melding vision and sensibilities to enhance the
                    way you experience life.
                  </p>
                </v-flex>
              </v-layout>
            </div>
            <div style="width:99vw;height:20vh;padding:10px"></div>
          </div>
        </div>
      </Scrollama>
    </div>
  </div>
</template>

<script>
import "intersection-observer";
import Scrollama from "vue-scrollama";
export default {
  components: {
    Scrollama,
  },
  data: () => ({
    showWithDelay: false,
    loaded: true,
    currStep: null,
  }),
  mounted() {
    setTimeout(() => {
      this.showWithDelay = true;
    }, 2000);
    this.hey = localStorage.getItem("isloaded");
    console.log("hello", this.hey);
    if (this.hey == "false") {
      this.loaded = false;
      console.log("false", this.loaded);
    }
  },
};
</script>

<style scoped>
.image-box {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 100%;
}
.img {
  max-width: 100%;
  transition: all 3s;
  display: block;
  width: 100%;
  height: auto;
  transform: scale(1.1);
}
.fadeClass {
  padding-top: 5vh;
  /* opacity: 0.5; */
  /* transition: all 15s linear; */
}
.fadeClass.active {
  opacity: 1;
  transition: all 3s linear;
}
.fadeClass:hover .img {
  transform: scale(1);
  transition: all 3s;
}
.about-mb {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  flex-direction: column;
  max-width: 100vw;
  flex-wrap: wrap;
}

.fadeClass:hover .zoomImage {
  transform: scale(1);
  transition: all 5s;
}
.zoomImage {
  transform: scale(1.3);
  height: 100%;
  width: 100%;
  transition: all 5s;
}
.imgDiv {
  position: relative;
  margin: auto;
  overflow: hidden;
  width: 100%;
  transition: all 13s;
}

.ab1con {
  /* background-color: blueviolet; */
  background-image: url("../assets/1.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 45vh;
  transition-delay: 10s;
}
.ab1 {
  background-color: #f2ff;
  transform: scaleY(1);
  transform-origin: top;
  height: 0%;
  width: 100%;
}
/* .about_us_bg:hover .ab1 {
  background-color: #fff;
  transform: scaleY(0);
  transform-origin: top;
  height: 100%;
  width: 100%;
  animation: slideInFromLeft 1s ease-in;
} */
.ab1.active {
  background-color: #fff;
  transform: scaleY(0);
  transform-origin: top;
  height: 100%;
  width: 100%;
  /* transition: transform 0.5s ease-in-out;
  animation: mymove 5s infinite; */
  animation: slideInFromLeft 1.3s ease-in;
}
.b2con {
  /* background-color: blueviolet; */
  background-image: url("../assets/2.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 95vh;
  transition-delay: 4s;
}
.b2 {
  background-color: #f2ff;
  transform: scaleY(1);
  transform-origin: top;
  height: 10%;
  width: 100%;
  transition-delay: 10s;
  /* transition: transform 0.5s ease-in-out;
  animation: mymove 5s infinite; */
  /* animation: slideInFromLeft 1.5s ease-in; */
}
/* .about_us_bg:hover .b2 {
  background-color: #fff;
  transform: scaleY(0);
  transform-origin: top;
  height: 100%;
  width: 100%;
  animation: slideInFromLeft 0.9s ease-in;
} */
.b2.active {
  background-color: #fff;
  transform: scaleY(0);
  transform-origin: top;
  height: 100%;
  width: 100%;
  /* transition: transform 0.5s ease-in-out;
  animation: mymove 5s infinite; */
  animation: slideInFromLeft 1.3s ease-in;
}
@keyframes slideInFromLeft {
  0% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(-100%);
  }
}
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");
.v-application p {
  margin-bottom: 1px !important;
}
.brand {
  opacity: 0.4;
  text-align: right;
  height: 30px;
}

.new {
  font-family: "Josefin Sans", sans-serif;
  margin-top: 10px;
}
.about_us {
  font-family: "Josefin Sans", sans-serif;
  font-size: 2.5vh;
}
.about_us.active {
  color: red;
  background-color: blue;
}
.title-page2 {
  font-size: 3vh;
  font-weight: bold;
  font-family: "Josefin Sans", sans-serif;

  color: #8f9092c5;
}
.slide-fade {
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
.step {
  padding: 15vh 0;
  width: 50%;
  margin: 0 auto 30vh;
  background-color: rgb(230, 230, 8);
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
}
.step.active {
  background-color: teal;
  color: white;
}
</style>
