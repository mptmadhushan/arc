<template>
  <v-container fluid>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        persistent
        width="100vw"
        content-class="elevation-0"
        hide-overlay
        transition="fade"
      >
        <v-card color="transparent" flat content-class="elevation-0">
          <v-card-text>
            <div class="d-flex flex-row">
              <v-img
                eager
                contain
                height="10vh"
                width="20vw"
                src="../assets/logoTitle.png"
              ></v-img>
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
    <div ref="scrollSections">
      <section data-scroll-section>
        <div class="d-flex justify-space-between" style="margin-top:1vh">
          <router-link to="/projects">
            <img
              style="opacity: 0.5;margin-inline:20px"
              height="20vh"
              src="../assets/backArrow.png"
            />
          </router-link>
          <!-- <ShapesPop /> -->
        </div>
        <div>
          <div class="b1con" data-aos="zoom-out">
            <div class="b1"></div>
          </div>

          <p class="text002 text-center">
            Shades and Shadow
          </p>
        </div>
      </section>
      <div style="width:99vw;height:22vh;padding:10px"></div>
      <section data-scroll-section data-scroll-speed="2">
        <div class="text-center" style="height: 100vh">
          <v-layout row wrap justify-center pt-md-12>
            <v-flex md4 align-self-center>
              <p class="text002">
                <span class="text005">The Trellis</span><br />Brutalist harmony
                in Contemporary lines
              </p>
            </v-flex>
            <v-flex md7 justify-center>
              <v-img
                eager
                height="80vh"
                src="../assets/Chitra_Lane/_SDS3762-HDR.JPG.jpg"
              ></v-img>
            </v-flex>
          </v-layout>
        </div>
      </section>
      <div style="width:99vw;height:10vh;padding:10px"></div>
      <section data-scroll-section data-scroll-speed="2">
        <v-layout row justify-center v-if="!isMobile()" wrap>
          <v-flex md12 align-self-center>
            <div>
              <v-img
                eager
                height="90vh"
                contain
                src="../assets/Chitra_Lane/_SDS3752.JPG.jpg"
              ></v-img>
            </div>
          </v-flex>
        </v-layout>

        <v-layout v-else row wrap>
          <v-flex md12 align-self-center>
            <div>
              <v-img
                height="100%"
                contain
                eager
                src="../assets/Chitra_Lane/_SDS3752.JPG.jpg"
              ></v-img>
            </div>
          </v-flex>
        </v-layout>
      </section>
      <div style="width:99vw;height:22vh;padding:10px"></div>
      <section data-scroll-section data-scroll-speed="2">
        <div class="text-center">
          <v-layout row wrap justify-center>
            <v-flex md4 xs12 sm12 align-self-center justify-end>
              <p class="text003">
                Narrowness
              </p>
            </v-flex>
            <v-flex md7 xs12 sm12 justify-start>
              <v-img
                eager
                contain
                height="90vh"
                src="../assets/Chitra_Lane/_SDS3689.JPG.jpg"
              ></v-img>
            </v-flex>
          </v-layout>
        </div>
      </section>
      <div style="width:99vw;height:22vh;padding:10px"></div>
      <section data-scroll-section data-scroll-speed="2">
        <div style="padding-top:10vh">
          <div>
            <div>
              <carousel-3d
                :width="900"
                :height="600"
                :inverse-scaling="200"
                :space="1180"
                :perspective="0"
                :autoplay="false"
                :autoplay-timeout="3000"
                :display="3"
              >
                <slide :index="0">
                  <figure>
                    <v-img
                      eager
                      contain
                      src="../assets/Chitra_Lane/_SDS3699-HDR.JPG.jpg"
                    />
                  </figure> </slide
                ><slide :index="1">
                  <figure>
                    <v-img
                      eager
                      contain
                      src="../assets/Chitra_Lane/_SDS3725-HDR.JPG.jpg"
                    />
                  </figure> </slide
                ><slide :index="2">
                  <figure>
                    <v-img
                      eager
                      contain
                      src="../assets/Chitra_Lane/_SDS3741-HDR.JPG.jpg"
                    />
                  </figure>
                </slide>
              </carousel-3d>
              <div style="margin-inline: 20%">
                <p class="text002 text-center">
                  Light and space. A pleasing neutrality
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </v-container>
</template>

<script>
import locomotiveScroll from "locomotive-scroll";

export default {
  components: {},
  mounted() {
    // eslint-disable-next-line no-extra-boolean-cast
    if (Boolean(this.dialog)) this.showToggle();
    const _self = this;
    this.$nextTick(function() {
      _self.initLocoScroll();
    });
  },
  methods: {
    showToggle() {
      setTimeout(() => {
        this.dialog = false;
      }, 700);
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
  data: () => ({
    dialog: true,
    fab: false,
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

.text005 {
  text-align: left;
  font-weight: bold;
  font-size: 2.3vh;
  font-family: "Josefin Sans", sans-serif;
  color: #11111193;
}
ul {
  background-color: #eee;
  transform: scaleY(0);
  transform-origin: top;
  transition: transform 0.3s ease-in-out;
}
p:hover ~ ul {
  transform: scaleY(1);
}

.b1con {
  /* background-color: blueviolet; */
  background-image: url("../assets/Chitra_Lane/_SDS3756.JPG.jpg");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 85vh;
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
@keyframes slideInFromLeft {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
.b1Main:hover .b1 {
  /* transform: scaleY(0); */
}
.container {
  width: 100vw;
  height: 1000px;
  position: relative;
  margin: 0;
}
.container_mob {
  /* width: 100vw; */
  height: 100vw;
  position: relative;
  margin: 0;
}
.box2 {
  margin-top: 100px;
  width: 100vw;

  /* height: 900px; */
  position: absolute;
  top: 0;
  left: 0;
  /* opacity: 0.8; for demo purpose  */
}
.stack-top {
  z-index: 9;
  margin: 0; /* for demo purpose  */
}
.sub-left {
  float: left;
  height: 100vh;
  width: 29%;
  align-items: center;
  opacity: 1;
  transition: 0.6s ease;
  background-image: linear-gradient(to right, red);
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 1300ms;
}
.sub-right {
  float: right;
  height: 100vh;
  width: 29%;
  opacity: 1;
  transition: 0.6s ease;
  background-image: linear-gradient(to left, red);
  -webkit-transition-property: opacity;
  -webkit-transition-duration: 3000ms;
}
.text001 {
  text-align: center;
  padding: 10px;
  font-size: 2vh;
  color: #11111193;
}
.text002 {
  text-align: justify;
  padding: 10px;
  font-size: 2vh;
  color: #11111193;
}
.text003 {
  text-align: justify;
  padding: 10px;
  font-size: 2vh;
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
