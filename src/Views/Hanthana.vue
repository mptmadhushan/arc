<template>
  <v-container fluid>
    <div class="text-center">
      <v-layout row wrap justify-center pa-3 style="height:100vh">
        <v-flex md12 align-self-center>
          <v-img
            contain
            height="80vh"
            src="../assets/hanthana/1st.jpeg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>

    <div class="text-center">
      <v-layout row wrap justify-space-around pt-md-12 style="height:100vh">
        <v-flex md4 align-self-center>
          <p class="text002">
            Wilderness framed to prelude the view and experiences beyond it.
          </p>
        </v-flex>
        <v-flex md7 justify-center>
          <v-img contain height="80vh" src="../assets/hanthana/2.jpeg"></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="height: 100vh">
      <v-img height="80vh" contain src="../assets/hanthana/3.jpeg"></v-img>
      <p class="text001">
        Working the landscape to pay homage to the surrounding natural beauty.
      </p>
    </div>

    <div>
      <v-img height="80vh" contain src="../assets/hanthana/4.jpeg"></v-img>
    </div>

    <div class="text-center">
      <v-layout row wrap justify-space-around style="height:100vh">
        <v-flex md4 align-self-center>
          <p class="text002">
            Clean lines and simplicity in form define the view and allow for an
            uninterrupted visual experience.
          </p>
        </v-flex>
        <v-flex md7 align-self-center>
          <v-img height="80vh" contain src="../assets/hanthana/5.png"></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div>
      <vue-flux :options="options" :images="images" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
    </div>
    <div style="height: 100vh">
      <v-img
        height="80vh"
        width="100vw"
        style="margin-top: 10vh"
        contain
        src="../assets/hanthana/6.jpeg"
      ></v-img>
    </div>
    <div style="height: 100vh">
      <v-img height="80vh" contain src="../assets/hanthana/7.jpeg"></v-img>
      <p class="text001">
        A warm and inviting entrance hall, inviting you into a curated
        experience of art and artefact.
      </p>
    </div>
    <div class="container">
      <div class="box">
        <div style="text-align: center;padding:20px;">
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
                <v-img src="../assets/hanthana/slide.jpeg" />
              </figure> </slide
            ><slide :index="1">
              <figure>
                <v-img src="../assets/hanthana/slide2.jpeg" />
              </figure> </slide
            ><slide :index="2">
              <figure>
                <v-img src="../assets/hanthana/slide3.jpeg" />
              </figure>
            </slide>
          </carousel-3d>
          <div style="margin-inline: 20%">
            <p class="text001">
              Raw natural matenals cccnpærnent the warm tones. elevating a cosy
              hill-country atmosphere
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
    <div style="height: 100vh">
      <v-img height="80vh" src="../assets/hanthana/slide2.jpeg"></v-img>
      <p class="text001">
        Bandu Manamperi's take on the surrounding vista of mountains from
        Hanthana itself, Creating a contemporary stage for his work within the
        context ot a dramatic lounge to wind down after a journey
      </p>
    </div>
    <div style="height: 100vh">
      <v-img height="80vh" src="../assets/hanthana/8.jpeg"></v-img>
    </div>

    <div class="text-center">
      <v-layout row wrap justify-space-between pt-md-12 style="height:90vh">
        <v-flex md7 align-self-center>
          <v-img height="80vh" contain src="../assets/hanthana/9.jpeg"></v-img>
        </v-flex>
        <v-flex md4 align-self-center>
          <p class="text001">
            Spare, Sumptuous and Seductive<br /><br />
            Creating a timeless and functional space by elevating a lifestyle,
            Spaces that are thoughtful yet provoke a deeper sense of purpose
            when interacting within it.
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div class="container">
      <div class="box">
        <div style="margin-top: 10vh;text-align: center;padding:20px;">
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
                <v-img src="../assets/hanthana/slide5.jpg" />
              </figure> </slide
            ><slide :index="1">
              <figure>
                <v-img src="../assets/hanthana/slide6.jpg" />
              </figure> </slide
            ><slide :index="2">
              <figure>
                <v-img src="../assets/hanthana/slide7.jpg" />
              </figure>
            </slide>
          </carousel-3d>
          <div style="margin-inline: 20%">
            <p class="text001">
              An eclectic mix of contemporary and antique. Artistic accents to
              enhance, offering strength and warmth
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
      <v-img
        height="80vh"
        style="margin-left: 5vw;margin-right: 5vw"
        src="../assets/hanthana/9.jpeg"
      ></v-img>
    </div>
    <div style="margin-top:20vh;">
      <vue-flux :options="options" :images="images2" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
    </div>
    <div style="margin-top: 10vh;height: 100vh">
      <v-img
        height="90vh"
        contain
        src="../assets/hanthana/_SDS2253.png"
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
