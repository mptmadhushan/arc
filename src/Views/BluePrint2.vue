<template>
  <full-page ref="fullpage" :options="options" id="fullpage">
    <audio
      allow="autoplay;fullscreen"
      id="my_audio"
      src="../assets/music.mp3"
    ></audio>
    <div class="section">
      <router-link to="/">
        <img
          style=" opacity: 0.5;margin-inline:20px"
          height="20vh"
          src="../assets/backArrow.png"
        />
      </router-link>
      <div>
        <div class="d-flex flex-row mb-6">
          <div
            data-aos="zoom-up"
            data-aos-delay="600"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
            <p style="font-size:10vw;color:grey;">
              D
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="700"
            data-aos-easing="ease-in-out"
          >
            <p style="font-size:10vw;color:grey;">
              E
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="800"
            data-aos-easing="ease-in-out"
          >
            <p style="font-size:10vw;color:grey;">
              S
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="900"
            data-aos-easing="ease-in-out"
          >
            <p style="font-size:10vw;color:grey;">
              I
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1100"
            data-aos-easing="ease-in-out"
          >
            <p style="font-size:10vw;color:grey;">
              G
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="1200"
            data-aos-easing="ease-in-out"
          >
            <p style="font-size:10vw;color:grey;">
              N
            </p>
          </div>
        </div>

        <div>
          <v-layout row wrap justify-center>
            <v-flex md6 align-self-start style="height:60vh">
              <div
                class="b1con"
                data-aos="zoom-in-left"
                data-aos-duration="1500"
              >
                <div class="b1"></div>
              </div>
            </v-flex>
            <v-flex md5 align-self-start>
              <p
                class="text001"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1500"
                style="height:101vh"
              >
                Enim incididunt id tempor minim incididunt consectetur ut ad
                laboris velit Enim incididunt id tempor minim incididunt
                consectetur ut ad laboris velit
              </p>
            </v-flex>
          </v-layout>
        </div>
      </div>
    </div>
    <div class="selection">
      <div>
        <p class="text001" data-aos="fade-left" data-aos-duration="3000">
          Cupidatat laborum magna Lorem eiusmod aute nisi qui laborum.
        </p>
        <v-layout row wrap justify-center style="height: 101vh">
          <v-flex md6 xs12 sm12 align-self-end>
            <div class="align-end" style="text-align:end;height: 100vh;">
              <img
                align-content-end
                data-aos="fade-up"
                data-aos-duration="3000"
                contain
                style="margin-top:20vh;margin-right:1vw"
                height="60%"
                src="../assets/blueprint/_SDS3006.png"
              />
            </div>
          </v-flex>
          <v-flex md6 xs12 sm12 align-self-end>
            <div class="align-end" style="text-align:start;height: 100vh;">
              <img
                data-aos="fade-up"
                data-aos-duration="3000"
                align-content-start
                contain
                style="margin-left:1vw"
                height="80%"
                src="../assets/blueprint/_SDS2960.png"
              />
            </div>
          </v-flex>
        </v-layout>
      </div>
    </div>
    <div class="section">
      <slider />
    </div>
    <div class="section">
      <p class="text001">
        Cupidatat laborum magna Lorem eiusmod aute nisi qui laborum.
      </p>
      <v-layout row wrap justify-center style="height: 101vh">
        <v-flex md6 xs12 sm12 align-self-end>
          <div class="align-end" style="text-align:end;height: 100vh;">
            <img
              align-content-end
              data-aos="fade-up"
              data-aos-duration="3000"
              contain
              style="margin-top:20vh;margin-right:1vw"
              height="60%"
              src="../assets/blueprint/_SDS3006.png"
            />
          </div>
        </v-flex>
        <v-flex md6 xs12 sm12 align-self-end>
          <div class="align-end" style="text-align:start;height: 100vh;">
            <img
              data-aos="fade-up"
              data-aos-duration="3000"
              align-content-start
              contain
              style="margin-left:1vw"
              height="80%"
              src="../assets/blueprint/_SDS2960.png"
            />
          </div>
        </v-flex>
      </v-layout>
    </div>
  </full-page>
</template>

<script>
import slider from "../components/slider1";
export default {
  components: { slider },
  mounted() {
    document.getElementById("my_audio").muted = false;
    document.getElementById("my_audio").play();
  },
  data() {
    return {
      options: {
        licenseKey: "YOUR_KEY_HEERE",
        menu: "#menu",
      },
    };
  },
};
</script>

<style scoped>
.newBox {
  background: rgb(255, 255, 255);
  width: 10px;
  height: 100px;
  -webkit-animation: animateThis 2s ease-in;
  -webkit-animation-fill-mode: backwards;
}
@-webkit-keyframes animateThis {
  0% {
    width: 100%;
  }
  100% {
    width: -100%;
  }
}
.b1con {
  /* background-color: blueviolet; */
  background-image: url("../assets/blueprint/_SDS3203b.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}
.b2con {
  /* background-color: blueviolet; */
  background-image: url("../assets/blueprint/1.png");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}
.b1 {
  background-color: rgb(255, 255, 255);
  transform: scaleY(0);
  transform-origin: top;
  height: 100%;
  width: 100%;
  /* transition: transform 0.5s ease-in-out;
  animation: mymove 5s infinite; */
  animation: slideInFromLeft 0.8s;
}
@keyframes slideInFromLeft {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}
</style>
