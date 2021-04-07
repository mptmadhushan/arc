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
    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="2500"
    >
      <v-img eager contain src="../assets/chamika_house/_SDS2989.jpg"></v-img>
      <p class="text001">
        A Hill Country icon. Revitalised
      </p>
    </div>
    <div
      v-else
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="400"
      data-aos-duration="1500"
    >
      <div style="width:99vw;height:30vh;padding:10px"></div>
      <v-img
        eager
        style="margin-top:5vh"
        contain
        height="88vh"
        object-fit
        src="../assets/Stone_House/Stone House_DSC5504.JPG.jpg"
      ></v-img>
      <p class="text001">
        A Hill Country icon. Revitalised
      </p>
    </div>
    <div v-if="isMobile()">
      <div style="width:99vw;height:30vh;padding:10px"></div>

      <v-img
        eager
        contain
        src="../assets/Stone_House/Stone House_DSC5412.JPG.jpg"
      ></v-img>
      <p class="text001">
        Silence. Nature through the existing architectural frame.
      </p>
    </div>
    <div v-else class="text-center" style="padding:2vh">
      <div style="width:99vw;height:30vh;padding:10px"></div>

      <v-layout row wrap justify-space-around>
        <v-flex md9 pa-4 xs12 sm12 align-self-center>
          <v-img
            eager
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="400"
            data-aos-duration="1500"
            contain
            src="../assets/Stone_House/Stone House_DSC5412.JPG.jpg"
          ></v-img>
        </v-flex>
        <v-flex
          md3
          xs10
          pa-4
          sm10
          align-self-center
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="400"
          data-aos-duration="1500"
        >
          <p class="text002">
            Silence. Nature through the existing architectural frame.
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:18vh;padding:10px"></div>

    <div
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="400"
      data-aos-duration="2500"
      style="height:100vh"
      v-if="isMobile()"
    >
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
        <p class="text001">
          Art and Sculpture. a study of the proprietor's history in the rice
          industry and its many permutations through the lens of Kingsley
          Goonatilake
        </p>
      </div>
    </div>
    <div
      v-else
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="400"
      data-aos-duration="2500"
    >
      <div style="padding:15vh">
        <vue-flux
          :options="options"
          :images="images"
          :transitions="transitions"
        >
          <template v-slot:preloader>
            <flux-preloader height="40vh" />
          </template>
        </vue-flux>
        <p class="text001">
          Art and Sculpture. a study of the proprietor's history in the rice
          industry and its many permutations through the lens of Kingsley
          Goonatilake
        </p>
      </div>
    </div>
    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="400"
      data-aos-duration="1500"
    >
      <v-img
        eager
        contain
        src="../assets/Stone_House/Stone House_DSC5305.JPG.jpg"
      ></v-img>
      <p class="text001">
        Duality. A sincere collision.
      </p>
    </div>
    <div v-else class="text-center">
      <div style="width:99vw;height:11vh;padding:10px"></div>

      <v-layout row wrap justify-center pt-md-12>
        <v-flex
          md3
          pa-4
          xs10
          sm10
          align-self-center
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="400"
          data-aos-duration="2500"
        >
          <p class="text002">
            Duality. A sincere collision.
          </p>
        </v-flex>
        <v-flex md9 pa-4 xs10 sm10 align-self-center>
          <v-img
            eager
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-delay="400"
            data-aos-duration="1500"
            contain
            src="../assets/Stone_House/Stone House_DSC5305.JPG.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:30vh;padding:10px"></div>

    <div style="margin-top:5vh">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-delay="400"
        data-aos-duration="1500"
      >
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-delay="500"
          data-aos-duration="2800"
        >
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
            <p class="text001">
              Tea stained rice paper and gold leaf - Kingsley Goonatilake, Pala
              Pothupitiya and Mahen Perera encapsulating each room with their
              materiality.
            </p>
          </div>
        </div>
      </div>
      <!-- <div class="box stack-top d-none d-lg-block">
        <div class="container_l">
          <div class="sub-left"></div>
        </div>
        <div class="container_l">
          <div class="sub-right"></div>
        </div>
      </div> -->
    </div>
    <div style="width:99vw;height:25vh;padding:10px"></div>

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
        <v-flex
          md3
          xs10
          pa-4
          sm10
          align-self-center
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-delay="400"
          data-aos-duration="2500"
        >
          <p class="text002">
            Warmth; timeless elegance
          </p>
        </v-flex>
        <v-flex md8 pa-4 xs10 sm10 justify-center>
          <v-img
            eager
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-delay="400"
            data-aos-duration="1500"
            contain
            src="../assets/Stone_House/Stone House_DSC5405.JPG.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:27vh;padding:10px"></div>

    <div v-if="isMobile()">
      <v-img
        eager
        contain
        src="../assets/Stone_House/Stone House_DSC5196.JPG.jpg"
      ></v-img>
    </div>
    <div
      v-else
      data-aos="fade-up"
      data-aos-easing="linear"
      data-aos-delay="400"
      data-aos-duration="2500"
    >
      <v-img
        eager
        height="90vh"
        contain
        src="../assets/Stone_House/Stone House_DSC5196.JPG.jpg"
      ></v-img>
    </div>
    <div
      v-if="isMobile()"
      data-aos="fade-left"
      data-aos-easing="linear"
      data-aos-delay="400"
      data-aos-duration="2500"
    >
      <div style="width:99vw;height:30vh;padding:10px"></div>

      <v-img
        eager
        contain
        style="padding: 10vh"
        src="../assets/Stone_House/Stone House_DSC5074.JPG.jpg"
      ></v-img>
      <div style="width:99vw;height:30vh;padding:10px"></div>
    </div>
    <div v-else style="padding:5vh;">
      <div style="width:99vw;height:30vh;padding:10px"></div>

      <v-img
        eager
        contain
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-delay="400"
        data-aos-duration="2500"
        height="90vh"
        src="../assets/Stone_House/Stone House_DSC5074.JPG.jpg"
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
  mounted() {
    // eslint-disable-next-line no-extra-boolean-cast
    if (Boolean(this.dialog)) this.showToggle();
  },
  methods: {
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
