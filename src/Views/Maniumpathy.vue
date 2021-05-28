<template>
  <v-container fluid>
    <div class="d-flex justify-space-between mb-6" style="margin-top:1vh">
      <router-link to="/projects">
        <img
          style="opacity: 0.5;margin-inline:20px;"
          height="20vh"
          src="../assets/backArrow.png"
        />
      </router-link>
      <!-- <ShapesPop /> -->
    </div>
    <div class="text-center">
      <v-layout row wrap justify-center pa-3 style="height:90vh">
        <v-flex
          md12
          align-self-center
          data-aos="fade-up"
          data-aos-delay="10"
          data-aos-duration="1500"
        >
          <div
            class="b1con"
            data-aos="zoom-out"
            data-aos-delay="100"
            data-aos-duration="2000"
          >
            <div class="b1"></div>
          </div>

          <p class="newText2 text-center">
            Universal Elevation
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:30vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="2400">
      <v-img
        eager
        height="85vh"
        contain
        style="margin-bottom:5vh"
        src="../assets/Maniumpathy/SDS2436.png"
      ></v-img>
    </div>

    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-duration="2500"
    >
      <div v-if="isMobile()" style="width:99vw;height:35vh;padding:10px"></div>

      <v-img
        eager
        contain
        src="../assets/Maniumpathy/_SDS2725.JPG.jpeg"
      ></v-img>
    </div>
    <div v-else data-aos="fade-up" data-aos-delay="10" data-aos-duration="2000">
      <div style="width:99vw;height:30vh;padding:10px"></div>

      <v-img
        eager
        contain
        height="90vh"
        src="../assets/Maniumpathy/_SDS2725.JPG.jpeg"
      ></v-img>
    </div>
    <div
      v-if="isMobile()"
      style="margin-top: 10vh"
      data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="2500"
    >
      <div v-if="isMobile()" style="width:99vw;height:35vh;padding:10px"></div>

      <v-img eager contain src="../assets/Maniumpathy/_SDS2472.png"></v-img>
      <p class="newText2 text-right">
        <span class="text007">Understated Refinement </span><br />
        Singularity relative to its surroundings.
      </p>
    </div>
    <div v-else class="text-center">
      <div style="width:99vw;height:28vh;padding:10px"></div>

      <v-layout row wrap justify-space-around style="margin-top:5vh">
        <v-flex
          md9
          pa-12
          align-self-center
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="2500"
        >
          <v-img eager contain src="../assets/Maniumpathy/_SDS2472.png"></v-img>
        </v-flex>
        <v-flex
          md3
          pa-4
          align-self-center
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="2500"
        >
          <p class="newText2 text-right">
            <span class="text007">Understated Refinement </span><br />
            Singularity relative to its surroundings.
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:15vh;padding:10px"></div>

    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-delay="10"
      data-aos-duration="2500"
    >
      <div v-if="isMobile()" style="width:99vw;height:35vh;padding:10px"></div>

      <vue-flux :options="options" :images="images" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
      <p class="newText2 text-center">
        Craftsmanship. Material Sensitivity
      </p>
    </div>

    <div
      v-else
      data-aos="fade-in"
      data-aos-easing="linear"
      data-aos-delay="400"
      data-aos-duration="2500"
      style="padding:1vh"
    >
      <div style="margin:11vh">
        <vue-flux
          :options="options"
          :images="images"
          :transitions="transitions"
        >
        </vue-flux>
        <p class="newText2 text-center">
          Craftsmanship. Material Sensitivity
        </p>
      </div>
    </div>
    <div
      v-if="isMobile()"
      style="margin-top: 10vh"
      data-aos="fade-left"
      data-aos-delay="300"
      data-aos-duration="2500"
    >
      <div v-if="isMobile()" style="width:99vw;height:35vh;padding:10px"></div>

      <v-img
        eager
        contain
        src="../assets/Maniumpathy/_SDS2554.JPG.jpeg"
      ></v-img>
      <p class="newText2 text-center">
        Subtle Interiors of Charm and Softness
      </p>
    </div>
    <div v-else>
      <div style="width:99vw;height:16vh;padding:10px"></div>
      <v-layout row wrap justify-center style="margin-bottom: 10vh">
        <v-flex
          md3
          align-self-end
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="2500"
        >
          <p class="newText2 text-left">
            Subtle Interiors of Charm and Softness
          </p>
        </v-flex>
        <v-flex
          md4
          align-self-center
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="2500"
        >
          <v-img
            eager
            height="85vh"
            contain
            src="../assets/Maniumpathy/_SDS2554.JPG.jpeg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:21vh;padding:10px"></div>
    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="2500">
      <div>
        <div>
          <carousel-3d
            :width="900"
            :height="600"
            :inverse-scaling="200"
            :space="1300"
            :autoplay="false"
            :autoplay-timeout="1500"
            :display="3"
            :perspective="0"
          >
            <slide :index="0">
              <figure>
                <v-img eager src="../assets/Maniumpathy/_SDS2576.JPG.jpeg" />
              </figure> </slide
            ><slide :index="1">
              <figure>
                <v-img eager src="../assets/Maniumpathy/_SDS2515.JPG.jpeg" />
              </figure> </slide
            ><slide :index="2">
              <figure>
                <v-img eager src="../assets/Maniumpathy/_SDS2583.JPG.jpeg" />
              </figure>
            </slide>
          </carousel-3d>
          <div style="margin-inline: 20%">
            <!-- <p class="newText2 text-center">
              Indo-portugese and contemporary. Thoughtfully considered and
              diligently placed
            </p> -->
          </div>
        </div>
      </div>
    </div>
    <div style="width:99vw;height:31vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="2500">
      <v-img
        eager
        contain
        height="85vh"
        src="../assets/Maniumpathy/_SDS2577.png"
      ></v-img>
      <p class="newText2 text-center">
        <span class="text007"> Indo-portugese and contemporary.</span><br />
        Thoughtfully considered and diligently placed
      </p>
    </div>
    <div style="width:99vw;height:31vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="2500">
      <v-img
        eager
        height="90vh"
        contain
        src="../assets/Maniumpathy/_SDS2497-2.JPG.jpeg"
      ></v-img>
    </div>
    <div
      v-if="isMobile()"
      style="margin-top: 10vh"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="2500"
    >
      <v-img eager contain src="../assets/Maniumpathy/_SDS2557.png"></v-img>
      <div style="margin-top: 10vh">
        <v-img eager contain src="../assets/Maniumpathy/_SDS2545.jpeg"></v-img>
      </div>
    </div>
    <div v-else class="text-center">
      <div style="width:99vw;height:25vh;padding:10px"></div>

      <v-layout row wrap justify-space-around style="margin-top: 10vh">
        <v-flex
          md6
          xs10
          sm10
          align-self-center
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="2500"
        >
          <v-img
            eager
            height="80vh"
            contain
            src="../assets/Maniumpathy/_SDS2557.png"
          ></v-img>
        </v-flex>
        <v-flex
          md5
          xs12
          sm12
          align-self-center
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="2500"
        >
          <v-img
            eager
            height="80vh"
            width="70%"
            src="../assets/Maniumpathy/_SDS2545.jpeg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:12vh;padding:10px"></div>

    <div style="width:99vw;height:10vh;padding:10px"></div>
    <div
      v-if="isMobile()"
      data-aos-easing="linear"
      data-aos-delay="400"
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <div v-if="isMobile()" style="width:99vw;height:10vh;padding:10px"></div>

      <vue-flux :options="options" :images="images4" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
      <p class="newText2 text-center">
        Unparalleled Emotion. Atmosphere. Gentle Contemporary
      </p>
    </div>
    <div
      v-else
      style="margin:24vh"
      data-aos-easing="linear"
      data-aos-delay="300"
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <vue-flux :options="options" :images="images4" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
      <p class="newText2 text-center">
        Unparalleled Emotion. Atmosphere. Gentle Contemporary
      </p>
    </div>

    <div style="width:99vw;height:19vh;padding:10px"></div>

    <div data-aos="fade-down" data-aos-delay="300" data-aos-duration="2500">
      <v-img
        eager
        height="86vh"
        style="margin-left: 5vw;margin-right: 5vw"
        contain
        src="../assets/Maniumpathy/_SDS2607.png"
      ></v-img>
    </div>

    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="2500"
    >
      <div v-if="isMobile()" style="width:99vw;height:30vh;padding:10px"></div>
      <v-img eager contain src="../assets/Maniumpathy/_SDS2638.png"></v-img>
      <p class="newText2 text-center">
        Modern convenience through a material lens
      </p>
    </div>
    <div v-else class="text-center">
      <div style="width:99vw;height:28vh;padding:10px"></div>

      <v-layout
        row
        style="margin-top: 5vh"
        wrap
        justify-center
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="2500"
      >
        <v-flex md3 pa-4 align-self-end>
          <p class="newText2 text-center">
            Modern convenience through a material lens
          </p>
        </v-flex>
        <v-flex md8 pa-4 justify-center>
          <v-img eager contain src="../assets/Maniumpathy/_SDS2638.png"></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:29vh;padding:10px"></div>
    <div
      v-if="isMobile()"
      data-aos-easing="linear"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="2500"
    >
      <v-img
        eager
        contain
        src="../assets/Maniumpathy/_SDS2649-2.JPG.jpeg"
      ></v-img>
      <!-- <p class="newText2 text-center">
        Former sewing tables that were given new life within this contemporary
        outdoor dining experience
      </p> -->
    </div>
    <div
      v-else
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-easing="linear"
      data-aos-duration="2500"
    >
      <v-img
        eager
        height="80vh"
        style="margin-top: 5vh"
        contain
        src="../assets/Maniumpathy/_SDS2649-2.JPG.jpeg"
      ></v-img>
      <!-- <p class="newText2 text-center">
        Former sewing tables that were given new life within this contemporary
        outdoor dining experience
      </p> -->
    </div>

    <div style="width:99vw;height:19vh;padding:10px"></div>

    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-easing="linear"
      data-aos-duration="2500"
    >
      <div v-if="isMobile()" style="width:99vw;height:20vh;padding:10px"></div>

      <vue-flux :options="options" :images="images2" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
      <p class="newText2 text-center">
        <!-- Proportionate Doric pillars to supplement and frame this restful and
        serene outdoor pavilion -->
      </p>
    </div>
    <div
      v-else
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="2500"
      style="margin:22vh"
    >
      <vue-flux :options="options" :images="images2" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
      <p class="newText2 text-center">
        <!-- Proportionate Doric pillars to supplement and frame this restful and
        serene outdoor pavilion -->
      </p>
    </div>
    <div style="width:99vw;height:22vh;padding:10px"></div>

    <div class="text-center" pa-12>
      <div v-if="isMobile()" style="width:99vw;height:10vh;padding:10px"></div>

      <v-layout row wrap justify-center>
        <v-flex
          md6
          align-self-center
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="2500"
        >
          <v-img
            eager
            height="85vh"
            contain
            src="../assets/Maniumpathy/_SDS2563.png"
          ></v-img>
        </v-flex>
        <v-flex
          md5
          align-self-center
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="2500"
        >
          <p class="newText2 text-center">
            <span class="text007">Masterclass in White </span><br />
            Providing contrast and variation with a nod to the history of the
            building.
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:31vh;padding:10px"></div>

    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-easing="linear"
      data-aos-duration="2500"
    >
      <v-img eager contain src="../assets/Maniumpathy/_SDS2457-2.png"></v-img>
    </div>
    <div
      v-else
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="2500"
      data-aos-easing="linear"
      style="padding:5vh"
    >
      <v-img
        eager
        height="90vh"
        contain
        src="../assets/Maniumpathy/_SDS2457-2.png"
      ></v-img>
    </div>
  </v-container>
