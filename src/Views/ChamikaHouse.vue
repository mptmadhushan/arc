<template>
  <v-container fluid>
    <div class="text-center">
      <v-layout row wrap justify-center pa-3 style="height: 100vh">
        <v-flex md10 align-self-center>
          <v-img
            contain
            height="80vh"
            src="../assets/chamika_house/_SDS3575.jpg"
          ></v-img>
        </v-flex>
        <v-flex md10 justify-center>
          <p class="text001">
            Lush hand carved planis and cemented files elevate The poolside
            experience.
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="margin-top: 10vh">
      <v-img
        height="80vh"
        style="margin-left: 5vw;margin-right: 5vw"
        src="../assets/chamika_house/_SDS3429.jpg"
      ></v-img>
      <p class="text001">
        White furniture in display fo confrasf wifh {he high walls draped in
        greenery.
      </p>
    </div>

    <div style="margin-top: 10vh">
      <v-img
        height="80vh"
        src="../assets/chamika_house/_SDS3650-HDR.jpg"
      ></v-img>
      <p class="text001">
        A room showered with nafural light highlighting Venetian mirrors and
        sculpfures.
      </p>
    </div>

    <div style="padding: 10vh">
      <v-img
        contain
        height="80vh"
        src="../assets/chamika_house/_SDS3393b.jpg"
      ></v-img>
      <p class="text001">
        Specially selected arfwork from arfisfs across The island are showcased
        on high walls.
      </p>
    </div>
    <div style="padding: 10vh">
      <v-img
        contain
        height="80vh"
        src="../assets/chamika_house/_SDS2989.jpg"
      ></v-img>
      <p class="text001">
        Adding to the mystery, The staircase leading fo the property is encased
        within an abundance of greenery to complete a natural rustic look.
      </p>
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
