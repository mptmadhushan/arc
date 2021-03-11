<template>
  <v-container fluid>
    <div class="text-center">
      <v-layout row wrap justify-center pa-md-2 style="height: 100vh">
        <v-flex md10 align-self-center>
          <v-img
            contain
            height="80vh"
            src="../assets/Damindra_House/_SDS7569.JPG.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="margin-top: 10vh">
      <v-img
        height="80vh"
        src="../assets/Damindra_House/_SDS7604.JPG.jpg"
      ></v-img>
      <p class="text001">
        Working with rustic wooden bences, and lavish modern furniture to
        combine two worlds info one cohesive unit.
      </p>
    </div>
    <div class="text-center">
      <v-layout row wrap justify-center pt-md-12 style="height: 100vh">
        <v-flex md4 align-self-center>
          <p class="text002">
            Open air area inside a home, which not only adds to it's beauty but
            also creates a cooling effect through efficient ventilation.
          </p>
        </v-flex>
        <v-flex md7 align-self-center>
          <v-img
            contain
            height="80vh"
            src="../assets/Damindra_House/_SDS7634.JPG.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div style="margin-top: 10vh">
      <v-img
        height="80vh"
        src="../assets/Damindra_House/_SDS7591.JPG.jpg"
      ></v-img>
      <p class="text001">
        Artwork expertly placed in a position where it can be seen in an
        unobstructed view, highlighted further wifh neutral toned furniture.
      </p>
    </div>
    <div class="text-center">
      <v-layout row wrap justify-space-around  style="height: 100vh">
        <v-flex md4 align-self-center>
          <p class="text002">
            The frees and gravel exterior adds a quief charm and homely feel,
            which is elevated through the framed arfwork.
          </p>
        </v-flex>
        <v-flex md7 align-self-center>
          <v-img
            contain
            height="80vh"
            src="../assets/Damindra_House/_SDS7595.JPG.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>

    <div style="height: 100vh">
      <v-img
        contain
        height="90vh"
        style="margin-left: 5vw;margin-right: 5vw"
        src="../assets/Damindra_House/_SDS7622.JPG.jpg"
      ></v-img>
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
