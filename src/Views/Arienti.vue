<template>
  <div ref="scrollSections" class="hello">
    <section data-scroll-section>
      <div data-scroll data-scroll-speed="1">
        <div class="d-flex justify-space-between" style="margin-top:1vh">
          <router-link to="/projects">
            <img
              style="opacity: 0.5;margin-inline:20px"
              height="20vh"
              src="../assets/backArrow.png"
            />
          </router-link>
        </div>
        <div>
          <div class="b4con" data-aos="zoom-out" data-aos-duration="2000">
            <div class="b4"></div>
          </div>

          <p class="newText2 text-center">
            Resuscitate. Repurpose. Reinvigorate
          </p>
        </div>
      </div>
    </section>
    <section data-scroll-section data-scroll-speed="1">
      <div eager>
        <div v-if="isMobile()">
          <v-img eager contain src="../assets/Arienti/_SDS7732.jpeg"></v-img>
        </div>
        <div v-else>
          <v-img
            eager
            contain
            height="85vh"
            src="../assets/Arienti/_SDS7732.jpeg"
          ></v-img>
        </div>

        <p class="newText2 text-center mt-6">
          Formerly in disrepair - A compendium of contemporary lines
        </p>
      </div>
    </section>
    <section data-scroll-section>
      <div data-scroll data-scroll-speed="1">
        <div eager>
          <div>
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
                    <v-img src="../assets/Arienti/_SDS7782.jpeg" />
                  </figure>
                </slide>
              </carousel-3d>
              <div
                class="newText2 text-center"
                style="background-color: white;text-align: center;padding:20px;"
              >
                A study in subtlety.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section data-scroll-section>
      <div data-scroll data-scroll-speed="1">
        <div eager>
          <div v-if="isMobile()">
            <v-img eager contain src="../assets/Arienti/_SDS7793.jpeg"></v-img>
          </div>
          <div v-else>
            <v-img
              height="85vh"
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
export default {
  name: "locoScroll",
  props: {
    msg: String,
  },
  data() {
    return {
      scrollIns: null,
    };
  },
  mounted() {
    const _self = this;
    this.$nextTick(function() {
      _self.initLocoScroll();
    });
  },
  methods: {
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
  margin-top: 10px;
  color: #11111193;
}
.b4con {
  /* background-color: blueviolet; */
  background-image: url("../assets/Arienti/_SDS7737.jpeg");
  /* background-size: 100% 100%;
  object-fit: fill; */
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
@keyframes slideInFromLeft {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
