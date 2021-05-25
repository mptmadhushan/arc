<template>
  <v-container fluid>
    <div ref="scrollSections" class="hello">
      <section data-scroll-section>
        <div class="d-flex justify-space-between" style="margin-top:-4vh">
          <router-link to="/projects">
            <img
              style="opacity: 0.5;margin-inline:20px"
              height="20vh"
              src="../assets/backArrow.png"
            />
          </router-link>
        </div>
        <div class="text-center">
          <v-layout row wrap justify-center pa-3>
            <v-flex md12 align-self-center>
              <div class="b1con" data-scroll-speed="2" data-scroll>
                <div class="b1"></div>
              </div>
            </v-flex>
          </v-layout>
        </div>
      </section>
      <section data-scroll-section>
        <div v-if="isMobile()" style="margin-top: 20vh">
          <v-img eager contain src="../assets/hanthana/2.jpeg"></v-img>
          <p class="newText2 text-center">
            <span class="text005"> Prelude </span><br />
            A journey forthcoming
          </p>
        </div>
        <div v-else class="text-center">
          <div style="width:99vw;height:20vh;padding:10px"></div>
          <v-layout row wrap justify-space-around style="height:100vh">
            <v-flex md4 align-self-center>
              <p
                class="newText2 text-end"
                data-scroll-speed="-1"
                data-scroll
                data-scroll-direction="horizontal"
              >
                <span class="text005"> Prelude </span>
                <br />A journey forthcoming
              </p>
            </v-flex>
            <v-flex md7 justify-center>
              <v-img
                data-scroll-speed="1"
                data-scroll
                data-scroll-direction="horizontal"
                eager
                contain
                height="85vh"
                src="../assets/hanthana/2.jpeg"
              ></v-img>
            </v-flex>
          </v-layout>
        </div>
      </section>
      <section data-scroll-section>
        <div v-if="isMobile()" style="margin-top: 30vh">
          <v-img eager contain src="../assets/hanthana/3.jpeg"></v-img>
          <p class="newText2 text-center">
            Viridescent Charm
          </p>
        </div>
        <div v-else>
          <div style="width:99vw;height:20vh;padding:10px"></div>
          <v-img
            data-scroll-speed="2"
            data-scroll
            eager
            height="85vh"
            contain
            src="../assets/hanthana/3.jpeg"
          ></v-img>
          <p class="newText2 text-center" data-scroll-speed="3" data-scroll>
            Viridescent Charm
          </p>
        </div>
      </section>

      <section data-scroll-section>
        <div v-if="isMobile()" style="margin-top: 30vh">
          <v-img eager contain src="../assets/hanthana/4.jpeg"></v-img>
        </div>
        <div v-else>
          <div style="width:99vw;height: 10vh;padding:10px"></div>

          <v-img
            data-scroll-speed="3"
            data-scroll
            eager
            height="90vh"
            contain
            src="../assets/hanthana/4.jpeg"
          ></v-img>
        </div>
      </section>

      <section data-scroll-section>
        <div v-if="isMobile()" style="margin-top: 10vh">
          <v-img eager contain src="../assets/hanthana/5.png"></v-img>
          <p class="newText2 text-center">
            <span class="text005">Peaceful Interdependence</span><br />
            A contemplative mountain setting
          </p>
        </div>
        <div v-else class="text-center">
          <v-layout row wrap justify-space-around style="height:100vh">
            <v-flex md3 pa-4 align-self-center>
              <p
                class="newText2 text-center"
                data-scroll-speed="-3"
                data-scroll-direction="horizontal"
                data-scroll
              >
                <span class="text005">Peaceful Interdependence</span><br />
                A contemplative mountain setting
              </p>
            </v-flex>
            <v-flex
              md8
              pa-4
              align-self-center
              data-scroll-speed="3"
              data-scroll-direction="horizontal"
              data-scroll
            >
              <v-img eager contain src="../assets/hanthana/5.png"></v-img>
            </v-flex>
          </v-layout>
        </div>
      </section>

      <section data-scroll-section>
        <div v-if="isMobile()">
          <div style="width:99vw;height:35vh;padding:10px"></div>
          <div style="width:99vw;height:35vh;padding:10px"></div>
          <vue-flux
            :options="options"
            :images="images"
            :transitions="transitions"
          >
            <template v-slot:preloader>
              <flux-preloader height="40vh" />
            </template>
          </vue-flux>
        </div>
        <div v-else style="padding:25vh" data-scroll-speed="-3" data-scroll>
          <div style="width:99vw;height:10vh;padding:10px"></div>
          <vue-flux
            :options="options"
            :images="images"
            :transitions="transitions"
          >
            <template v-slot:preloader>
              <flux-preloader height="40vh" />
            </template>
          </vue-flux>
        </div>
      </section>

      <section data-scroll-section>
        <div v-if="isMobile()" style="margin-top: 40vh">
          <v-img eager contain src="../assets/hanthana/6.jpeg"></v-img>
        </div>
        <div v-else>
          <!-- <div style="width:99vw;height:25vh;padding:10px"></div> -->
          <v-img
            data-scroll-speed="2"
            data-scroll
            eager
            style="margin-top: 20vh"
            contain
            height="90vh"
            src="../assets/hanthana/6.jpeg"
          ></v-img>
        </div>
      </section>

      <section data-scroll-section>
        <div v-if="isMobile()" style="margin-top: 10vh">
          <v-img eager contain src="../assets/hanthana/7.jpeg"></v-img>
          <p class="newText2 text-center">
            Curated experience of Art and Artifact
          </p>
        </div>
        <div v-else>
          <v-img
            eager
            height="85vh"
            contain
            data-scroll-speed="2"
            data-scroll
            src="../assets/hanthana/7.jpeg"
          ></v-img>
          <p class="newText2 text-center" data-scroll-speed="3" data-scroll>
            Curated experience of Art and Artifact
          </p>
        </div>
      </section>

      <section data-scroll-section>
        <div>
          <div style="margin: 1px">
            <div data-scroll-speed="4" data-scroll>
              <carousel-3d
                :width="900"
                :height="600"
                :inverse-scaling="200"
                :space="1300"
                :autoplay="false"
                :perspective="0"
                :autoplay-timeout="3000"
                :display="3"
              >
                <slide :index="0">
                  <figure>
                    <v-img eager src="../assets/hanthana/slide.jpeg" />
                  </figure> </slide
                ><slide :index="1">
                  <figure>
                    <v-img
                      eager
                      src="../assets/hanthana/_SDS1957.JPG (1).jpeg"
                    />
                  </figure> </slide
                ><slide :index="2">
                  <figure>
                    <v-img eager src="../assets/hanthana/_SDS1947.JPG.jpeg" />
                  </figure>
                </slide>
              </carousel-3d>
              <div style="margin-inline: 20%">
                <p
                  class="newText2 text-center"
                  data-scroll-speed="1"
                  data-scroll
                >
                  Pleasure in Interaction. A human space
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-scroll-section>
        <div>
          <v-img
            eager
            contain
            data-scroll-speed="2"
            data-scroll
            height="85vh"
            src="../assets/hanthana/slide2.jpeg"
          ></v-img>
          <p
            class="newText2 text-center"
            style="padding-top:2vw"
            data-scroll-speed="2"
            data-scroll
          >
            Bandu Manamperi's take on the surrounding vista of mountains from
            Hanthana itself, creating a<br />
            contemporary stage for his work within the context of a dramatic
            lounge to wind down after a journey
          </p>
        </div>
      </section>

      <section data-scroll-section>
        <div>
          <v-img
            data-scroll-speed="1"
            data-scroll
            eager
            style="margin-top:10vh"
            height="85vh"
            contain
            src="../assets/hanthana/8.jpeg"
          ></v-img>
        </div>
      </section>
      <section data-scroll-section>
        <div class="text-center" style="margin-top:10vh">
          <v-layout row wrap justify-center>
            <v-flex md5 align-self-center>
              <v-img
                eager
                data-scroll-speed="-1"
                data-scroll
                data-scroll-direction="horizontal"
                height="85vh"
                contain
                src="../assets/hanthana/9.jpeg"
              ></v-img>
            </v-flex>
            <v-flex md4 align-self-center>
              <p
                class="newText2 text-center"
                data-scroll-speed="1"
                data-scroll
                data-scroll-direction="horizontal"
              >
                <span class="text005"> Spare. Sumptuous. Seductive</span> <br />
                A deep minimalism through a light-hearted setting
              </p>
            </v-flex>
          </v-layout>
        </div>
      </section>

      <section data-scroll-section>
        <div data-scroll-speed="2" data-scroll style="margin-top:10vh">
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
                <v-img eager src="../assets/hanthana/slide3.jpeg" />
              </figure> </slide
            ><slide :index="1">
              <figure>
                <v-img eager src="../assets/hanthana/sln.jpeg" />
              </figure> </slide
            ><slide :index="2">
              <figure>
                <v-img eager src="../assets/hanthana/sln2.jpeg" />
              </figure> </slide
            ><slide :index="3">
              <figure>
                <v-img eager src="../assets/hanthana/slide7.jpg" />
              </figure>
            </slide>
          </carousel-3d>
        </div>
      </section>

      <section data-scroll-section>
        <div>
          <v-img
            eager
            data-scroll-speed="2"
            data-scroll
            height="90vh"
            contain
            src="../assets/hanthana/_SDS1888.JPG.jpeg"
          ></v-img>
        </div>
      </section>
      <section data-scroll-section>
        <div>
          <v-img
            data-scroll-speed="2"
            data-scroll
            eager
            height="90vh"
            contain
            src="../assets/hanthana/slide6.jpg"
          ></v-img>
          <p class="newText2 text-center" data-scroll-speed="2" data-scroll>
            Timeless Materiality. Gentle contemporary with textured warmth
          </p>
        </div>
      </section>
      <section data-scroll-section>
        <div v-if="isMobile()" style="margin-top:-20vh;">
          <v-img
            eager
            height="90vh"
            contain
            src="../assets/hanthana/_SDS2136.JPG.jpeg"
          ></v-img>
        </div>
        <div style="margin-top:10vh;" v-else>
          <v-img
            eager
            height="85vh"
            data-scroll-speed="2"
            data-scroll
            contain
            style="margin-left: 5vw;margin-right: 5vw"
            src="../assets/hanthana/_SDS2136.JPG.jpeg"
          ></v-img>
        </div>
      </section>
      <section data-scroll-section>
        <div v-if="isMobile()" style="margin-top:-10vh">
          <vue-flux
            :options="options"
            :images="images2"
            :transitions="transitions"
          >
            <template v-slot:preloader>
              <flux-preloader height="40vh" />
            </template>
          </vue-flux>
          <p class="newText2 text-center">
            Romantic dissolution between interior and exterior
          </p>
          <div style="width:99vw;height:20vh;padding:10px"></div>
        </div>

        <div v-else style="padding:25vh" data-scroll-speed="2" data-scroll>
          <vue-flux
            :options="options"
            :images="images2"
            :transitions="transitions"
          >
            <template v-slot:preloader>
              <flux-preloader height="40vh" />
            </template>
          </vue-flux>
          <p class="newText2 text-center">
            Romantic dissolution between interior and exterior
          </p>
        </div>
        <div style="padding-bottom:4vh">
          <v-img
            data-scroll-speed="2"
            data-scroll
            eager
            height="92vh"
            contain
            src="../assets/hanthana/_SDS2253.png"
          ></v-img>
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
  data: () => ({
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
      lazyLoadAfter: 3,
    },
    images: [
      require("../assets/hanthana/fade1.jpeg"),
      require("../assets/hanthana/fade2.jpeg"),
    ],
    images2: [
      require("../assets/hanthana/faden2.jpeg"),
      require("../assets/hanthana/faden3.jpg"),
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

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap");

.text005 {
  text-align: left;
  font-weight: bold;
  font-size: 2.3vh;
  font-family: "Josefin Sans", sans-serif;
  color: #11111193;
}
.b1con {
  /* background-color: blueviolet; */
  background-image: url("../assets/hanthana/1st.jpeg");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 90vh;
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
.newText2 text-center {
  text-align: center;
  padding: 10px;
  font-weight: bold;
  font-size: 2vh;
  color: #11111193;
}
.text002 {
  text-align: left;
  padding: 10px;
  font-size: 2vh;
  font-weight: bold;
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
.container {
  width: 100vw;
  height: 900px;
  position: relative;
  margin: 0;
}
.box {
  width: 100vw;
  height: 900px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8; /* for demo purpose  */
}
</style>
