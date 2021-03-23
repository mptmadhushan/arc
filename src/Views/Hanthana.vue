<template>
  <v-container fluid>
    <router-link to="/projects">
      <img
        style=" opacity: 0.5;margin-inline:20px"
        height="20vh"
        src="../assets/backArrow.png"
      />
    </router-link>
    <div class="text-center">
      <v-layout row wrap justify-center pa-3>
        <v-flex
          md12
          align-self-center
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <div class="b1con" data-aos="zoom-out" data-aos-duration="2000">
            <div class="b1"></div>
          </div>
        </v-flex>
      </v-layout>
    </div>
    <div
      v-if="isMobile()"
      style="margin-top: 10vh"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1500"
    >
      <v-img contain src="../assets/hanthana/2.jpeg"></v-img>
      <p class="text002">
        Wilderness framed to prelude the view and experiences beyond it.
      </p>
    </div>
    <div v-else class="text-center">
      <div style="width:99vw;height:20vh;padding:10px"></div>
      <v-layout row wrap justify-space-around style="height:100vh">
        <v-flex
          md4
          align-self-center
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <p class="text002">
            Wilderness framed to prelude the view and experiences beyond it.
          </p>
        </v-flex>
        <v-flex
          md7
          justify-center
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <v-img contain height="85vh" src="../assets/hanthana/2.jpeg"></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div
      v-if="isMobile()"
      style="margin-top: 10vh"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1500"
    >
      <v-img contain src="../assets/hanthana/3.jpeg"></v-img>
      <p class="text002">
        Working the landscape to pay homage to the surrounding natural beauty.
      </p>
    </div>
    <div
      v-else
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1500"
    >
      <div style="width:99vw;height:10vh;padding:10px"></div>

      <v-img height="85vh" contain src="../assets/hanthana/3.jpeg"></v-img>
      <p class="text001">
        Working the landscape to pay homage to the surrounding natural beauty.
      </p>
    </div>
    <div
      v-if="isMobile()"
      style="margin-top: 10vh"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1500"
    >
      <v-img contain src="../assets/hanthana/4.jpeg"></v-img>
    </div>
    <div
      v-else
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1500"
    >
      <div style="width:99vw;height:20vh;padding:10px"></div>

      <v-img height="90vh" contain src="../assets/hanthana/4.jpeg"></v-img>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div
      v-if="isMobile()"
      style="margin-top: 10vh"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1500"
    >
      <v-img contain src="../assets/hanthana/5.png"></v-img>
      <p class="text002">
        Clean lines and simplicity in form define the view and allow for an
        uninterrupted visual experience.
      </p>
    </div>
    <div v-else class="text-center">
      <v-layout row wrap justify-space-around style="height:100vh">
        <v-flex
          md3
          pa-4
          align-self-center
          data-aos="fade-right"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <p class="text002">
            Clean lines and simplicity in form define the view and allow for an
            uninterrupted visual experience.
          </p>
        </v-flex>
        <v-flex
          md8
          pa-4
          align-self-center
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <v-img contain src="../assets/hanthana/5.png"></v-img>
        </v-flex>
      </v-layout>
    </div>

    <div
      v-if="isMobile()"
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="1500"
    >
      <div style="width:99vw;height:20vh;padding:10px"></div>
      <vue-flux :options="options" :images="images" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
    </div>
    <div
      v-else
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="1500"
      style="padding:10vh"
    >
      <div style="width:99vw;height:20vh;padding:10px"></div>
      <vue-flux :options="options" :images="images" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
    </div>
    <div
      v-if="isMobile()"
      style="margin-top: 10vh"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1500"
    >
      <v-img contain src="../assets/hanthana/6.jpeg"></v-img>
    </div>
    <div v-else>
      <div style="width:99vw;height:20vh;padding:10px"></div>
      <v-img
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="1500"
        style="margin-top: 20vh"
        contain
        height="90vh"
        src="../assets/hanthana/6.jpeg"
      ></v-img>
    </div>

    <div
      v-if="isMobile()"
      style="margin-top: 10vh"
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="1500"
    >
      <v-img contain src="../assets/hanthana/7.jpeg"></v-img>
      <p class="text002">
        A warm and inviting entrance hall, inviting you into a curated
        experience of art and artefact.
      </p>
    </div>
    <div
      v-else
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-duration="1500"
    >
      <div style="width:99vw;height:20vh;padding:10px"></div>

      <v-img height="85vh" contain src="../assets/hanthana/7.jpeg"></v-img>
      <p class="text001">
        A warm and inviting entrance hall, inviting you into a curated
        experience of art and artefact.
      </p>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
      <div style="margin: 1px">
        <div>
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
                <v-img src="../assets/hanthana/slide.jpeg" />
              </figure> </slide
            ><slide :index="1">
              <figure>
                <v-img src="../assets/hanthana/7.jpeg" />
              </figure> </slide
            ><slide :index="2">
              <figure>
                <v-img src="../assets/hanthana/piano.jpg" />
              </figure>
            </slide>
          </carousel-3d>
          <div style="margin-inline: 20%">
            <p class="text001">
              Raw natural materials compliment the warm tones. elevating a cosy
              hill-country atmosphere
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
      <v-img contain height="85vh" src="../assets/hanthana/slide2.jpeg"></v-img>
      <p class="text001" style="padding-inline:15vw">
        Bandu Manamperi's take on the surrounding vista of mountains from
        Hanthana itself, creating a contemporary stage for his work within the
        context of a dramatic lounge to wind down after a journey
      </p>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
      <v-img height="85vh" contain src="../assets/hanthana/8.jpeg"></v-img>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div class="text-center">
      <v-layout row wrap justify-center>
        <v-flex
          md5
          align-self-center
          data-aos="fade-left"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <v-img height="85vh" contain src="../assets/hanthana/9.jpeg"></v-img>
        </v-flex>
        <v-flex md4 align-self-center>
          <p
            class="text001"
            data-aos="fade-right"
            data-aos-delay="300"
            data-aos-duration="1500"
          >
            Spare, Sumptuous and Seductive<br /><br />
            Creating a timeless and functional space by elevating a lifestyle,
            Spaces that are thoughtful yet provoke a deeper sense of purpose
            when interacting within it.
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:22vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
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
                <v-img src="../assets/hanthana/slide3.jpeg" />
              </figure> </slide
            ><slide :index="1">
              <figure>
                <v-img src="../assets/hanthana/sln.jpeg" />
              </figure> </slide
            ><slide :index="2">
              <figure>
                <v-img src="../assets/hanthana/sln2.jpeg" />
              </figure> </slide
            ><slide :index="3">
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
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>
    <div data-aos="fade-up" data-aos-delay="10" data-aos-duration="1500">
      <v-img
        height="90vh"
        contain
        src="../assets/hanthana/_SDS1888.JPG.jpeg"
      ></v-img>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>
    <div data-aos="fade-up" data-aos-delay="10" data-aos-duration="1500">
      <v-img height="90vh" contain src="../assets/hanthana/slide6.jpg"></v-img>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1500"
    >
      <v-img
        height="90vh"
        contain
        src="../assets/hanthana/_SDS2136.JPG.jpeg"
      ></v-img>
    </div>
    <div
      v-else
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1500"
    >
      <v-img
        height="90vh"
        contain
        style="margin-left: 5vw;margin-right: 5vw"
        src="../assets/hanthana/_SDS2136.JPG.jpeg"
      ></v-img>
    </div>

    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1500"
      v-if="isMobile()"
    >
      <vue-flux :options="options" :images="images2" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
    </div>
    <div
      v-else
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="1500"
      style="padding:10vh"
    >
      <vue-flux :options="options" :images="images2" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div style="padding-bottom:4vh">
      <v-img
        data-aos="fade-down"
        data-aos-delay="500"
        data-aos-duration="3000"
        height="92vh"
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
.b1con {
  /* background-color: blueviolet; */
  background-image: url("../assets/hanthana/1st.jpeg");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 92vh;
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
