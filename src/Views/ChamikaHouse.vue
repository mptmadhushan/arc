<template>
  <v-container fluid>
    <div ref="scrollSections" class="hello">
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="3">
          <div class="d-flex justify-space-between" style="margin-top:-2vh">
            <router-link to="/projects">
              <img
                style="opacity: 0.5;margin-inline:20px"
                height="20vh"
                src="../assets/backArrow.png"
              />
            </router-link>
            <!-- <ShapesPop /> -->
          </div>
          <div class="text-center">
            <v-layout row wrap justify-center>
              <v-flex
                md12
                align-self-center
                data-aos="zoom-in-up"
                data-aos-easing="linear"
                data-aos-delay="100"
                data-aos-duration="1500"
              >
                <div
                  class="b1con"
                  data-aos="zoom-out"
                  data-aos-easing="linear"
                  data-aos-delay="100"
                  data-aos-duration="2000"
                >
                  <div class="b1"></div>
                </div>
              </v-flex>
              <div>
                <p class="text002 text-center">
                  Architecture should speak of its time and place but yearn for
                  timelessness
                  <br />
                  <span class="text009 text-center">Frank Gehry</span>
                </p>
              </div>
            </v-layout>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="3">
          <div class="text-center">
            <v-layout row wrap justify-center>
              <v-flex md12 align-self-center>
                <v-img
                  eager
                  contain
                  height="90vh"
                  src="../assets/chamika_house/_SDS3575.jpg"
                ></v-img>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="3">
          <div>
            <v-layout row wrap>
              <v-flex md10 pl-4>
                <v-img
                  eager
                  contain
                  src="../assets/chamika_house/_SDS3429.jpg"
                ></v-img>
              </v-flex>
              <v-flex md2 align-self-center>
                <p class="text002 text-right">
                  God is in the details
                  <br />
                  <span class="text009 text-right"> Mies Van Der Rohe</span>
                </p>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="3">
          <div>
            <v-img
              eager
              height="90vh"
              contain
              src="../assets/chamika_house/_SDS3650-HDR.jpg"
            ></v-img>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="3">
          <div v-if="isMobile()">
            <v-img
              eager
              contain
              src="../assets/chamika_house/_SDS3393b.jpg"
            ></v-img>
          </div>
          <div v-else>
            <v-layout row wrap justify-center>
              <v-flex md3 align-self-center>
                <p class="text002 text-left">
                  Simplicity is the ultimate sophisticattion<br />
                  <span class="text009 text-left">Leonardo Da Vinci</span>
                </p>
              </v-flex>

              <v-flex md6>
                <v-img
                  eager
                  contain
                  height="90vh"
                  src="../assets/chamika_house/_SDS3393b.jpg"
                ></v-img>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="3">
          <div v-if="isMobile()" style="height: 100vh;">
            <div style="width:99vw;height:25vh;margin:10vh"></div>

            <v-img
              eager
              contain
              src="../assets/chamika_house/_SDS2989.jpg"
            ></v-img>
          </div>
          <div v-else style="padding:5vh">
            <v-img
              eager
              contain
              height="90vh"
              src="../assets/chamika_house/_SDS2989.jpg"
            ></v-img>
          </div>
        </div>
      </section>
    </div>
  </v-container>
</template>

<script>
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.min.css";

export default {
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
  data: () => ({
    slides: [
      {
        name: "Slide name 1",
        url: "https://drive.google.com/uc?id=16p04rwVOo8E_jm26sxmYcBsGv4LWOxyb",
      },
      {
        name: "Slide name 1",
        url: "https://drive.google.com/uc?id=1zwaXIdre34_s0dzbaLOdw5Icek-Emn7f",
      },
      {
        name: "Slide name 1",
        url: "https://drive.google.com/uc?id=1pNjWuxQ3Tctwq6Vxtk-tOFPJm8PTVyS9",
      },
    ],
  }),
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");
.textBold {
  font-size: 2vh;
  /* padding-right: 10%; */
  margin-top: -5%;
  font-weight: bold;
  color: black;
}
.b1con {
  /* background-color: blueviolet; */
  background-image: url("../assets/chamika_house/_SDS3079-HDR_1.jpg");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 88vh;
}
.b1 {
  background-color: #fff;
  transform: scaleY(0);
  transform-origin: top;
  height: 100%;
  width: 100%;
  /* transition: transform 0.5s ease-in-out;
  animation: mymove 5s infinite; */
  animation: slideInFromLeft 1.5s ease-in;
}
.text001 {
  text-align: center;
  padding: 10px;
  padding-inline: 30px;
  font-size: 2vh;
  color: #11111193;
}
.text002 {
  text-align: left;
  padding: 10px;
  font-size: 2vh;
  color: #11111193;
}
.text009 {
  text-align: left;
  /* padding: 10px; */
  font-weight: bold;
  font-size: 1.6vh;
  font-family: "Josefin Sans", sans-serif;
  color: #11111193;
}
.slider-container {
  position: relative;
  text-align: center;
  color: white;
}
.slider-text {
  background-color: rgba(0, 0, 0, 0.637);
  color: white;
  font-weight: bold;
  margin-top: 10px;
}
.carousel-3d-container figure {
  margin: 0;
}
.carousel-3d-container figcaption {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  position: absolute;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
  text-align: center;
}
</style>
