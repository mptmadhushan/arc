<template>
  <v-container fluid
    ><div class="text-center">
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
    <div ref="scrollSections" class="hello">
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="3">
          <div class="d-flex justify-space-between" style="margin-top:-5vh">
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
            <v-layout row wrap justify-center pa-3>
              <v-flex
                md12
                xs12
                sm12
                align-self-center
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-easing="linear"
                data-aos-delay="200"
              >
                <div
                  class="b1con"
                  data-aos="zoom-out"
                  data-aos-duration="2000"
                  data-aos-easing="linear"
                  data-aos-delay="200"
                >
                  <div class="b1"></div>
                </div>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="3">
          <div v-if="isMobile()">
            <v-img
              eager
              contain
              src="../assets/chamika_house/_SDS2989.jpg"
            ></v-img>
            <p class="text002 text-center">
              Revitalization of an icon.
            </p>
          </div>
          <div v-else>
            <v-img
              eager
              style="margin-top:5vh"
              contain
              height="88vh"
              object-fit
              src="../assets/Stone_House/Stone House_DSC5504.JPG.jpg"
            ></v-img>
            <p class="text002 text-center">
              Revitalization of an icon.
            </p>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="3">
          <div v-if="isMobile()">
            <v-img
              eager
              contain
              src="../assets/Stone_House/Stone House_DSC5412.JPG.jpg"
            ></v-img>
            <p class="text002 text-center">
              <span class="text007 text-center">Silence</span>

              Nature through the existing architectural frame.
            </p>
          </div>
          <div v-else class="text-center" style="padding:2vh">
            <v-layout row wrap justify-space-around>
              <v-flex md9 pa-12 xs12 sm12 align-self-center>
                <v-img
                  eager
                  contain
                  src="../assets/Stone_House/Stone House_DSC5412.JPG.jpg"
                ></v-img>
              </v-flex>
              <v-flex md3 xs10 pa-4 sm10 align-self-center>
                <p class="text002 text-center">
                  <span class="text007 text-center">Silence</span><br />
                  Nature through the existing architectural frame.
                </p>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="3">
          <div style="height:100vh" v-if="isMobile()">
            <div>
              <vue-flux
                :options="options"
                :images="images"
                :transitions="transitions"
              >
                <template v-slot:preloader>
                  <flux-preloader height="40vh" />
                </template>
              </vue-flux>
              <p class="text002 text-center">
                Art and Sculpture. a study of the proprietor's history in the
                rice industry and its many permutations through the lens of
                Kingsley Goonatilake
              </p>
            </div>
          </div>
          <div v-else>
            <div style="padding-inline:25vh">
              <vue-flux
                :options="options"
                :images="images"
                :transitions="transitions"
              >
                <template v-slot:preloader>
                  <flux-preloader height="40vh" />
                </template>
              </vue-flux>
              <p class="text002 text-center">
                Art and Sculpture. a study of the proprietor's history in the
                rice industry and its many permutations through the lens of
                Kingsley Goonatilake
              </p>
            </div>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="3">
          <div v-if="isMobile()">
            <v-img
              eager
              contain
              src="../assets/Stone_House/Stone House_DSC5305.JPG.jpg"
            ></v-img>
            <p class="text002 text-center">
              <span class="text007"> Duality</span><br />
              A sincere collision.
            </p>
          </div>
          <div v-else class="text-center">
            <div style="width:99vw;height:11vh;padding:10px"></div>

            <v-layout row wrap justify-center pt-md-12>
              <v-flex md3 pa-4 xs10 sm10 align-self-center>
                <p class="text002 text-center">
                  <span class="text007"> Duality</span><br />
                  A sincere collision.
                </p>
              </v-flex>
              <v-flex md9 pa-12 xs10 sm10 align-self-center>
                <v-img
                  eager
                  contain
                  src="../assets/Stone_House/Stone House_DSC5305.JPG.jpg"
                ></v-img>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="3">
          <div style="margin-top:5vh">
            <div>
              <div>
                <carousel-3d
                  :width="900"
                  :height="600"
                  :inverse-scaling="200"
                  :space="1300"
                  :perspective="0"
                  :autoplay="false"
                  :autoplay-timeout="3000"
                  :display="3"
                >
                  <slide :index="0">
                    <figure>
                      <v-img
                        eager
                        src="../assets/Stone_House/Stone House_DSC5402.JPG.jpg"
                      />
                    </figure> </slide
                  ><slide :index="1">
                    <figure>
                      <v-img
                        eager
                        src="../assets/Stone_House/Stone House_DSC5086.JPG.jpg"
                      />
                    </figure>
                  </slide>
                  <slide :index="2">
                    <figure>
                      <v-img
                        eager
                        src="../assets/Stone_House/Stone House_DSC5224.JPG.jpg"
                      />
                    </figure>
                  </slide>
                </carousel-3d>
                <div style="margin-inline: 20%">
                  <p class="text002 text-center">
                    Tea stained rice paper and gold leaf <br />Thisath
                    Thoradeniya and Pala Pothupitiya encapsulating each room<br />
                    with their materiality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="3">
          <div
            v-if="isMobile()"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="400"
            data-aos-duration="2500"
          >
            <v-img
              eager
              contain
              src="../assets/Stone_House/Stone House_DSC5405.JPG.jpg"
            ></v-img>
            <p class="text001">
              Warmth; timeless elegance
            </p>
          </div>
          <div v-else class="text-center" style="height: 100vh;">
            <v-layout row wrap justify-center pt-md-12>
              <v-flex md3 xs10 pa-4 sm10 align-self-start>
                <p class="text002" style="margin-top:5vh">
                  Warmth; timeless elegance
                </p>
              </v-flex>
              <v-flex md8 pa-4 xs10 sm10 justify-center>
                <v-img
                  eager
                  contain
                  src="../assets/Stone_House/Stone House_DSC5405.JPG.jpg"
                ></v-img>
              </v-flex>
            </v-layout>
          </div>
        </div>
      </section>
      <section data-scroll-section>
        <div data-scroll data-scroll-speed="3">
          <div v-if="isMobile()">
            <v-img
              eager
              contain
              src="../assets/Stone_House/Stone House_DSC5196.JPG.jpg"
            ></v-img>
          </div>
          <div v-else>
            <v-img
              eager
              height="90vh"
              contain
              src="../assets/Stone_House/Stone House_DSC5196.JPG.jpg"
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
              style="padding: 10vh"
              src="../assets/Stone_House/Stone House_DSC5074.JPG.jpg"
            ></v-img>
            <div style="width:99vw;height:30vh;padding:10px"></div>
          </div>
          <div v-else style="padding:5vh;">
            <v-img
              eager
              contain
              height="90vh"
              src="../assets/Stone_House/Stone House_DSC5074.JPG.jpg"
            ></v-img>
          </div>
        </div>
      </section>
    </div>
  </v-container>
