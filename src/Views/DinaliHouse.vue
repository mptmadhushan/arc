<template>
  <v-container fluid>
    <div class="text-center">
      <v-layout row wrap justify-center pa-3 style="height: 100vh">
        <v-flex md10 align-self-center>
          <v-img
            contain
            height="80vh"
            src="../assets/Dinali_House/_SDS2871.JPG.jpg"
          ></v-img>
        </v-flex>
        <v-flex md10 justify-center>
          <p class="text001">
            A classic modern structure melding with careflly paired plants makes
            or, elegant outlook.
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div style="margin-top: 10vh">
      <v-img
        height="80vh"
        style="margin-left: 5vw;margin-right: 5vw"
        src="../assets/Dinali_House/_SDS2866.JPG.jpg"
      ></v-img>
      <p class="text001">
        The natural light entering the room adds to the beautiful ambiance
        created through the precise placemnent of art and furniture.
      </p>
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
                <v-img src="../assets/Dinali_House/_SDS2888.JPG.jpg" />
              </figure> </slide
            ><slide :index="1">
              <figure>
                <v-img src="../assets/Dinali_House/_SDS2899.JPG.jpg" />
              </figure> </slide
            ><slide :index="2">
              <figure>
                <v-img src="../assets/Dinali_House/_SDS2911.JPG.jpg" />
              </figure>
            </slide>
            <slide :index="3">
              <figure>
                <v-img src="../assets/Dinali_House/_SDS2865.JPG.jpg" />
              </figure>
            </slide>
          </carousel-3d>
          <div style="margin-inline: 20%">
            <p class="text001">
              An sleek wooden chest adding color and class to elevate an already
              Intimate lounge area.
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
    <div class="text-center">
      <v-layout row wrap justify-center style="height: 100vh;">
        <v-flex md4 align-self-center>
          <p class="text002">
            The painting and sculptures chosen to be showcased portray a story
            told through the eyes of some of the island's best artists
          </p>
        </v-flex>
        <v-flex md7 align-self-center>
          <v-img contain height="80vh" src="../assets/Dinali_House/_SDS2888.JPG.jpg"></v-img>
        </v-flex>
      </v-layout>
    </div>

    <div style="height:100vh">
      <v-img
        height="80vh"
        src="../assets/Dinali_House/_SDS2899.JPG.jpg"
      ></v-img>
      <p class="text001">
        A thought provoking design. this painting was intentionally placed here
        to capture the attention of the onlooking patrons_
      </p>
    </div>
    <div class="text-center" style="height: 100vh">
      <v-layout row wrap justify-space-around pt-md-12>
        <v-flex md7 justify-center>
          <v-img
            height="82vh"
            src="../assets/Dinali_House/_SDS2881.JPG.jpg"
          ></v-img>
        </v-flex>
        <v-flex md4 align-self-center>
          <p class="text002">
            The balance of a rich interior and a simple exterior is the secret
            to class.
          </p>
        </v-flex>
      </v-layout>
    </div>

    <div>
      <v-img
        height="82vh"
        style="margin-left: 5vw;margin-right: 5vw"
        src="../assets/Dinali_House/_SDS2903.JPG.jpg"
      ></v-img>
      <p class="text001">
        An idyllic setting made complete with luscious greens and wicker chairs.
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
