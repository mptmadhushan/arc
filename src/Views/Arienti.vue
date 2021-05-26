<template>
  <div ref="scrollSections" class="hello">
    <section data-scroll-section>
      <div style="margin-top:-4vh">
        <router-link to="/projects">
          <img
            style="opacity: 0.5;margin-inline:20px"
            height="20vh"
            src="../assets/backArrow.png"
          />
        </router-link>
        <div>
          <div class="b4con" data-scroll data-scroll-speed="3">
            <div class="b4"></div>
          </div>

          <p class="newText2 text-center" data-scroll data-scroll-speed="1">
            Resuscitate. Repurpose. Reinvigorate
          </p>
        </div>
      </div>
    </section>
    <section data-scroll-section>
      <div class="hoverPart v-img" data-scroll data-scroll-class="v-img-active">
        <v-img
          data-scroll
          data-scroll-speed="4"
          eager
          contain
          height="85vh"
          src="../assets/Arienti/_SDS7732.jpeg"
        >
          <!-- <div class="effect-on-hover"></div> -->
        </v-img>
        <p class="newText2 text-center" data-scroll data-scroll-speed="2">
          Formerly in disrepair - A compendium of contemporary lines
        </p>
      </div>
    </section>
    <section data-scroll-section>
      <!-- <div data-scroll data-scroll-class="ren-class2" class="ren-class"></div> -->
      <div
        data-scroll-speed="4"
        class="v-img"
        data-scroll
        data-scroll-class="v-img-active"
      >
        <div>
          <carousel-3d
            :width="900"
            :height="600"
            :inverse-scaling="200"
            :space="1300"
            :autoplay="false"
            :autoplay-timeout="3000"
            :display="3"
            :perspective="0"
          >
            <slide :index="0">
              <figure>
                <v-img eager src="../assets/Arienti/_SDS7808.jpeg" />
              </figure> </slide
            ><slide :index="1">
              <figure>
                <v-img eager src="../assets/Arienti/_SDS7783.jpeg" />
              </figure> </slide
            ><slide :index="2">
              <figure>
                <v-img eager src="../assets/Arienti/_SDS7782.jpeg" />
              </figure>
            </slide>
            <slide :index="3">
              <figure>
                <v-img eager src="../assets/Arienti/_SDS7808.jpeg" />
              </figure> </slide
            ><slide :index="4">
              <figure>
                <v-img eager src="../assets/Arienti/_SDS7783.jpeg" />
              </figure> </slide
            ><slide :index="5">
              <figure>
                <v-img eager src="../assets/Arienti/_SDS7782.jpeg" />
              </figure>
            </slide>
          </carousel-3d>
          <div
            data-scroll
            data-scroll-speed="1"
            class="newText2 text-center testStudy"
          >
            A study in subtlety.
          </div>
        </div>
      </div>
    </section>

    <section data-scroll-section>
      <div data-scroll class="v-img" data-scroll-class="v-img-active">
        <div eager>
          <div v-if="isMobile()">
            <v-img eager contain src="../assets/Arienti/_SDS7793.jpeg"></v-img>
          </div>
          <div v-else>
            <v-img
              data-scroll
              data-scroll-speed="2"
              height="90vh"
              contain
              eager
              src="../assets/Arienti/_SDS7793.jpeg"
            ></v-img>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.min.css";

export default {
  name: "locoScroll",
  props: {
    msg: String,
  },
  components: {},
  data() {
    return {
      currStep: null,
      scrollIns: null,
    };
  },
  mounted() {
    document.addEventListener("wheel", this.helb);

    const _self = this;
    this.$nextTick(function() {
      _self.initLocoScroll();
    });
  },
  methods: {
    helb() {
      locomotiveScroll.on("scroll", (args) => {
        // Get all current elements : args.currentElements
        if (typeof args.currentElements["hey"] === "object") {
          let progress = args.currentElements["hey"].progress;
          console.log(progress);
          // ouput log example: 0.34
          // gsap example : myGsapAnimation.progress(progress);
        }
      });
    },
    initLocoScroll() {
      const _self = this;
      this.scroll = new locomotiveScroll({
        el: _self.$refs["scrollSections"],
        smooth: true,
        smoothMobile: true,
        getDirection: true,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");
section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
}
.imgEffect {
  margin-top: -10vh;
  background-color: blue;
  opacity: 1;
  transition: all 13s linear;
}
.v-img {
  margin-top: 10vh;
  /* background-color: rgb(218, 17, 17); */
  opacity: 0.5;
  transition: all 2s linear;
}
.v-img-active {
  margin-top: -10vh;
  /* background-color: rgb(17, 218, 61); */
  opacity: 1;
  transition: all 2s linear;
}
.v-img2:hover {
  margin-top: -10vh;
  background-color: blue;
  opacity: 1;
  transition: all 3s linear;
}

.testStudy {
  /* background-color: rgb(218, 17, 17); */
  text-align: center;
  padding-top: 20px;
  /* transition: all 10s linear; */
}
.testStudy2 {
  /* background-color: rgb(30, 17, 218); */
  text-align: center;
  padding-top: 20px;
  /* transition: all 10s linear; */
}
.ren-class {
  min-height: 100vh;
  background-color: rgb(30, 17, 218);
  transition: all 5s linear;
}
.ren-class2 {
  max-height: 10vh;
  background-color: rgb(238, 166, 10);
  padding-top: -20vh;
  transition: all 5s linear;
}
.hoverPart {
  height: 100vh;
  overflow: hidden;
}
.hoverPart:hover .effect-on-hover {
  background-color: white;
  min-height: 0vh;
  width: 100vw;
  transition: all 2s linear;
}
.effect-on-hover {
  background-color: white;
  min-height: 100vh;
  width: 100vw;
}
/* section {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
} */
.text001 {
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  padding: 10px;
  margin-top: 10px;
  font-size: 1.5vh;
  color: #11111193;
}
.newText2 {
  font-family: "Josefin Sans", sans-serif;
  text-align: justify;
  font-size: 2vh;
  margin-top: -3vh;
  color: #11111193;
}
.b4con {
  background-image: url("../assets/Arienti/_SDS7737.jpeg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 88vh;
}

.b4 {
  background-color: #fff;
  transform: scaleY(0);
  transform-origin: top;
  height: 100%;
  width: 100%;
  /* transition: transform 0.5s ease-in-out;
  animation: mymove 5s infinite; */
  animation: slideInFromLeft 1.5s ease-in;
}
.b4-n {
  background-color: #111;
  transform: scaleY(0);
  transform-origin: top;
  height: 100%;
  width: 100%;
}
@keyframes slideInFromLeft {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
