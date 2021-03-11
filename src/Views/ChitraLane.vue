<template>
  <v-container fluid>
    <div class="text-center" style="margin-top:5vh">
      <v-layout row wrap justify-center pa-3>
        <v-flex md10 justify-center>
          <v-img
            contain
            height="85vh"
            src="../assets/Chitra_Lane/_SDS3756.JPG.jpg"
          ></v-img>
        </v-flex>
        <v-flex md10 justify-center>
          <p class="text001">
            Use of the trellice to provide privacy and controlled lighting to
            the property
          </p>
        </v-flex>
      </v-layout>
    </div>
    <v-layout row wrap style="height: 100vh">
      <v-flex md12 align-self-center>
        <div>
          <v-img
            height="80vh"
            contain
            style="margin-left: 5vw;margin-right: 5vw"
            src="../assets/Chitra_Lane/_SDS3752.JPG.jpg"
          ></v-img>
        </div>
      </v-flex>
    </v-layout>
    <div class="text-center" style="margin-top:10vh;height: 100vh">
      <v-layout row wrap justify-center pt-md-12>
        <v-flex md4 align-self-end>
          <p class="text002">
            Tall windows to create efficient ventilation and keep fhe rooms cool
            under scorching island Van.
          </p>
        </v-flex>
        <v-flex md7 justify-center>
          <v-img
            height="80vh"
            src="../assets/Chitra_Lane/_SDS3762-HDR.JPG.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>

    <div class="text-center">
      <v-layout row wrap justify-center pt-md-12>
        <v-flex md4 align-self-center>
          <p class="text003">
            Narrow. Sleek Siairways focused on minimalistic aesthetics
          </p>
        </v-flex>
        <v-flex md7 justify-center>
          <v-img
            contain
            height="85vh"
            src="../assets/Chitra_Lane/_SDS3689.JPG.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div class="container">
      <div class="box">
        <div style="margin-top: 20vh;">
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
                <v-img src="../assets/Chitra_Lane/_SDS3699-HDR.JPG.jpg" />
              </figure> </slide
            ><slide :index="1">
              <figure>
                <v-img src="../assets/Chitra_Lane/_SDS3725-HDR.JPG.jpg" />
              </figure> </slide
            ><slide :index="2">
              <figure>
                <v-img src="../assets/Chitra_Lane/_SDS3741-HDR.JPG.jpg" />
              </figure>
            </slide>
            <slide :index="3">
              <figure>
                <v-img src="../assets/Chitra_Lane/_SDS3747-HDR.JPG.jpg" />
              </figure>
            </slide>
          </carousel-3d>
          <div style="margin-inline: 20%">
            <p class="text001">
              Neutral tones, and longer artworks convey spaciousness.
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

    <div style="margin-top:10vh">
      <v-img
        height="82vh"
        src="../assets/Chitra_Lane/_SDS3747-HDR.JPG.jpg"
      ></v-img>
      <p class="text001" pt-5>
        Wooden inferiors add to a completed rustic yet modern look.
      </p>
    </div>

    <div style="padding: 10vh">
      <v-img
        contain
        height="80vh"
        src="../assets/Chitra_Lane/_SDS3692.JPG.jpg"
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
  text-align: justify;
  padding: 10px;
  font-size: 2vh;
  color: #11111193;
}
.text003 {
  text-align: justify;
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
