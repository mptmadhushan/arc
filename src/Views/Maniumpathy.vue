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
      <v-layout row wrap justify-center pa-3 style="height:100vh">
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

          <p class="text001">
            A literal elevation of a bastion of our colonial past.
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-delay="10" data-aos-duration="2000">
      <v-img
        height="88vh"
        contain
        src="../assets/Maniumpathy/SDS2436.png"
      ></v-img>
    </div>

    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-delay="10"
      data-aos-duration="1500"
    >
      <v-img contain src="../assets/Maniumpathy/_SDS2725.JPG.jpeg"></v-img>
    </div>
    <div v-else data-aos="fade-up" data-aos-delay="10" data-aos-duration="2000">
      <div style="width:99vw;height:20vh;padding:10px"></div>

      <v-img
        contain
        height="90vh"
        src="../assets/Maniumpathy/_SDS2725.JPG.jpeg"
      ></v-img>
    </div>
    <div
      v-if="isMobile()"
      style="margin-top: 10vh"
      data-aos="fade-left"
      data-aos-delay="10"
      data-aos-duration="1500"
    >
      <v-img contain src="../assets/Maniumpathy/_SDS2472.png"></v-img>
      <p class="text002">
        A strong tonality within the room are balanced by distinctive antiques,
        including chandeliers. mirrors and carefully considered details create a
        vibrant and welcoming atmosphere
      </p>
    </div>
    <div v-else class="text-center">
      <div style="width:99vw;height:20vh;padding:10px"></div>

      <v-layout row wrap justify-space-around>
        <v-flex
          md9
          pa-4
          align-self-center
          data-aos="fade-left"
          data-aos-delay="10"
          data-aos-duration="1500"
        >
          <v-img contain src="../assets/Maniumpathy/_SDS2472.png"></v-img>
        </v-flex>
        <v-flex
          md3
          pa-4
          align-self-center
          data-aos="fade-right"
          data-aos-delay="10"
          data-aos-duration="1500"
        >
          <p class="text002">
            A strong tonality within the room are balanced by distinctive
            antiques, including chandeliers. mirrors and carefully considered
            details create a vibrant and welcoming atmosphere
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-delay="10"
      data-aos-duration="1500"
    >
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
    <div
      v-else
      data-aos="fade-in"
      data-aos-delay="10"
      data-aos-duration="2000"
      style="padding:8vh"
    >
      <div style="width:99vw;height:20vh;padding:10px"></div>
      <div style="margin:11vh">
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
          Extending the physical structure to shed a spotlight on the large
          dining space, styled with beautiful Rajastani chandeliers and
          exquisite table service
        </p>
      </div>
    </div>
    <div
      v-if="isMobile()"
      style="margin-top: 10vh"
      data-aos="fade-left"
      data-aos-delay="10"
      data-aos-duration="1500"
    >
      <v-img contain src="../assets/Maniumpathy/_SDS2554.JPG.jpeg"></v-img>
      <p class="text002">
        Subtle Interiors of Charm and Softness
      </p>
    </div>
    <div v-else>
      <div style="width:99vw;height:20vh;padding:10px"></div>
      <v-layout row wrap justify-center>
        <v-flex
          md3
          align-self-center
          data-aos="fade-up"
          data-aos-delay="10"
          data-aos-duration="1500"
        >
          <p class="text002">
            Subtle Interiors of Charm and Softness
          </p>
        </v-flex>
        <v-flex
          md4
          align-self-center
          data-aos="fade-up"
          data-aos-delay="10"
          data-aos-duration="1500"
        >
          <v-img
            height="85vh"
            contain
            src="../assets/Maniumpathy/_SDS2554.JPG.jpeg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>
    =
    <div data-aos="fade-up" data-aos-delay="10" data-aos-duration="1500">
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
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-duration="2000">
      <v-img
        contain
        height="85vh"
        src="../assets/Maniumpathy/_SDS2577.png"
      ></v-img>
      <p class="text001">
        Opulent Dutch furniture lends the space depth and graciousness
      </p>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-delay="10" data-aos-duration="1500">
      <v-img
        height="90vh"
        contain
        src="../assets/Maniumpathy/_SDS2497-2.JPG.jpeg"
      ></v-img>
    </div>
    <div
      v-if="isMobile()"
      style="margin-top: 10vh"
      data-aos="fade-up"
      data-aos-delay="10"
      data-aos-duration="1500"
    >
      <v-img contain src="../assets/Maniumpathy/_SDS2557.png"></v-img>
      <div style="margin-top: 10vh">
        <v-img contain src="../assets/Maniumpathy/_SDS2545.jpeg"></v-img>
      </div>
    </div>
    <div v-else class="text-center">
      <div style="width:99vw;height:20vh;padding:10px"></div>

      <v-layout row wrap justify-space-around>
        <v-flex
          md6
          xs10
          sm10
          align-self-center
          data-aos="fade-up"
          data-aos-delay="10"
          data-aos-duration="1500"
        >
          <v-img
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
          data-aos-delay="10"
          data-aos-duration="1500"
        >
          <v-img
            height="80vh"
            width="70%"
            src="../assets/Maniumpathy/_SDS2545.jpeg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:17vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-delay="10" data-aos-duration="1500">
      <div v-if="isMobile()">
        <vue-flux
          :options="options"
          :images="images3"
          :transitions="transitions"
        >
          <template v-slot:preloader>
            <flux-preloader height="40vh" />
          </template>
        </vue-flux>
      </div>
      <div v-else style="margin:11vh">
        <vue-flux
          :options="options"
          :images="images3"
          :transitions="transitions"
        >
          <template v-slot:preloader>
            <flux-preloader height="40vh" />
          </template>
        </vue-flux>
      </div>
    </div>
    <div style="width:99vw;height:15vh;padding:10px"></div>
    <div v-if="isMobile()">
      <vue-flux :options="options" :images="images4" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
      <p class="text001">
        Re-purposing Indo-Portugese fittings to provide strength to the space
        and frame the context of the play on Indoor-Outdoors--
      </p>
    </div>
    <div v-else style="margin:14vh">
      <vue-flux :options="options" :images="images4" :transitions="transitions">
        <template v-slot:preloader>
          <flux-preloader height="40vh" />
        </template>
      </vue-flux>
      <p class="text001">
        Re-purposing Indo-Portugese fittings to provide strength to the space
        and frame the context of the play on Indoor-Outdoors--
      </p>
    </div>
    <!-- <div style="padding:1vh">
      <v-img
        contain
        data-aos="fade-up"
        data-aos-delay="10"
        data-aos-duration="1500"
        height="85vh"
        src="../assets/Maniumpathy/_SDS2529.JPG 13-06-02-327.png"
      ></v-img>
      <p class="text001">
        Re-purposing Indo-Portugese fittings to provide strength to the space
        and frame the context of the play on Indoor-Outdoors
      </p>
    </div> -->
    <div style="width:99vw;height:22vh;padding:10px"></div>

    <div data-aos="fade-down" data-aos-delay="10" data-aos-duration="1500">
      <v-img
        height="88vh"
        style="margin-left: 5vw;margin-right: 5vw"
        contain
        src="../assets/Maniumpathy/_SDS2607.png"
      ></v-img>
    </div>

    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-delay="10"
      data-aos-duration="1500"
    >
      <v-img contain src="../assets/Maniumpathy/_SDS2638.png"></v-img>
      <p class="text002">
        Outdoor soft seating with a mix of natural textures in washed wood and
        delicate marble.
      </p>
    </div>
    <div v-else class="text-center">
      <div style="width:99vw;height:20vh;padding:10px"></div>

      <v-layout row wrap justify-center>
        <v-flex
          md3
          pa-4
          align-self-end
          data-aos="fade-right"
          data-aos-delay="10"
          data-aos-duration="1500"
        >
          <p class="text002">
            Outdoor soft seating with a mix of natural textures in washed wood
            and delicate marble.
          </p>
        </v-flex>
        <v-flex
          md8
          pa-4
          justify-center
          data-aos="fade-left"
          data-aos-delay="10"
          data-aos-duration="1500"
        >
          <v-img contain src="../assets/Maniumpathy/_SDS2638.png"></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-delay="10"
      data-aos-duration="1500"
    >
      <v-img contain src="../assets/Maniumpathy/_SDS2649-2.JPG.jpeg"></v-img>
      <p class="text002">
        Former sewing tables that were given new life within this contemporary
        outdoor dining experience
      </p>
    </div>
    <div v-else data-aos="fade-up" data-aos-delay="10" data-aos-duration="1500">
      <v-img
        height="85vh"
        contain
        src="../assets/Maniumpathy/_SDS2649-2.JPG.jpeg"
      ></v-img>
      <p class="text001">
        Former sewing tables that were given new life within this contemporary
        outdoor dining experience
      </p>
    </div>

    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-delay="10"
      data-aos-duration="1500"
    >
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
    <div
      v-else
      data-aos="fade-down"
      data-aos-delay="10"
      data-aos-duration="1500"
      style="margin:12vh"
    >
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
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div class="text-center" pa-12>
      <v-layout row wrap justify-center>
        <v-flex
          md6
          align-self-center
          data-aos="fade-right"
          data-aos-delay="10"
          data-aos-duration="1500"
        >
          <v-img
            height="85vh"
            contain
            src="../assets/Maniumpathy/_SDS2563.png"
          ></v-img>
        </v-flex>
        <v-flex
          md5
          align-self-center
          data-aos="fade-left"
          data-aos-delay="10"
          data-aos-duration="1500"
        >
          <p class="text002">
            A fresh take on delivering a timeless quality to this Intimate
            space.
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div
      v-if="isMobile()"
      data-aos="fade-up"
      data-aos-delay="10"
      data-aos-duration="1500"
    >
      <v-img contain src="../assets/Maniumpathy/_SDS2457-2.png"></v-img>
    </div>
    <div
      v-else
      data-aos="fade-up"
      data-aos-delay="10"
      data-aos-duration="1500"
      style="padding:5vh"
    >
      <v-img
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
.b1con {
  /* background-color: blueviolet; */
  background-image: url("../assets/Maniumpathy/1.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 87vh;
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
