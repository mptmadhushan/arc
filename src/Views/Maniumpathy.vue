<template>
  <v-container fluid>
    <div class="text-center">
      <v-layout row wrap justify-center pa-3 style="height:100vh">
        <v-flex md10 align-self-center>
          <v-img
            contain
            height="80vh"
            src="../assets/Maniumpathy/1.png"
          ></v-img>
          <p class="text001">
            A literal elevation of a bastion of our colonial past.
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="margin-top: 10vh;height: 100vh">
      <v-img
        height="80vh"
        contain
        style="margin-left: 5vw;margin-right: 5vw"
        src="../assets/Maniumpathy/SDS2436.png"
      ></v-img>
    </div>
    <div>
      <v-img
        contain
        height="80vh"
        src="../assets/Maniumpathy/_SDS2725.JPG.jpeg"
      ></v-img>
    </div>
    <div class="text-center">
      <v-layout row wrap justify-space-around style="height: 100vh">
        <v-flex md7 align-self-center>
          <v-img
            contain
            height="80vh"
            src="../assets/Maniumpathy/_SDS2472.png"
          ></v-img>
        </v-flex>
        <v-flex md4 align-self-center>
          <p class="text002">
            A strong tonality within the room are balanced by distinctive
            antiques, including chandeliers. mirrors and carefully considered
            details create a vibrant and welcoming atmosphere
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="height: 100vh">
      <vue-flux :options="options" :images="images" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
      <p class="text001">
        Extending the physical structure to shed a spotlight on the large dining
        space, styled with beautiful Rajastani chandeliers and exquisite table
        service
      </p>
    </div>
    <div>
      <v-layout row wrap justify-space-around pt-md-12 style="height: 100vh">
        <v-flex md3 align-self-center>
          <p class="text002">
            Subtle Interiors of Charm and Softness
          </p>
        </v-flex>
        <v-flex md7 align-self-center>
          <v-img
            height="80vh"
            contain
            src="../assets/Maniumpathy/_SDS2554.JPG.jpeg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div class="container">
      <div class="box">
        <div style="margin-top:10vh;text-align: center;padding:20px;">
          <carousel-3d
            :width="900"
            :height="600"
            :inverse-scaling="200"
            :space="1300"
            :autoplay="true"
            :autoplay-timeout="3000"
            :display="3"
          >
            <slide :index="0">
              <figure>
                <v-img src="../assets/Maniumpathy/_SDS2576.JPG.jpeg" />
              </figure> </slide
            ><slide :index="1">
              <figure>
                <v-img src="../assets/Maniumpathy/_SDS2577.png" />
              </figure> </slide
            ><slide :index="2">
              <figure>
                <v-img src="../assets/Maniumpathy/_SDS2583.JPG.jpeg" />
              </figure>
            </slide>
          </carousel-3d>
          <div style="margin-inline: 20%">
            <p class="text001">
              Opulent Dutch furniture lends the space depth and graciousness
            </p>
          </div>
        </div>
      </div>
      <div class="box stack-top d-none d-lg-block">
        <div class="container_l">
          <div class="sub-left"></div>
        </div>
        <div class="container_l">
          <div class="sub-right"></div>
        </div>
      </div>
    </div>
    <div style="margin-top: 10vh">
      <v-img height="80vh" src="../assets/Maniumpathy/_SDS2577.png"></v-img>
      <p class="text001">
        Opulent Dutch furniture lends the space depth and graciousness
      </p>
    </div>
    <div style="margin-top: 10vh">
      <v-img
        height="80vh"
        src="../assets/Maniumpathy/_SDS2497-2.JPG.jpeg"
      ></v-img>
    </div>
    <div class="text-center">
      <v-layout row wrap justify-space-between pt-md-12 style="height:100vh">
        <v-flex md6 xs12 sm12 align-self-center>
          <v-img
            height="80vh"
            contain
            src="../assets/Maniumpathy/_SDS2557.png"
          ></v-img>
        </v-flex>
        <v-flex md5 xs12 sm12 align-self-center>
          <v-img
            height="80vh"
            width="60%"
            src="../assets/Maniumpathy/_SDS2545.jpeg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>

    <div style="margin-top: 10vh">
      <v-img
        height="80vh"
        style="margin-left: 5vw;margin-right: 5vw"
        src="../assets/Maniumpathy/_SDS2529.JPG 13-06-02-327.png"
      ></v-img>
      <p class="text001">
        Re-purposing Indo-Portugese fittings to provide strength to the space
        and frame the context of the play on Indoor-Outdoors
      </p>
    </div>
    <div style="margin-top: 10vh;height: 100vh">
      <v-img
        height="82vh"
        style="margin-left: 5vw;margin-right: 5vw"
        contain
        src="../assets/Maniumpathy/_SDS2607.png"
      ></v-img>
    </div>

    <div class="text-center" style="height: 100vh">
      <v-layout row wrap justify-space-around pt-md-12>
        <v-flex md4 align-self-end>
          <p class="text002">
            Outdoor soft seating with a mix of natural textures in washed wood
            and delicate marble.
          </p>
        </v-flex>
        <v-flex md7 justify-center>
          <v-img height="80vh" src="../assets/Maniumpathy/_SDS2638.png"></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="height: 100vh">
      <v-img
        height="80vh"
        contain
        src="../assets/Maniumpathy/_SDS2649-2.JPG.jpeg"
      ></v-img>
      <p class="text001">
        Former sewing tables that were given new life within this contemporary
        outdoor dining experience
      </p>
    </div>
    <div style="height: 100vh">
      <vue-flux :options="options" :images="images2" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
      <p class="text001">
        Proportionate Doric pillars to supplement and frame this restful and
        serene outdoor pavilion
      </p>
    </div>

    <div class="text-center" style="height: 100vh">
      <v-layout row wrap justify-space-around style="margin-top: 10vh">
        <v-flex md7 align-self-center>
          <v-img
            height="90vh"
            contain
            src="../assets/Maniumpathy/_SDS2563.png"
          ></v-img>
        </v-flex>
        <v-flex md4 align-self-center>
          <p class="text002">
            A fresh take on delivering a timeless quality to this Intimate
            space.
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="padding: 10vh">
      <v-img height="80vh" src="../assets/Maniumpathy/_SDS2457-2.png"></v-img>
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
      delay: 3000,
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