</template>

<script>
import { VueFlux, FluxPreloader } from "vue-flux";
import locomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.min.css";

export default {
  components: {
    VueFlux,
    FluxPreloader,
  },
  mounted() {
    // eslint-disable-next-line no-extra-boolean-cast
    if (Boolean(this.dialog)) this.showToggle();
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
    showToggle() {
      setTimeout(() => {
        this.dialog = false;
      }, 700);
    },
  },
  data: () => ({
    dialog: true,
    options: {
      allowFullscreen: false,
      allowToSkipTransition: true,
      autohideTime: 10000,
      autoplay: true,
      bindKeys: false,
      delay: 3000,
      enableGestures: false,
      infinite: true,
      lazyLoad: true,
      height: "10vh",
      lazyLoadAfter: 3,
    },
    images: [
      require("../assets/Stone_House/sldie2.jpg"),
      require("../assets/Stone_House/slide1.jpg"),
    ],
    transitions: ["fade"],
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

.text007 {
  text-align: left;
  font-weight: bold;
  font-size: 2.3vh;
  font-family: "Josefin Sans", sans-serif;
  color: #11111193;
}
.textBold {
  font-family: "Josefin Sans", sans-serif;
  text-align: left;
  font-size: 2vh;
  /* padding-right: 10%; */
  padding: 10px;
  font-weight: bold;
  color: grey;
}
.b1con {
  /* background-color: blueviolet; */
  background-image: url("../assets/Stone_House/Stone House_DSC5533.JPG.jpg");
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
@keyframes slideInFromLeft {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
.text001 {
  text-align: center;
  padding: 10px;
  font-size: 2vh;
  color: #11111193;
}
.text002 {
  text-align: left;
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
