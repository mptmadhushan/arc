<template>
  <v-container fluid>
    <div class="text-center">
      <v-layout row wrap justify-center pa-3 style="height: 100vh">
        <v-flex md10 xs12 sm12 align-self-center>
          <v-img
            contain
            height="80vh"
            src="../assets/Stone_House/Stone House_DSC5533.JPG.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div v-if="isMobile()">
      <v-img contain src="../assets/chamika_house/_SDS2989.jpg"></v-img>
      <p class="text001">
        Revitalising a Kandyan Icon into a boutique hotel maintaining its
        heritage
      </p>
    </div>
    <div v-else>
      <v-img
        height="90vh"
        object-fit
        src="../assets/Stone_House/Stone House_DSC5504.JPG.jpg"
      ></v-img>
      <p class="text001">
        Revitalising a Kandyan Icon into a boutique hotel maintaining its
        heritage
      </p>
    </div>
    <div v-if="isMobile()">
      <v-img
        contain
        src="../assets/Stone_House/Stone House_DSC5412.JPG.jpg"
      ></v-img>
      <p class="text001">
        The carefully structured arches help display the surrounding greenery.
        which makes for a serene sight
      </p>
    </div>
    <div v-else class="text-center">
      <v-layout row wrap justify-space-around style="height:100vh">
        <v-flex md7 xs12 sm12 align-self-center>
          <v-img
            height="80vh"
            contain
            src="../assets/Stone_House/Stone House_DSC5412.JPG.jpg"
          ></v-img>
        </v-flex>
        <v-flex md4 xs10 sm10 align-self-center>
          <p class="text002">
            The carefully structured arches help display the surrounding
            greenery. which makes for a serene sight
          </p>
        </v-flex>
      </v-layout>
    </div>
    <div>
      <v-img
        height="80vh"
        style="margin-left: 5vw;margin-right: 5vw"
        src="../assets/Stone_House/Stone House_DSC5296.JPG.jpg"
      ></v-img>
      <p class="text001">
        Art and Sculpture. a study of the proprietor's history in the rice
        industry and Its many permutations throughout the home.
      </p>
    </div>
    <div v-if="isMobile()">
      <v-img
        contain
        src="../assets/Stone_House/Stone House_DSC5305.JPG.jpg"
      ></v-img>
      <p class="text001">
        Rustic, contemporary furniture to tie together the ethos of the house
        and its strong tonality.
      </p>
    </div>
    <div v-else class="text-center">
      <v-layout row wrap justify-center pt-md-12 style="height: 100vh">
        <v-flex md4 xs10 sm10 align-self-center>
          <p class="text002">
            Rustic, contemporary furniture to tie together the ethos of the
            house and its strong tonality.
          </p>
        </v-flex>
        <v-flex md7 xs10 sm10 align-self-center>
          <v-img
            height="80vh"
            contain
            src="../assets/Stone_House/Stone House_DSC5305.JPG.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div :class="!isMobile() ? 'container' : 'container_mob'">
      <div class="box">
        <div>
          <carousel-3d
            :width="900"
            :height="600"
            :inverse-scaling="200"
            :space="1300"
            :perspective="0"
            :autoplay="true"
            :autoplay-timeout="3000"
            :display="3"
          >
           <slide :index="0">
              <figure>
                <v-img
                  src="../assets/Stone_House/Stone House_DSC5402.JPG.jpg"
                />
              </figure> </slide
            ><slide :index="1">
              <figure>
                <v-img
                  src="../assets/Stone_House/Stone House_DSC5086.JPG.jpg"
                />
              </figure>
            </slide>
            <slide :index="2">
              <figure>
                <v-img
                  src="../assets/Stone_House/Stone House_DSC5224.JPG.jpg"
                />
              </figure>
            </slide>
          </carousel-3d>
          <div style="margin-inline: 20%">
            <p class="text001">
              The study of rice continues through artists such as Kingsley
              Goonatilake, Pala Pothupitiya and Mahen Perera encapsulating each
              room with their materiality and use of textures such as rice
              paper, gold leaf, canvas etc.
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
    <div v-if="isMobile()">
      <v-img
        contain
        src="../assets/Stone_House/Stone House_DSC5405.JPG.jpg"
      ></v-img>
      <p class="text001">
        Harmonious interiors to reassure and uplift
      </p>
    </div>
    <div v-else class="text-center" style="height: 100vh;">
      <v-layout row wrap justify-center pt-md-12>
        <v-flex md4 xs10 sm10 align-self-baseline>
          <p class="text002">
            Harmonious interiors to reassure and uplift
          </p>
        </v-flex>
        <v-flex md7 xs10 sm10 justify-center>
          <v-img
            height="80vh"
            src="../assets/Stone_House/Stone House_DSC5405.JPG.jpg"
          ></v-img>
        </v-flex>
      </v-layout>
    </div>
    <div v-if="isMobile()">
      <v-img
        contain
        src="../assets/Stone_House/Stone House_DSC5196.JPG.jpg"
      ></v-img>
    </div>
    <div v-else>
      <v-img
        height="80vh"
        contain
        src="../assets/Stone_House/Stone House_DSC5196.JPG.jpg"
      ></v-img>
    </div>
    <div v-if="isMobile()">
      <v-img
        contain
        style="padding: 10vh"
        src="../assets/Stone_House/Stone House_DSC5074.JPG.jpg"
      ></v-img>
    </div>
    <div v-else style="padding-top: 10vh">
      <v-img
        contain
        height="100vh"
        src="../assets/Stone_House/Stone House_DSC5074.JPG.jpg"
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