</template>

<script>
import { VueFlux, FluxPreloader } from "vue-flux";
export default {
  components: {
    VueFlux,
    FluxPreloader,
  },
  data: () => ({
    options: {
      allowFullscreen: true,
      allowToSkipTransition: true,
      autohideTime: 10000,
      autoplay: true,
      bindKeys: false,
      delay: 2000,
      enableGestures: false,
      infinite: true,
      lazyLoad: true,
      lazyLoadAfter: 3,
    },
    images: [
      require("../assets/Maniumpathy/ffaade.png"),
      require("../assets/Maniumpathy/_SDS2416.png"),
    ],
    images2: [
      require("../assets/Maniumpathy/_SDS2704.JPG.jpeg"),
      require("../assets/Maniumpathy/fade2.jpeg"),
    ],
    images3: [
      require("../assets/Maniumpathy/_SDS2529.JPG 13-06-02-327.png"),
      require("../assets/Maniumpathy/fade2.jpeg"),
    ],
    images4: [
      require("../assets/Maniumpathy/slide-new.png"),
      require("../assets/Maniumpathy/new-slide1.jpeg"),
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
.b1con {
  /* background-color: blueviolet; */
  background-image: url("../assets/Maniumpathy/1.png");
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
.newText2 {
  font-family: "Josefin Sans", sans-serif;

  text-align: center;
  padding: 10px;
  font-size: 2vh;
  color: #11111193;
}
.newText2 text-center {
  text-align: left;
  padding: 10px;
  font-weight: bold;
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
