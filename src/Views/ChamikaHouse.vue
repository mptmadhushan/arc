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
      <v-layout row wrap justify-center>
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
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div class="text-center">
      <v-layout row wrap justify-center>
        <v-flex
          md12
          align-self-center
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <v-img
            contain
            height="95vh"
            src="../assets/chamika_house/_SDS3575.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div>
      <v-img
        contain
        src="../assets/chamika_house/_SDS3429.jpg"
        data-aos="fade-up"
        data-aos-duration="1500"
      ></v-img>
      <!-- <p
        class="text001"
        data-aos="fade-up"
        
        data-aos-duration="1500"
      >
        White furniture in display to contrast with the high walls draped in
        greenery.
      </p> -->
    </div>
    <div style="width:99vw;height:20vh;padding:10px"></div>

    <div data-aos="fade-up" data-aos-duration="1500">
      <v-img
        height="90vh"
        contain
        src="../assets/chamika_house/_SDS3650-HDR.jpg"
      ></v-img>
      <!-- <p class="text001">
        A room showered with natural light highlighting Venetian mirrors and
        sculptures.
      </p> -->
    </div>

    <div v-if="isMobile()">
      <v-img contain src="../assets/chamika_house/_SDS3393b.jpg"></v-img>
      <!-- <p class="text001">
        Specially selected artwork from artists across the island are showcased
        on high walls.
      </p> -->
    </div>
    <div v-else data-aos="fade-up" data-aos-duration="1500">
      <div style="width:99vw;height:20vh;padding:10px"></div>

      <v-img
        contain
        height="90vh"
        src="../assets/chamika_house/_SDS3393b.jpg"
      ></v-img>
      <!-- <p class="text001">
        Specially selected artwork from arfisfs across The island are showcased
        on high walls.
      </p> -->
    </div>
    <div v-if="isMobile()" style="height: 100vh;">
      <div style="width:99vw;height:20vh;margin:10vh"></div>

      <v-img contain src="../assets/chamika_house/_SDS2989.jpg"></v-img>
      <!-- <p class="text001">
        Adding to the mystery, the staircase leading fo the property is encased
        within an abundance of greenery to complete a natural rustic look.
      </p> -->
    </div>
    <div
      v-else
      data-aos="fade-down"
      data-aos-duration="1500"
      style="padding:5vh"
    >
      <div style="width:99vw;height:10vh;margin:10vh"></div>

      <v-img
        contain
        data-aos="fade-up"
        data-aos-duration="1500"
        height="90vh"
        src="../assets/chamika_house/_SDS2989.jpg"
      ></v-img>
      <!-- <p class="text001">
        Adding to the mystery, The staircase leading fo the property is encased
        within an abundance of greenery to complete a natural rustic look.
      </p> -->
    </div>
  </v-container>
</template>

<script>
export default {
  data: () => ({
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
  background-image: url("../assets/chamika_house/_SDS3079-HDR_1.jpg");
  /* background-size: 100% 100%;
  object-fit: fill; */
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 95vh;
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
  padding-inline: 30px;
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
